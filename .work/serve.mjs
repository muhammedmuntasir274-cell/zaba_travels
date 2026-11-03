import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || process.argv[2] || 3000);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4'};
const server = http.createServer((req,res)=>{
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const relative = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '');
  const file = path.resolve(root, relative);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('Not found'); return; }
  const ext = path.extname(file).toLowerCase();
  const total = fs.statSync(file).size;
  const headers = {'Content-Type': types[ext] || 'application/octet-stream', 'Cache-Control':'no-cache', 'Accept-Ranges':'bytes'};
  const range = req.headers.range;
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (match) {
      const start = match[1] ? Number(match[1]) : Math.max(0, total - Number(match[2] || 0));
      const end = match[2] ? Math.min(Number(match[2]), total - 1) : total - 1;
      if (start <= end && start >= 0) {
        res.writeHead(206, {...headers, 'Content-Range': `bytes ${start}-${end}/${total}`, 'Content-Length': end - start + 1});
        if (req.method === 'HEAD') return res.end();
        return fs.createReadStream(file, {start, end}).pipe(res);
      }
    }
    res.writeHead(416, {'Content-Range': `bytes */${total}`});
    return res.end();
  }
  res.writeHead(200, {...headers, 'Content-Length': total});
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(file).pipe(res);
});
const host = process.env.HOST || '127.0.0.1';
server.listen(port, host, ()=>console.log(`ZABA preview listening on http://${host}:${port}`));
