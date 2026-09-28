const documentLabels={single:'기업현황',columns:'투자검토 IM','side-note':'사업보고서 분석 발췌',modules:'기술 제안서','slide-chart':'산업분석','slide-compare':'IR'};
const mediumLabels={print:'인쇄용',slides:'발표용'};
const orientationLabels={portrait:'세로',landscape:'가로'};
let libraryReturn='#grids',examplesReturn='#examples';

function documentKey(record){return record.documentType||record.id}
function orientationOf(record){return record.orientation||(record.grid.size[0]>record.grid.size[1]?'landscape':'portrait')}
function systemFor(record){return gridSystems.find(system=>system.id===record.gridSystem)}
function layoutReferences(record){
 const system=systemFor(record);
 if(!system)return `<a class="reference-source" href="${esc(record.reference)}" target="_blank" rel="noopener">배치 참고: ${esc(record.referenceName)} ↗</a>`;
 return `<p class="hint">${esc(system.evidence)}</p>${system.references.map(source=>`<p class="content-reference"><a href="${esc(source.url)}" target="_blank" rel="noopener">그리드 참고: ${esc(source.title)} ↗</a><span>${esc(source.note)}</span></p>`).join('')}`;
}
function appliedExamples(){return examples.filter(record=>!['baseline','type'].includes(record.kind))}
function representativePage(record){return record.pages.find(page=>page.gridSystem===record.gridSystem&&/대조|비교|대응/.test(page.layoutRole||''))||record.pages.find(page=>page.gridSystem===record.gridSystem)||record.pages[0]}
function normalizeExamples(records){return records.flatMap(record=>record.variants?.length?record.variants.map(variant=>({...record,...variant})):record)}
function selectedOptions(values,current){return '<option value="">전체</option>'+values.map(([value,label])=>`<option value="${esc(value)}"${value===current?' selected':''}>${esc(label)}</option>`).join('')}
function filterControl(key,label,values,query){return `<label><span>${label}</span><select name="${key}">${selectedOptions(values,query.get(key)||'')}</select></label>`}
function distinct(values){return [...new Set(values.filter(Boolean))].map(value=>[value,value])}
function catalogFilters(route,query,systems=false){
 const docs=Object.entries(documentLabels);
 return `<form class="library-filters" aria-label="${systems?'그리드':'예시'} 조건">
 ${!systems?filterControl('document','문서 형식',docs,query):filterControl('family','구조',distinct(gridSystems.map(s=>s.family)),query)}
 ${filterControl('medium','매체',Object.entries(mediumLabels),query)}
 ${filterControl('orientation','방향',Object.entries(orientationLabels),query)}
 ${filterControl('purpose','용도',distinct(systems?gridSystems.flatMap(s=>s.purposes||[]):appliedExamples().map(r=>r.purpose)),query)}
 ${!systems?filterControl('system','그리드',gridSystems.map(s=>[s.id,s.name]),query):''}
 <button class="filter-reset" type="reset">초기화</button></form>`;
}
function bindCatalogFilters(route,query){
 const form=main.querySelector('.library-filters');
 form.addEventListener('change',event=>{
   const params=new URLSearchParams(new FormData(form));
   for(const [key,value] of [...params])if(!value)params.delete(key);
   const name=event.target.name;
   location.hash=route+(params.size?'?'+params.toString():'');
   requestAnimationFrame(()=>main.querySelector(`select[name="${name}"]`)?.focus({preventScroll:true}));
 });
 form.addEventListener('reset',event=>{event.preventDefault();location.hash=route;});
}
function gridDiagram(system,showRegions=true){
 const [w,h]=system.size,cols=system.columns,rows=system.rows,gap=system.gap,m=system.margin,y=system.y,height=system.height;
 const cw=(w-2*m-gap*(cols-1))/cols,rh=(height-gap*(rows-1))/rows;
 const xs=new Set([m,w-m]),ys=new Set([y,y+height]);
 for(let col=0;col<cols;col++){xs.add(m+col*(cw+gap));xs.add(m+col*(cw+gap)+cw)}
 for(let row=0;row<rows;row++){ys.add(y+row*(rh+gap));ys.add(y+row*(rh+gap)+rh)}
 const regions=showRegions?(system.regions||[]).map(region=>{
   const x=m+region.column*(cw+gap),top=y+region.row*(rh+gap),width=cw*region.colSpan+gap*(region.colSpan-1),high=rh*region.rowSpan+gap*(region.rowSpan-1);
   return `<g><rect x="${x}" y="${top}" width="${width}" height="${high}" fill="#eff1f2"/><text x="${x+width/2}" y="${top+high/2}" dominant-baseline="middle" text-anchor="middle" font-size="${w>700?15:11}" fill="#555">${esc(region.label)}</text></g>`;
 }).join(''):'';
 return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(system.name)}: ${cols}열 ${rows}행, ${gap}pt 거터"><rect width="${w}" height="${h}" fill="white"/>${regions}<g fill="none" stroke="#c82d30" stroke-opacity=".48" stroke-width=".6">${[...xs].map(x=>`<path d="M${x} ${y}v${height}"/>`).join('')}${[...ys].map(top=>`<path d="M${m} ${top}h${w-2*m}"/>`).join('')}</g></svg>`;
}
function systemTile(system){
 const count=appliedExamples().filter(r=>r.gridSystem===system.id).length;
 return `<a class="tile system-tile" href="#system/${esc(system.id)}"><div class="thumb grid-specimen">${gridDiagram(system)}</div><div class="tile-heading"><h3>${esc(system.name)}</h3><span aria-hidden="true">↗</span></div><p>${esc(system.description)}</p><span class="kind">${mediumLabels[system.medium]} · ${orientationLabels[system.orientation]} · ${system.columns}열 × ${system.rows}행</span><span class="application-count">${count?`${count}개 적용안`:'구조 연구 · 적용안 준비 중'}</span></a>`;
}
function exampleTile(record){
 const system=systemFor(record);
 return `<a class="tile application-tile" href="#example/${esc(record.id)}" aria-label="${esc(record.name)} · ${esc(system?.name||kindNames[record.kind])}"><div class="thumb"><img src="${esc(representativePage(record).svg)}" alt="${esc(record.name)} ${esc(system?.name||'')} 적용 지면" loading="lazy" width="${record.grid.size[0]}" height="${record.grid.size[1]}"></div><div class="tile-heading"><h3>${esc(record.name)}</h3><span aria-hidden="true">↗</span></div><p class="application-system">${esc(system?.name||kindNames[record.kind])}</p><p>${esc(record.purpose||record.brief?.audience||'')}</p><span class="kind">${mediumLabels[record.medium]} · ${orientationLabels[orientationOf(record)]} · ${record.pages.length}쪽</span></a>`;
}
function renderGridLibrary(query){
 markNav('grids');document.title='그리드 · DeepSearch';libraryReturn=location.hash;
 const filtered=gridSystems.filter(s=>(!query.get('medium')||s.medium===query.get('medium'))&&(!query.get('orientation')||s.orientation===query.get('orientation'))&&(!query.get('family')||s.family===query.get('family'))&&(!query.get('purpose')||(s.purposes||[]).includes(query.get('purpose'))));
 main.innerHTML=`<div class="page-title library-title"><h1>그리드</h1><p>본문의 흐름, 표와 차트의 비중, 주석의 위치에 따른 지면 구조.</p></div>${catalogFilters('grids',query,true)}<div class="catalog-count" role="status">${filtered.length}개 시스템</div><div class="gallery system-gallery">${filtered.map(systemTile).join('')}</div>${!filtered.length?'<p class="catalog-empty">선택한 조건의 그리드가 없습니다. 조건을 줄이거나 초기화해 주세요.</p>':''}<section class="library-support"><h2>함께 보는 조판 기준</h2><div><a href="#grid/baseline">본문 기준선</a><a href="#grid/type-scale">인쇄 본문 크기 비교</a><a href="#reference">원본 관찰과 자체 설정</a><a href="#basics/grid">기본 가이드의 그리드와 정렬</a></div></section>`;
 bindCatalogFilters('grids',query);
}
function renderExamples(query){
 markNav('examples');document.title='예시 · DeepSearch';examplesReturn=location.hash;
 const filtered=appliedExamples().filter(r=>(!query.get('document')||documentKey(r)===query.get('document'))&&(!query.get('medium')||r.medium===query.get('medium'))&&(!query.get('orientation')||orientationOf(r)===query.get('orientation'))&&(!query.get('purpose')||r.purpose===query.get('purpose'))&&(!query.get('system')||r.gridSystem===query.get('system')));
 main.innerHTML=`<div class="page-title library-title"><h1>예시</h1><p>문서의 목적에 맞춘 원고, 그리드, 서체와 데이터 표현.</p></div>${catalogFilters('examples',query)}<div class="catalog-count" role="status">${filtered.length}개 적용안 · ${new Set(filtered.map(documentKey)).size}개 문서 형식</div><div class="gallery application-gallery">${filtered.map(exampleTile).join('')}</div>${!filtered.length?'<p class="catalog-empty">선택한 조건의 예시가 없습니다. 조건을 줄이거나 초기화해 주세요.</p>':''}`;
 bindCatalogFilters('examples',query);
}
function renderSystem(id){
 const system=gridSystems.find(s=>s.id===id);
 if(!system){main.innerHTML='<p class="error">그리드를 찾을 수 없습니다. <a href="#grids">목록으로 돌아가기</a></p>';return}
 markNav('grids');document.title=system.name+' · 그리드 · DeepSearch';
 const applied=appliedExamples().filter(r=>r.gridSystem===id);
 main.innerHTML=`<a class="back" href="${esc(libraryReturn)}">← 그리드</a><div class="detail-title"><p class="type-label">${esc(system.family)} / ${mediumLabels[system.medium]} / ${orientationLabels[system.orientation]}</p><h1>${esc(system.name)}</h1><p>${esc(system.description)}</p></div><div class="system-definition"><div><div class="controls"><button class="button" data-definition="regions" aria-pressed="true">대표 배치</button><button class="button" data-definition="lines" aria-pressed="false">그리드만</button></div><div class="system-drawing">${gridDiagram(system)}</div><p class="hint">회색 영역은 병합 방식의 한 예이며, 빨간 선은 이 시스템의 자체 배치 기준입니다.</p></div><div class="system-copy"><section><h2>구성 원리</h2><ul>${system.composition.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></section><section><h2>적합한 내용</h2><p>${esc(system.use)}</p></section><section><h2>다른 구조가 필요한 때</h2><p>${esc(system.avoid)}</p></section><dl class="specs"><div><dt>판형</dt><dd>${system.size.join(' × ')}pt</dd></div><div><dt>바탕 그리드</dt><dd>${system.columns}열 × ${system.rows}행</dd></div><div><dt>거터</dt><dd>${system.gap}pt</dd></div><div><dt>좌우 여백</dt><dd>${system.margin}pt</dd></div></dl><details class="settings"><summary>관찰 근거와 자체 설정</summary><p class="hint">${esc(system.evidence)}</p>${(system.references||[]).map(s=>`<p class="content-reference"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)} ↗</a><span>${esc(s.note)}</span></p>`).join('')}</details></div></div><section class="system-applications"><div class="section-title-row"><h2 class="section-heading">이 그리드의 적용 예시</h2><a href="#examples?system=${encodeURIComponent(id)}">적용안 ${applied.length}개 →</a></div><div class="gallery">${applied.map(exampleTile).join('')}</div>${!applied.length?'<p class="hint">이 시스템의 실제 문서 적용안은 준비 중입니다.</p>':''}</section>`;
 main.querySelectorAll('[data-definition]').forEach(button=>button.onclick=()=>{
   main.querySelector('.system-drawing').innerHTML=gridDiagram(system,button.dataset.definition==='regions');
   main.querySelectorAll('[data-definition]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
 });
}
function variantNavigation(record){
 if(!record.gridSystem)return '';
 const variants=appliedExamples().filter(r=>documentKey(r)===documentKey(record));
 return `<div class="variant-navigation"><label for="layout-variant">같은 문서의 다른 그리드</label><select id="layout-variant">${variants.map(r=>`<option value="${esc(r.id)}"${r.id===record.id?' selected':''}>${esc(systemFor(r)?.name||r.gridSystem)} · ${orientationLabels[orientationOf(r)]} · ${mediumLabels[r.medium]}</option>`).join('')}</select><a href="#system/${esc(record.gridSystem)}">그리드 정의 →</a><label class="comparison-page-control" for="comparison-page"><span>비교할 페이지</span><select id="comparison-page">${record.pages.map((page,index)=>`<option value="${esc(page.manuscriptKey||String(index))}">${index+1}쪽 · ${esc(page.title)}</option>`).join('')}</select></label></div>`;
}
