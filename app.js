const imageUrls={hero:'https://files.manuscdn.com/search-media/310519663989203423/VtVhegIbrUEAXM5dJjK8xL/JzCdFXGfyHKfsbChER62Qn.jpg',kerala:'https://files.manuscdn.com/search-media/310519663989203423/VtVhegIbrUEAXM5dJjK8xL/zSj4hhXLFesk7UWJgTNssD.jpg',goa:'https://files.manuscdn.com/search-media/310519663989203423/VtVhegIbrUEAXM5dJjK8xL/ZxDaCmL5LTfsrzPRPKD3ne.jpg',rajasthan:'https://files.manuscdn.com/search-media/310519663989203423/VtVhegIbrUEAXM5dJjK8xL/FWkg4tSVVKxyxD2QPrkLK9.jpg',kashmir:'https://files.manuscdn.com/search-media/310519663989203423/VtVhegIbrUEAXM5dJjK8xL/6hmMcTBeDwd9hxv3qPf6oV.jpg',dubai:'https://files.manuscdn.com/search-media/310519663989203423/VtVhegIbrUEAXM5dJjK8xL/rES2nVJHmUCv7QPieoyhwW.jpg',bali:'https://files.manuscdn.com/search-media/310519663989203423/VtVhegIbrUEAXM5dJjK8xL/JaQL2kUWDskXTKEwaKsaZN.jpg',maldives:'https://files.manuscdn.com/search-media/310519663989203423/VtVhegIbrUEAXM5dJjK8xL/feNo8RwKVQ8uyG6z7U6Fo6.jpg'};
const destinations=[
 {name:'Kerala',tag:'India · slow travel',description:'Backwaters, spice trails and soft green mornings.',price:'From ₹18,500',image:imageUrls.kerala,packageId:'kerala-escape'},
 {name:'Goa',tag:'India · coastal',description:'Salt air, late lunches and a little more light.',price:'From ₹12,900',image:imageUrls.goa,packageId:'goa-weekender'},
 {name:'Rajasthan',tag:'India · culture',description:'Desert skies, living history and warm colour.',price:'From ₹29,500',image:imageUrls.rajasthan,packageId:'rajasthan-stories'},
 {name:'Kashmir',tag:'India · mountain',description:'Quiet lakes, pine forests and wide-open air.',price:'From ₹24,500',image:imageUrls.kashmir},
 {name:'Dubai',tag:'International · city',description:'Skyline energy, desert stillness and easy luxury.',price:'From ₹36,000',image:imageUrls.dubai,packageId:'dubai-beyond'},
 {name:'Bali',tag:'International · island',description:'Rice terraces, ritual and a slower rhythm.',price:'From ₹42,500',image:imageUrls.bali,packageId:'bali-two-ways'},
 {name:'Maldives',tag:'International · escape',description:'Blue-on-blue days made for doing less.',price:'From ₹49,900',image:imageUrls.maldives,packageId:'maldives-blue'},
 {name:'Thailand',tag:'International · discovery',description:'Street food, island roads and brilliant nights.',price:'From ₹31,500',image:imageUrls.goa},
 {name:'Europe',tag:'International · grand tour',description:'A route across cities, coastlines and stories.',price:'From ₹74,000',image:imageUrls.rajasthan}
];
const packages=[
 {id:'kerala-escape',name:'Kerala Escape',location:'Alleppey · Munnar · Kochi',duration:'4 Days / 3 Nights',price:'₹18,500',category:['domestic','budget','family'],image:imageUrls.kerala,highlights:['Stay','Transport','Sightseeing','Customizable'],overview:'A lush first taste of Kerala that moves at an easy pace, from misty hills to a night on the water.',itinerary:[['Day 01','Arrive in Kochi · Fort Kochi walk · local dinner'],['Day 02','Drive to Munnar · tea gardens · sunset viewpoint'],['Day 03','Munnar to Alleppey · check in to a private houseboat'],['Day 04','Slow breakfast · return transfer · depart with stories']]},
 {id:'goa-weekender',name:'Goa Weekender',location:'North Goa · South Goa',duration:'3 Days / 2 Nights',price:'₹12,900',category:['domestic','budget','friends'],image:imageUrls.goa,highlights:['Stay','Transfers','Beaches','Flexible pace'],overview:'A breezy coastal reset with room for beach time, neighbourhood cafés and the kind of evenings that run late.',itinerary:[['Day 01','Check in · choose your beach · sunset by the coast'],['Day 02','Old Goa heritage · local food trail · free evening'],['Day 03','Slow morning · last swim · airport transfer']]},
 {id:'rajasthan-stories',name:'Rajasthan Stories',location:'Jaipur · Jodhpur · Udaipur',duration:'6 Days / 5 Nights',price:'₹29,500',category:['domestic','adventure','family'],image:imageUrls.rajasthan,highlights:['Heritage stays','Guide','Road route','Local experiences'],overview:'A thoughtful route through Rajasthan’s colour, craft and living history, with time to linger beyond the landmarks.',itinerary:[['Day 01','Arrive Jaipur · old city orientation'],['Day 02','Amber Fort · block printing studio · rooftop dinner'],['Day 03','Road to Jodhpur · blue city walk'],['Day 04','Mehrangarh Fort · market time · desert flavours'],['Day 05','Udaipur drive · lakefront evening'],['Day 06','Boat ride · departure transfer']]},
 {id:'dubai-beyond',name:'Dubai, Beyond',location:'Dubai · Desert reserve',duration:'5 Days / 4 Nights',price:'₹36,000',category:['international','luxury','family'],image:imageUrls.dubai,highlights:['City stay','Desert safari','Transfers','Curated food'],overview:'A balanced Dubai route that pairs iconic city energy with the quiet scale of the desert.',itinerary:[['Day 01','Arrive · Marina evening · welcome dinner'],['Day 02','Old Dubai · creek crossing · spice market'],['Day 03','Design district · skyline sunset'],['Day 04','Desert reserve · camp dinner · stargazing'],['Day 05','Late breakfast · departure']]},
 {id:'bali-two-ways',name:'Bali, Two Ways',location:'Ubud · Uluwatu · Canggu',duration:'7 Days / 6 Nights',price:'₹42,500',category:['international','honeymoon','luxury'],image:imageUrls.bali,highlights:['Villa stay','Wellness','Scooter day','Island food'],overview:'A two-speed Bali journey: lush and quiet inland, then salt-bright and social by the sea.',itinerary:[['Day 01','Arrive Ubud · garden dinner'],['Day 02','Rice terraces · craft village · sound bath'],['Day 03','Water temple · café afternoon'],['Day 04','Transfer south · beach check-in'],['Day 05','Uluwatu cliffs · sunset seafood'],['Day 06','Canggu free day · choose your pace'],['Day 07','Breakfast · departure']]},
 {id:'maldives-blue',name:'Maldives Blue',location:'Private island · lagoon',duration:'5 Days / 4 Nights',price:'₹49,900',category:['international','honeymoon','luxury'],image:imageUrls.maldives,highlights:['Island stay','Snorkel','Breakfast','Airport boat'],overview:'A deliberately unhurried island escape with a flexible balance of water, sleep and small celebrations.',itinerary:[['Day 01','Speedboat arrival · settle into island time'],['Day 02','House reef snorkel · picnic lunch'],['Day 03','Sunrise paddle · spa afternoon'],['Day 04','Choose your water adventure · farewell dinner'],['Day 05','Breakfast · return boat · depart']]}
];
const experiences=[['Adventure','Find the edge of the map.',imageUrls.kashmir],['Beaches','Follow the light.',imageUrls.goa],['Mountains','Make room for wonder.',imageUrls.kashmir],['Nature','Take the long way.',imageUrls.kerala],['Culture','Go deeper than the postcard.',imageUrls.rajasthan],['Food','Let the table lead.',imageUrls.bali],['Luxury','Keep it beautifully simple.',imageUrls.maldives],['Romantic','Make a little more time.',imageUrls.dubai],['Family','Collect the good kind of chaos.',imageUrls.kerala],['Road Trips','The route is part of it.',imageUrls.rajasthan]];
const $=selector=>document.querySelector(selector);const $$=selector=>[...document.querySelectorAll(selector)];
const packageDeckState={currentIndex:0,total:0,autoplayTimer:0};
function renderDestinations(){const grid=$('#destination-grid');grid.innerHTML=destinations.map((d,i)=>`<article class="destination-card reveal ${i%3===1?'reveal-delay':''}"><img class="destination-image" src="${d.image}" alt="Travel landscape representing ${d.name}" loading="lazy" /><div class="destination-info"><span class="destination-tag">${d.tag}</span><h3>${d.name}</h3><p>${d.description}</p><div class="destination-meta"><b>${d.price}</b><button class="destination-explore" type="button" data-destination="${d.name}" data-package="${d.packageId||''}" aria-label="Explore ${d.name}">Explore <span aria-hidden="true">↗</span></button></div></div></article>`).join('');grid.addEventListener('click',event=>{const button=event.target.closest('.destination-explore');if(!button)return;if(button.dataset.package){openPackage(button.dataset.package);return;}const destinationInput=$('#contact-form [name="destination"]');destinationInput.value=button.dataset.destination;$('#contact').scrollIntoView({behavior:'smooth'});showToast(`Let’s plan a trip to ${button.dataset.destination}.`);});}
function updatePackageDeckControls(){const current=$('#package-current');const total=$('#package-total');if(current&&total){current.textContent=String(packageDeckState.total?packageDeckState.currentIndex+1:0);total.textContent=String(packageDeckState.total);}}
function setPackageDeckIndex(index){const grid=$('#package-grid');if(!grid)return;const cards=[...grid.children];const total=cards.length;packageDeckState.total=total;if(!total){packageDeckState.currentIndex=0;updatePackageDeckControls();return;}const normalized=((index%total)+total)%total;packageDeckState.currentIndex=normalized;cards.forEach((card,cardIndex)=>{card.classList.remove('is-current','is-next','is-prev','is-hidden');if(cardIndex===normalized)card.classList.add('is-current');else if(total>2&&cardIndex===(normalized+total-1)%total)card.classList.add('is-prev');else if(cardIndex===(normalized+1)%total)card.classList.add('is-next');else card.classList.add('is-hidden');});updatePackageDeckControls();}
function startPackageDeckAutoplay(){clearInterval(packageDeckState.autoplayTimer);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;packageDeckState.autoplayTimer=setInterval(()=>{const deck=$('#package-grid');if(document.hidden||$('#package-dialog')?.open||deck?.contains(document.activeElement))return;setPackageDeckIndex(packageDeckState.currentIndex+1);startPackageDeckAutoplay();},3000);}
function renderPackages(filter='all'){const grid=$('#package-grid');const visible=packages.filter(p=>filter==='all'||p.category.includes(filter));grid.innerHTML=visible.map((p,index)=>`<article class="package-card package-card-deck reveal ${index===0?'is-current':''}" data-card-index="${index}"><div class="package-image-wrap"><img class="package-image" src="${p.image}" alt="${p.name} travel package destination" loading="lazy" /><span class="package-label">${p.category[0]}</span><span class="package-duration">${p.duration}</span></div><div class="package-body"><h3>${p.name}</h3><p class="package-sub">${p.location}</p><div class="package-highlights">${p.highlights.map(h=>`<span>✓ ${h}</span>`).join('')}</div><div class="package-footer"><div class="package-price"><small>Starting from</small><strong>${p.price}</strong></div><button class="package-view" type="button" data-package="${p.id}">View package →</button></div></div></article>`).join('');observeReveals();$$('.package-view').forEach(button=>button.addEventListener('click',()=>openPackage(button.dataset.package)));setPackageDeckIndex(0);}
function openPackage(id){const p=packages.find(item=>item.id===id);if(!p)return;$('#dialog-content').innerHTML=`<div class="dialog-hero"><img src="${p.image}" alt="${p.name} destination" /><div class="dialog-hero-content"><p>${p.location} · ${p.duration}</p><h2 id="dialog-title">${p.name}</h2></div></div><div class="dialog-body"><div class="dialog-summary"><div><small>Duration</small><strong>${p.duration}</strong></div><div><small>Starting from</small><strong>${p.price}</strong></div><div><small>Style</small><strong>${p.category[0]}</strong></div></div><h3>Overview</h3><p>${p.overview}</p><h3>Your route</h3><div class="dialog-itinerary">${p.itinerary.map(([day,detail])=>`<div class="dialog-day"><b>${day}</b><span>${detail}</span></div>`).join('')}</div><h3>Included</h3><p>${p.highlights.join(' · ')} · A thoughtful first itinerary · ZABA planning support</p><h3>Important information</h3><p>Prices are illustrative placeholders until ZABA confirms live availability, dates and inclusions. Every detail can be adjusted around your preferences.</p><div class="dialog-actions"><a class="button button-primary" href="#contact" data-dialog-customize>Enquire about this package <span>↗</span></a><button class="button button-outline" type="button" data-dialog-close>Keep exploring</button></div></div>`;const dialog=$('#package-dialog');if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');$('[data-dialog-customize]').addEventListener('click',()=>{dialog.close?.();dialog.removeAttribute('open');$('#contact').scrollIntoView({behavior:'smooth'});showToast('Let’s plan this package with you.');});$('[data-dialog-close]').addEventListener('click',()=>{dialog.close?.();dialog.removeAttribute('open');});}
function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),3600);}
function setupNavigation(){const header=$('.site-header'),toggle=$('.menu-toggle'),menu=$('#primary-menu'),desktop=window.matchMedia('(min-width: 981px)');const setOpen=open=>{menu.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');};const scrollToSection=target=>{const offset=(header?.offsetHeight||0)+18;const top=target.getBoundingClientRect().top+window.scrollY-offset;if(target.id==='top'){window.scrollTo({top:0,behavior:'smooth'});return;}window.scrollTo({top,behavior:'smooth'});};const handleSectionLink=event=>{const link=event.currentTarget;const href=link.getAttribute('href');if(!href||href==='return false'||href==='#')return;const target=document.querySelector(href);if(!target)return;event.preventDefault();scrollToSection(target);history.pushState(null,'',href);if(menu.classList.contains('is-open'))setOpen(false);};const syncHashPosition=()=>{const hash=window.location.hash;if(!hash)return;const target=document.querySelector(hash);if(!target)return;requestAnimationFrame(()=>scrollToSection(target));};window.addEventListener('scroll',()=>header.classList.toggle('is-scrolled',window.scrollY>30),{passive:true});window.addEventListener('load',syncHashPosition);window.addEventListener('hashchange',syncHashPosition);toggle.addEventListener('click',()=>setOpen(!menu.classList.contains('is-open')));$$('.nav-menu a, a[href^="#"]').forEach(link=>link.addEventListener('click',handleSectionLink));$$('.nav-menu a').forEach(link=>link.addEventListener('click',()=>setOpen(false)));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('is-open')){setOpen(false);toggle.focus();}});document.addEventListener('click',event=>{if(menu.classList.contains('is-open')&&!header.contains(event.target))setOpen(false);});desktop.addEventListener?.('change',event=>{if(event.matches)setOpen(false);});}
function setupPackageDeckControls(){$('#package-prev')?.addEventListener('click',()=>{setPackageDeckIndex(packageDeckState.currentIndex-1);startPackageDeckAutoplay();});$('#package-next')?.addEventListener('click',()=>{setPackageDeckIndex(packageDeckState.currentIndex+1);startPackageDeckAutoplay();});startPackageDeckAutoplay();}
const builderSteps=[{label:'Where do you want to go?',hint:'A place, a region, or “somewhere warm”.',type:'input',placeholder:'e.g. Kerala, Bali, somewhere new'},{label:'When are you travelling?',hint:'An exact date helps, but a season works too.',type:'choices',options:[['Soon','Next 1–3 months'],['This year','I’m flexible'],['A special date','I know the dates'],['Not sure','Help me choose']]},{label:'How many people?',hint:'We’ll make the pace work for your group.',type:'choices',options:[['1 traveller','Just me'],['2 travellers','A couple'],['3–5 travellers','A small group'],['6+ travellers','A bigger adventure']]},{label:'What type of trip?',hint:'Choose the feeling that fits best.',type:'choices',options:[['Solo','Room to wander'],['Couple','Time for two'],['Family','Something for everyone'],['Friends','The stories you’ll retell'],['Corporate','A team trip'],['Honeymoon','A beautiful beginning']]},{label:'What’s your budget?',hint:'A range helps us find the best value.',type:'choices',options:[['Under ₹25k','Smart and simple'],['₹25k – ₹50k','More room to explore'],['₹50k – ₹1L','A little extra ease'],['₹1L+','Let’s make it special']]},{label:'What experiences do you want?',hint:'Pick as many as you like.',type:'multi',options:[['Adventure','A little adrenaline'],['Relaxation','Slow, spacious days'],['Sightseeing','See the icons'],['Food','Follow the flavours'],['Shopping','Bring something home'],['Nature','Find the green'],['Culture','Go deeper'],['Luxury','Make it effortless']]}];let builderIndex=0;const builderState={};
function renderBuilderStep(){const step=builderSteps[builderIndex],wrap=$('#builder-step');$('#step-label').textContent=`Step ${builderIndex+1} of ${builderSteps.length}`;$('#step-percent').textContent=`${Math.round(((builderIndex+1)/builderSteps.length)*100)}%`;$('#progress-bar').style.width=`${((builderIndex+1)/builderSteps.length)*100}%`;$('#builder-back').hidden=builderIndex===0;let html=`<p class="builder-step-kicker">${String(builderIndex+1).padStart(2,'0')} / Your trip</p><h3 class="builder-question">${step.label}<span>${step.hint}</span></h3>`;if(step.type==='input')html+=`<input class="builder-input" name="destination" type="text" placeholder="${step.placeholder}" value="${builderState.destination||''}" autocomplete="off" required />`;else html+=`<div class="builder-choice-grid">${step.options.map(([title,detail])=>`<button type="button" class="choice ${(Array.isArray(builderState[builderIndex])?builderState[builderIndex]:[builderState[builderIndex]]).includes(title)?'selected':''}" data-choice="${title}"><span class="choice-check">✓</span><strong>${title}</strong><small>${detail}</small></button>`).join('')}</div>`;wrap.innerHTML=html;$$('.choice').forEach(choice=>choice.addEventListener('click',()=>{if(step.type==='multi'){const selected=builderState[builderIndex]||[];builderState[builderIndex]=selected.includes(choice.dataset.choice)?selected.filter(item=>item!==choice.dataset.choice):[...selected,choice.dataset.choice];}else builderState[builderIndex]=choice.dataset.choice;renderBuilderStep();}));}
function nextBuilderStep(){const step=builderSteps[builderIndex];if(step.type==='input'){const input=$('#builder-step input');if(!input.value.trim()){input.focus();showToast('Add a destination or a feeling to continue.');return}builderState.destination=input.value.trim();}else if(!builderState[builderIndex]||(Array.isArray(builderState[builderIndex])&&!builderState[builderIndex].length)){showToast(step.type==='multi'?'Choose at least one experience.':'Choose the option that feels right.');return}if(builderIndex<builderSteps.length-1){builderIndex++;renderBuilderStep();}else{ $('#builder-form').hidden=true;$('#builder-success').hidden=false;showToast('Your route is taking shape.');}}
function setupBuilder(){renderBuilderStep();$('#builder-next').addEventListener('click',nextBuilderStep);$('#builder-back').addEventListener('click',()=>{if(builderIndex>0){builderIndex--;renderBuilderStep();}});$('#builder-reset').addEventListener('click',()=>{builderIndex=0;Object.keys(builderState).forEach(key=>delete builderState[key]);$('#builder-form').hidden=false;$('#builder-success').hidden=true;renderBuilderStep();});}
function setupContact(){const form=$('#contact-form'),success=$('#contact-success');form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;form.hidden=true;success.hidden=false;showToast('Thanks — your travel request is ready for the ZABA team.');});$('#contact-reset').addEventListener('click',()=>{form.reset();form.hidden=false;success.hidden=true;});}
function observeReveals(){const items=$$('.reveal:not(.observed)');if(!('IntersectionObserver' in window)){items.forEach(item=>item.classList.add('is-visible'));return}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -30px'});items.forEach(item=>{item.classList.add('observed');observer.observe(item);});}
function setupDialog(){const dialog=$('#package-dialog');$('.dialog-close').addEventListener('click',()=>{dialog.close?.();dialog.removeAttribute('open');});dialog.addEventListener('click',event=>{if(event.target===dialog){dialog.close?.();dialog.removeAttribute('open');}});}
function setupHeroVideoScroll(){
 const video=$('#hero-video'),hero=$('.hero'),sticky=$('.hero-sticky'),states=$$('.story-state');
 if(!video||!hero||!sticky)return;
 const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const mobileVideo=window.matchMedia('(max-width: 700px), (pointer: coarse) and (max-width: 1024px)');
 const frameRate=Number(video.dataset.frameRate);
 let duration=0,frame=0,pendingTime=null,lastRequestedFrame=-1,metadataReady=false,frameReady=false;
 let sectionTop=0,scrollDistance=1,activeStory='';
 video.pause();
 const setStory=progress=>{
  const active=progress<.2?'.story-home':progress<.75?'.story-journey':'.story-dream';
  if(active===activeStory)return;
  activeStory=active;
  states.forEach(state=>state.classList.remove('is-active'));
  $(active)?.classList.add('is-active');
  hero.dataset.journeyStage=active.slice(7);
 };
 const refreshMetrics=()=>{
  const rect=hero.getBoundingClientRect();
  sectionTop=rect.top+window.scrollY;
  scrollDistance=Math.max(1,hero.offsetHeight-sticky.offsetHeight);
 };
 const seekTo=time=>{
  const targetFrame=Math.min(Math.floor(time*frameRate),Math.ceil(duration*frameRate)-1);
  if(video.seeking){
   pendingTime=targetFrame===lastRequestedFrame?null:time;
   return;
  }
  if(targetFrame===lastRequestedFrame)return;
  if(Math.abs(time-video.currentTime)<.001){lastRequestedFrame=targetFrame;return}
  pendingTime=null;
  lastRequestedFrame=targetFrame;
  video.currentTime=time;
 };
 const sync=()=>{
  frame=0;
  if(reduceMotion.matches){setStory(0);return}
  const progress=Math.min(1,Math.max(0,(window.scrollY-sectionTop)/scrollDistance));
  setStory(progress);
  if(!metadataReady||!frameReady||hero.classList.contains('video-fallback'))return;
  const targetTime=progress===1?Math.max(0,duration-.001):progress*duration;
  seekTo(targetTime);
 };
 const queue=()=>{if(!frame)frame=requestAnimationFrame(sync)};
 const onLoadedMetadata=()=>{
  if(!Number.isFinite(video.duration)||video.duration<=0||!Number.isFinite(frameRate)||frameRate<=0||!video.videoWidth||!video.videoHeight){
   hero.classList.add('video-fallback');
   return;
  }
  duration=video.duration;
  metadataReady=true;
  video.pause();
  queue();
 };
 const onLoadedData=()=>{
  frameReady=video.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA;
  if(frameReady)queue();
 };
 const onSeeked=()=>{
  if(pendingTime===null)return;
  const nextTime=pendingTime;
  pendingTime=null;
  lastRequestedFrame=-1;
  seekTo(nextTime);
 };
 const onError=()=>hero.classList.add('video-fallback');
 const onMotionChange=()=>{
  hero.classList.toggle('reduced-motion',reduceMotion.matches);
  if(reduceMotion.matches){
   video.pause();
   video.removeAttribute('src');
   video.load();
   resetVideoReadiness();
   setStory(0);
  }else{
   startVideo();
   queue();
  }
 };
 const resetVideoReadiness=()=>{
  metadataReady=false;
  frameReady=false;
  duration=0;
  pendingTime=null;
  lastRequestedFrame=-1;
 };
 const selectedVideoSource=()=>mobileVideo.matches&&video.dataset.videoSrcMobile?video.dataset.videoSrcMobile:video.dataset.videoSrc;
 const startVideo=()=>{
  const source=selectedVideoSource();
  if(location.protocol==='file:'){
   hero.classList.add('video-fallback');
   return;
  }
  if(reduceMotion.matches||!source||video.getAttribute('src')===source)return;
  video.pause();
  resetVideoReadiness();
  hero.classList.remove('video-fallback');
  video.preload='metadata';
  video.src=source;
  video.load();
 };
 const onResize=()=>{refreshMetrics();startVideo();queue()};
 const onPageHide=()=>{
  cancelAnimationFrame(frame);
  window.removeEventListener('scroll',queue);
  window.removeEventListener('resize',onResize);
  window.removeEventListener('orientationchange',onResize);
  window.removeEventListener('pagehide',onPageHide);
  reduceMotion.removeEventListener?.('change',onMotionChange);
  mobileVideo.removeEventListener?.('change',onResize);
  observer?.disconnect();
 };
 video.addEventListener('loadedmetadata',onLoadedMetadata);
 video.addEventListener('loadeddata',onLoadedData);
 video.addEventListener('seeked',onSeeked);
 video.addEventListener('error',onError);
 window.addEventListener('scroll',queue,{passive:true});
 window.addEventListener('resize',onResize);
 window.addEventListener('orientationchange',onResize);
 window.addEventListener('pagehide',onPageHide);
 reduceMotion.addEventListener?.('change',onMotionChange);
 mobileVideo.addEventListener?.('change',onResize);
 const observer='ResizeObserver'in window?new ResizeObserver(onResize):null;
 observer?.observe(hero);
 observer?.observe(sticky);
 refreshMetrics();
 hero.classList.toggle('reduced-motion',reduceMotion.matches);
 setStory(0);
 if(video.readyState>=HTMLMediaElement.HAVE_METADATA)onLoadedMetadata();
 if(video.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA)onLoadedData();
 if(!reduceMotion.matches)startVideo();
 queue();
}
renderDestinations();renderPackages();setupNavigation();setupPackageDeckControls();setupContact();setupDialog();setupHeroVideoScroll();observeReveals();
