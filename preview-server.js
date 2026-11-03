const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.mp4': 'video/mp4',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const file = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end();
    return;
  }

  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) {
      response.writeHead(404).end('Not found');
      return;
    }

    const headers = {
      'Content-Type': mime[path.extname(file)] || 'application/octet-stream',
      'Accept-Ranges': 'bytes'
    };
    const range = request.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match) {
        response.writeHead(416, { 'Content-Range': `bytes */${stat.size}` }).end();
        return;
      }

      let start = match[1] ? Number(match[1]) : 0;
      let end = match[2] ? Number(match[2]) : stat.size - 1;
      if (!match[1] && match[2]) start = Math.max(0, stat.size - Number(match[2]));
      end = Math.min(end, stat.size - 1);
      if (start > end || start >= stat.size) {
        response.writeHead(416, { 'Content-Range': `bytes */${stat.size}` }).end();
        return;
      }

      headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
      headers['Content-Length'] = end - start + 1;
      response.writeHead(206, headers);
      if (request.method === 'HEAD') response.end();
      else fs.createReadStream(file, { start, end }).pipe(response);
      return;
    }

    headers['Content-Length'] = stat.size;
    response.writeHead(200, headers);
    if (request.method === 'HEAD') response.end();
    else fs.createReadStream(file).pipe(response);
  });
}).listen(Number(process.env.PORT) || 3000, '127.0.0.1', () => {
  console.log(`ZABA preview: http://127.0.0.1:${Number(process.env.PORT) || 3000}`);
});
