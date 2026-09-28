let referenceCatalog;
let referenceReturn='#references';
let referenceFocus=null;
const referencePositions=new Map();
const referenceStorageKey='deepsearch.references.excluded.v1';
const referencePageSize=24;
let referenceDecisions=Object.create(null);
let referenceStorageLoaded=false;
let referenceStorageError='';
let referenceStorageBlocked=false;
const refStatus={reviewed:'내지 검토',previewed:'내지 미리보기',candidate:'검토 후보'};
const referenceViewerPages=new Map();
const refCategory={publication:'발행 문서',template:'템플릿',project:'편집 프로젝트'};
const referenceLocalNote='제외 기록은 이 브라우저에만 저장됩니다. 다른 기기·브라우저 및 원본 catalog에는 동기화되지 않습니다.';
const refList=items=>`<ul>${(items||[]).map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`;
const refAsset=value=>/^references\/assets\/[\w.-]+$/.test(value||'');
const refPdf=value=>/^references\/documents\/[\w.-]+\.pdf$/i.test(value||'');
const referenceHasPages=r=>['reviewed','previewed'].includes(r.status)&&r.pages?.length>0
 &&/^https:\/\//.test(r.sourceUrl||'')
 &&r.pages.every(p=>Number.isInteger(p.pdfPage)&&p.pdfPage>0&&refAsset(p.image));
const referenceTab=query=>query.get('tab')==='candidates'?'candidates':'documents';
const referencePageLabel=p=>'PDF '+p.pdfPage+'쪽'+(p.printedPage?' / 인쇄 '+p.printedPage+'쪽':'');
const referencePdfLink=r=>refPdf(r.localPdf)
 ?`<a href="${esc(r.localPdf)}" target="_blank" rel="noopener">원본 PDF 열기 ↗</a>`
 :referenceSource(r);
const refCategoryOf=r=>r.category||'publication';
const referenceIsExcluded=r=>Object.prototype.hasOwnProperty.call(referenceDecisions,r.id)?referenceDecisions[r.id]:r.defaultExcluded===true;
const referencePriorReview=r=>r.priorReview?`<p class="reference-note">이전 검토: ${esc(r.priorReview)}</p>`:'';
function referenceReadStored(){
 const value=window.localStorage.getItem(referenceStorageKey);
 if(value===null)return Object.create(null);
 const saved=JSON.parse(value);
 if(Array.isArray(saved)&&saved.every(id=>typeof id==='string'))return Object.fromEntries(saved.map(id=>[id,true]));
 if(!saved||typeof saved!=='object'||Array.isArray(saved)||!Object.values(saved).every(v=>typeof v==='boolean'))throw Error('Invalid saved selection');
 return Object.assign(Object.create(null),saved);
}
function referenceLoadSelection(){
 if(referenceStorageLoaded)return;
 referenceStorageLoaded=true;
 try{referenceDecisions=referenceReadStored();}
 catch{
  referenceStorageBlocked=true;
  referenceStorageError='제외 기록을 읽을 수 없습니다. 현재 탭에서만 선별할 수 있으며 새로고침 후에는 유지되지 않습니다. file URL 또는 브라우저 저장 권한을 확인해 주세요.';
 }
}
function referenceSetExcluded(id,excluded){
 let next=Object.assign(Object.create(null),referenceDecisions);
 if(!referenceStorageBlocked){
  try{next=referenceReadStored();}
  catch{referenceStorageBlocked=true;}
 }
 Object.defineProperty(next,id,{value:excluded,enumerable:true,writable:true,configurable:true});
 referenceDecisions=next;
 try{
  if(referenceStorageBlocked)throw Error('Storage unavailable');
  window.localStorage.setItem(referenceStorageKey,JSON.stringify(next));
  referenceStorageError='';
 }catch{
  referenceStorageBlocked=true;
  referenceStorageError='제외 기록을 저장하지 못했습니다. 이번 변경은 현재 탭에만 반영되며 새로고침하면 사라질 수 있습니다. 원본 자료는 삭제되지 않았습니다.';
 }
}
function referenceStorageNotice(){
 return `<p class="reference-note">${referenceLocalNote}</p>${referenceStorageError?`<p class="reference-storage-error" role="alert">${esc(referenceStorageError)}</p>`:''}`;
}
function referenceSource(r){
 const primary=/^https:\/\//.test(r.sourceUrl||'')?`<a href="${esc(r.sourceUrl)}" target="_blank" rel="noopener">원문 ↗</a>`:'<span>원문 링크 미확보</span>';
 return primary+(r.relatedSources||[]).filter(s=>/^https:\/\//.test(s.url)).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)} ↗</a>`).join('');
}
function referenceCheckbox(r){
 return `<label class="reference-exclude"><input type="checkbox" data-reference-exclude="${esc(r.id)}" ${referenceIsExcluded(r)?'checked':''} aria-label="${esc(r.title)} 제외"><span>제외</span></label>`;
}
function referenceDetailHref(r){
 const params=new URLSearchParams({from:referenceReturn});
 return '#references/'+encodeURIComponent(r.id)+'?'+params.toString();
}
function referenceCard(r,preview=false){
 const media=preview
  ?`<div class="reference-thumb"><img src="${esc(r.preview.image)}" alt="${esc(r.title)} 공개 미리보기" loading="lazy" width="480" height="360"></div>`
  :`<div class="reference-contact-sheet" style="--sheet-count:${Math.min(3,r.pages.length)}">${r.pages.slice(0,3).map(p=>`<figure><img src="${esc(p.image)}" alt="${esc(r.title)} ${esc(referencePageLabel(p))}" loading="lazy" width="480" height="640"><figcaption>PDF ${esc(p.pdfPage)}쪽</figcaption></figure>`).join('')}</div>`;
 return `<article class="reference-tile ${referenceIsExcluded(r)?'is-excluded':''}"><a class="reference-open" data-reference-open="${esc(r.id)}" href="${esc(referenceDetailHref(r))}">${media}<div class="reference-meta">${esc(r.documentType)} · ${esc(refStatus[r.status])}</div><h3>${esc(r.title)}</h3><p>${esc(r.publisher)}</p>${preview?`<p>${esc(r.preview.label)}</p>`:''}</a><div class="reference-actions">${referenceCheckbox(r)}${referencePdfLink(r)}</div>${referencePriorReview(r)}</article>`;
}

function referenceViewer(r){
 const selected=Math.min(r.pages.length-1,referenceViewerPages.get(r.id)||0);
 const p=r.pages[selected];
 return `<div class="reference-viewer"><div class="reference-viewer-toolbar"><span role="status">${esc(referencePageLabel(p))} · 선택 내지 ${selected+1}/${r.pages.length}</span><a href="${esc(p.image)}" target="_blank" rel="noopener">원본 이미지 확대 ↗</a></div><a class="reference-viewer-image" href="${esc(p.image)}" target="_blank" rel="noopener" aria-label="${esc(referencePageLabel(p))} 원본 이미지 크게 보기"><img src="${esc(p.image)}" alt="${esc(r.title)} ${esc(referencePageLabel(p))}"></a><div class="reference-thumbnails" role="group" aria-label="내지 선택">${r.pages.map((page,i)=>`<button type="button" data-reference-page="${i}" aria-pressed="${i===selected}" aria-label="${esc(referencePageLabel(page))} 보기"><img src="${esc(page.image)}" alt="" loading="lazy" width="96" height="120"><span>PDF ${esc(page.pdfPage)}쪽</span></button>`).join('')}</div>${p.observation?`<details class="reference-page-observation"><summary>이 페이지 관찰</summary><p>${esc(p.observation)}</p></details>`:''}</div>`;
}
function referenceBindViewer(r){
 const host=main.querySelector('[data-reference-viewer]');
 if(!host)return;
 const bind=()=>{
  const buttons=[...host.querySelectorAll('[data-reference-page]')];
  const choose=index=>{
   referenceViewerPages.set(r.id,index);
   host.innerHTML=referenceViewer(r);
   bind();
   host.querySelectorAll('[data-reference-page]')[index]?.focus({preventScroll:true});
  };
  buttons.forEach((button,i)=>{
   button.onclick=()=>choose(i);
   button.onkeydown=e=>{
    let index;
    if(e.key==='ArrowRight')index=Math.min(buttons.length-1,i+1);
    if(e.key==='ArrowLeft')index=Math.max(0,i-1);
    if(e.key==='Home')index=0;
    if(e.key==='End')index=buttons.length-1;
    if(index!==undefined){e.preventDefault();choose(index);}
   };
  });
 };
 bind();
}
function referenceTextRow(r){
 return `<li class="reference-text-row ${referenceIsExcluded(r)?'is-excluded':''}"><div><a data-reference-open="${esc(r.id)}" href="${esc(referenceDetailHref(r))}">${esc(r.title)}</a><p>${esc(r.publisher)} · ${esc(refCategory[refCategoryOf(r)])} · ${esc(refStatus[r.status])}</p><p class="reference-note">미리보기 미확보 · 내지 미검토</p>${referencePriorReview(r)}</div><div class="reference-actions">${referenceCheckbox(r)}${referenceSource(r)}</div></li>`;
}
function referenceSelection(records,query){
 const filters=['documentType','medium','language','status','category','styleGroup'];
 const selection=query.get('selection')||'active';
 const q=(query.get('q')||'').toLowerCase();
 return records.filter(r=>(referenceTab(query)==='documents'?referenceHasPages(r):!referenceHasPages(r))&&filters.every(key=>!query.get(key)||(key==='category'?refCategoryOf(r):r[key])===query.get(key))
  &&(selection==='all'||(selection==='excluded'?referenceIsExcluded(r):!referenceIsExcluded(r)))
  &&(!q||[r.title,r.publisher,...(r.strengths||[])].join(' ').toLowerCase().includes(q)))
  .sort((a,b)=>(b.previewAddedAt||'').localeCompare(a.previewAddedAt||''));
}
function referencePageHref(query,page){
 const params=new URLSearchParams(query);
 if(page>1)params.set('page',String(page));else params.delete('page');
 return '#references'+(params.size?'?'+params.toString():'');
}
function referenceRestore(token,state){
 if(!state)return;
 queueMicrotask(()=>{
  if(token!==requestId)return;
  if(state.name)main.querySelector('form')?.elements.namedItem(state.name)?.focus({preventScroll:true});
  if(state.id){
   const nodes=main.querySelectorAll('[data-reference-open]');
   const target=[...nodes].find(el=>el.dataset.referenceOpen===state.id)
    ||[...main.querySelectorAll('[data-reference-exclude]')].find(el=>el.dataset.referenceExclude===state.id)
    ||main.querySelector('[data-reference-exclude]');
   target?.focus({preventScroll:true});
  }
  window.scrollTo({top:state.top||0});
 });
}
function referenceBindSelection(id,query,token){
 main.querySelectorAll('[data-reference-exclude]').forEach(input=>{
  input.onchange=async()=>{
   referenceSetExcluded(input.dataset.referenceExclude,input.checked);
   const state={top:window.scrollY,id:input.dataset.referenceExclude};
   await renderReferences(id,query,token);
   referenceRestore(token,state);
  };
 });
}
async function renderReferences(id,query=new URLSearchParams(),token){
 markNav('references');document.title='레퍼런스 · DeepSearch';
 referenceLoadSelection();
 main.innerHTML='<p role="status">레퍼런스를 불러오는 중입니다.</p>';
 try{
  if(!referenceCatalog){
   const res=await fetch('references/catalog.json');
   if(!res.ok)throw Error('load');
   referenceCatalog=await res.json();
  }
  if(token!==requestId)return;
  const records=referenceCatalog.items;
  if(id){
   let decoded;
   try{decoded=decodeURIComponent(id);}catch{decoded='';}
   const r=records.find(item=>item.id===decoded);
   if(!r){main.innerHTML='<h1>레퍼런스를 찾을 수 없습니다.</h1><a href="#references">레퍼런스 목록</a>';return;}
   const from=query.get('from');
   if(from&&/^#references(?:\?|$)/.test(from))referenceReturn=from;
   const reviewed=r.status==='reviewed';
   const actual=referenceHasPages(r);
   if(!from)referenceReturn=actual?'#references':'#references?tab=candidates';
   const media=actual?`<section data-reference-viewer aria-label="원본 내지">${referenceViewer(r)}</section>`
    :refAsset(r.preview?.image)?`<figure class="reference-candidate-preview"><a href="${esc(r.preview.image)}" target="_blank" rel="noopener"><img src="${esc(r.preview.image)}" alt="${esc(r.title)} 공개 미리보기"></a><figcaption><strong>공개 미리보기 · 내지 미검토</strong><p>${esc(r.preview.label)}</p></figcaption></figure>`
    :'<p class="reference-unavailable">미리보기 미확보 · 내지 미검토</p>';
   main.innerHTML=`<a class="back" href="${esc(referenceReturn)}">← 레퍼런스</a><div class="page-title"><h1>${esc(r.title)}</h1><p>${esc(r.publisher)} · ${esc(r.documentType)} · ${esc(refStatus[r.status])}</p></div><div class="reference-actions">${referenceCheckbox(r)}${referencePdfLink(r)}</div>${referenceStorageNotice()}${r.status==='previewed'?'<p class="reference-note">내지 미리보기이며, 읽기·디자인 검수 승인을 뜻하지 않습니다.</p>':''}<div class="reference-detail">${media}<details class="reference-analysis"><summary>분석·출처·확인 범위</summary>${referencePriorReview(r)}<p>${esc(refCategory[refCategoryOf(r)])} · ${esc(r.language)} · ${esc(r.medium)}</p><section><h2>${reviewed?'관찰한 편집 방식':'검토할 항목'}</h2>${refList(r.strengths)}</section><section><h2>확인 범위와 한계</h2>${refList(r.cautions)}${!actual?'<p class="reference-note">검토 후보이며 원본 내지·제작 파일·세부 조판을 검증한 자료가 아닙니다.</p>':''}</section><section><h2>예시에 적용할 실험</h2><p>${esc(r.application)}</p>${r.exampleHref?`<a href="${esc(r.exampleHref)}">비교할 현재 예시 →</a><p class="reference-note">적용 제안이며 개선 완료를 뜻하지 않습니다.</p>`:''}</section><section><h2>원문 출처</h2>${referenceSource(r)}<p class="reference-note">${esc(referenceCatalog.scope||'')} 원본의 저작권은 해당 권리자에게 있습니다.</p></section></details></div>`;
   referenceBindSelection(id,query,token);
   if(actual)referenceBindViewer(r);
   return;
  }
  const filters=[['category','자료 분류'],['styleGroup','편집 유형'],['documentType','문서 형식'],['medium','매체'],['language','언어'],['status','검토 상태']];
  const chosen=referenceSelection(records,query);
  const pageCount=Math.max(1,Math.ceil(chosen.length/referencePageSize));
  const page=Math.min(pageCount,Math.max(1,parseInt(query.get('page'),10)||1));
  referenceReturn=referencePageHref(query,page);
  const visible=chosen.slice((page-1)*referencePageSize,page*referencePageSize);
  const interiors=visible.filter(referenceHasPages);
  const previews=visible.filter(r=>!interiors.includes(r)&&refAsset(r.preview?.image));
  const textOnly=visible.filter(r=>!interiors.includes(r)&&!previews.includes(r));
  const reviewed=records.filter(r=>r.status==='reviewed'&&r.pages?.length);
  const count=`전체 확보 ${records.length}건 (제외 포함) · 기본 활성 ${records.filter(r=>r.defaultExcluded!==true).length}건 · 현재 검토대상 ${records.filter(r=>!referenceIsExcluded(r)).length}건 · 내지 검토 ${reviewed.length}건 / ${reviewed.reduce((n,r)=>n+r.pages.length,0)}쪽 · 검토 후보 ${records.filter(r=>r.status==='candidate').length}건`;
  const nav=`<nav class="reference-pagination" aria-label="레퍼런스 목록 페이지">${page>1?`<a href="${esc(referencePageHref(query,page-1))}" aria-label="이전 페이지">←</a>`:'<span aria-hidden="true">←</span>'}<span aria-current="page">${page} / ${pageCount}</span>${page<pageCount?`<a href="${esc(referencePageHref(query,page+1))}" aria-label="다음 페이지">→</a>`:'<span aria-hidden="true">→</span>'}</nav>`;

  const tab=referenceTab(query);
  const tabHref=value=>{
   const params=new URLSearchParams(query);
   params.delete('page');params.delete('status');
   if(value==='candidates')params.set('tab',value);else params.delete('tab');
   return referencePageHref(params,1);
  };
  const filterControl=([key,label])=>`<label>${label}<select name="${key}"><option value="">전체</option>${(key==='category'?Object.keys(refCategory):[...new Set(records.map(r=>r[key]))].filter(Boolean)).map(v=>`<option value="${esc(v)}" ${query.get(key)===v?'selected':''}>${esc(key==='status'?refStatus[v]:key==='category'?refCategory[v]:v)}</option>`).join('')}</select></label>`;
  const extra=filters.filter(([key])=>!['documentType','styleGroup'].includes(key));
  main.innerHTML=`<div class="page-title"><h1>레퍼런스</h1></div><nav class="reference-tabs" aria-label="자료 보기"><a href="${esc(tabHref('documents'))}" ${tab==='documents'?'aria-current="page"':''}>실제 문서</a><a href="${esc(tabHref('candidates'))}" ${tab==='candidates'?'aria-current="page"':''}>탐색 후보</a></nav><form class="reference-filters" role="search"><label>검색<input type="search" name="q" value="${esc(query.get('q')||'')}" placeholder="문서명, 발행사"></label>${filterControl(['styleGroup','편집 유형'])}${filterControl(['documentType','문서 형식'])}<label>선별 상태<select name="selection">${[['active','검토대상'],['excluded','제외'],['all','전체']].map(([value,label])=>`<option value="${value}" ${(query.get('selection')||'active')===value?'selected':''}>${label}</option>`).join('')}</select></label><button type="submit" class="button">검색</button><a href="${tab==='candidates'?'#references?tab=candidates':'#references'}">초기화</a><details class="reference-extra-filters" ${extra.some(([key])=>query.get(key))?'open':''}><summary>추가 필터</summary><div>${extra.map(filterControl).join('')}</div></details></form><div class="reference-list-heading"><p class="reference-count" role="status">${tab==='documents'?'실제 문서':'탐색 후보'} ${chosen.length}건 · ${chosen.length?(page-1)*referencePageSize+1:0}–${Math.min(page*referencePageSize,chosen.length)}건 표시</p>${nav}</div>${interiors.length?`<section class="reference-section" aria-label="실제 문서"><div class="reference-gallery">${interiors.map(r=>referenceCard(r)).join('')}</div></section>`:''}${previews.length?`<section class="reference-section"><h2>검토 후보 · 공개 미리보기</h2><div class="reference-gallery">${previews.map(r=>referenceCard(r,true)).join('')}</div></section>`:''}${textOnly.length?`<section class="reference-section"><h2>검토 후보 · 미리보기 미확보</h2><ul class="reference-text-list">${textOnly.map(referenceTextRow).join('')}</ul></section>`:''}${!chosen.length?'<p>조건에 맞는 문서가 없습니다.</p>':''}${nav}<details class="reference-collection-info"><summary>수집 범위·집계</summary><p>${count}</p><p class="reference-note">${esc(referenceCatalog.scope||'')} · ${esc(referenceCatalog.updated||'')}</p></details>${referenceStorageNotice()}`;
  const form=main.querySelector('form');
  const search=()=>{
   const params=new URLSearchParams();
   if(tab==='candidates')params.set('tab','candidates');
   for(const [key,value]of new FormData(form))if(value.trim())params.set(key,value.trim());
   location.hash='references'+(params.size?'?'+params.toString():'');
  };
  form.onsubmit=e=>{e.preventDefault();search();};
  form.querySelectorAll('select').forEach(s=>s.onchange=()=>{referenceFocus={name:s.name,top:window.scrollY};search();});
  main.querySelectorAll('[data-reference-open]').forEach(link=>{
   link.onclick=()=>referencePositions.set(referenceReturn,{id:link.dataset.referenceOpen,top:window.scrollY});
  });
  referenceBindSelection(undefined,query,token);
  const state=referenceFocus||referencePositions.get(referenceReturn);
  referenceFocus=null;
  referenceRestore(token,state);
 }catch{
  if(token===requestId){
   main.innerHTML='<p role="alert">레퍼런스를 불러오지 못했습니다.</p><button class="button" id="retry-references">다시 불러오기</button>';
   main.querySelector('#retry-references').onclick=()=>renderReferences(id,query,token);
  }
 }
}
