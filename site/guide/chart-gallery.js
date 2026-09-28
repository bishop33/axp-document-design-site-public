const chartGroups={all:'전체',table:'표',comparison:'크기 비교',trend:'시간과 변화',share:'구성비',relationship:'관계와 분포',change:'증감 요인'};
let chartGroup='all',catalogObserver;
const catalogInstances=[];
function chartAppearanceControls(){return `<div class="chart-appearance" role="group" aria-label="차트 강조 방식"><span>표현 비교</span><button data-appearance="ink" aria-pressed="${chartAppearance==='ink'}">흑백</button><button data-appearance="accent" aria-pressed="${chartAppearance==='accent'}">강조색</button></div>`}
function wireChartAppearance(){main.dataset.chartAppearance=chartAppearance;main.querySelectorAll('[data-appearance]').forEach(button=>button.onclick=()=>{chartAppearance=button.dataset.appearance;main.dataset.chartAppearance=chartAppearance;main.querySelectorAll('[data-appearance]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));catalogInstances.forEach(c=>{const el=c.getDom(),item=chartCatalog.find(x=>x.id===el.dataset.catalogChart);c.setOption(catalogOption(item,el.classList.contains('compact'),el.clientWidth),true)})})}
function clearCatalogCharts(){catalogObserver?.disconnect();catalogInstances.splice(0).forEach(c=>c.dispose())}
function catalogOption(item,compact=false,width=600){return documentChartOption(item,compact,width)}
function catalogTable(item,raw=false){
 const kind=item.chartType||item.id;
 let columns=item.data.columns,rows=item.data.rows;
 if(raw&&item.group!=='table'){
  if(item.data.series){columns=['항목',...item.data.series.map(s=>s.name)];rows=item.data.labels.map((name,i)=>[name,...item.data.series.map(s=>s.values[i])]);}
  else if(kind==='scatter'){columns=['캠페인','광고비 (백만원)','문의 (건)'];rows=item.data.points.map((p,i)=>[String(i+1),...p]);}
  else if(kind==='heatmap'){columns=['시간대',...item.data.x];rows=item.data.values.map((r,i)=>[item.data.y[i],...r]);}
  else {columns=['항목',kind==='pie'?'비중 (%)':kind==='line'?'시간':'백만원'];rows=item.data.labels.map((name,i)=>[name,item.data.values[i]]);}
 }
 return `<table class="catalog-table table-${esc(kind)}"><caption>${esc(item.unit||item.name)}</caption><thead><tr>${columns.map((c,i)=>`<th class="${typeof rows[0][i]==='number'?'numeric':''}" scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((row,rowIndex)=>`<tr class="${row.includes('소계')?'subtotal':row.includes('총계')?'total':kind==='table-values'&&rowIndex===rows.length-1?'highlight':''}">${row.map((v,i)=>i===0?`<th scope="row">${esc(v)}</th>`:`<td class="${typeof v==='number'?'numeric':''}">${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
function catalogPreview(item,compact=false){return item.group==='table'?`<div class="catalog-table-wrap">${catalogTable(item)}</div>`:`<div class="catalog-chart ${compact?'compact':''}" data-catalog-chart="${item.id}" ${compact?'aria-hidden="true"':`role="img" aria-label="${esc(item.unit+'. '+item.takeaway)}"`}></div>`}
function mountCatalogCharts(){
 clearCatalogCharts();
 document.querySelectorAll('[data-catalog-chart]').forEach(el=>{const item=chartCatalog.find(x=>x.id===el.dataset.catalogChart);const option=catalogOption(item,el.classList.contains('compact'),el.clientWidth);const c=echarts.init(el,null,{renderer:'svg'});c.setOption(option);catalogInstances.push(c)});
 catalogObserver=new ResizeObserver(()=>catalogInstances.forEach(c=>{const el=c.getDom(),item=chartCatalog.find(x=>x.id===el.dataset.catalogChart);c.resize();c.setOption(catalogOption(item,el.classList.contains('compact'),el.clientWidth),true)}));catalogInstances.forEach(c=>catalogObserver.observe(c.getDom()));
 document.fonts.ready.then(()=>catalogInstances.forEach(c=>c.resize()));
}
function renderCharts(){
 clearGuideCharts();markNav('charts');document.title='차트 · DeepSearch';
 const list=chartCatalog.filter(x=>chartGroup==='all'||x.group===chartGroup);
 main.innerHTML=`<div class="page-title"><h1>데이터의 표현을 보고,<br>내 문서에 맞게 선택합니다.</h1><p>정확한 값을 찾는 표부터 차이·변화·관계를 보여주는 차트까지.<br>예시를 선택하면 사용 목적과 배치 기준을 자세히 볼 수 있습니다.</p></div>${chartAppearanceControls()}<div class="catalog-filters" role="group" aria-label="표현 목적">${Object.entries(chartGroups).map(([key,name])=>`<button class="button" data-chart-group="${key}" aria-pressed="${chartGroup===key}">${name}</button>`).join('')}</div><p class="catalog-count" role="status">${list.length}개 예시</p><div class="chart-gallery">${list.map(item=>`<a class="chart-tile" href="#chart/${item.id}" aria-label="${esc(item.name)} 상세 보기"><div class="chart-thumbnail"><p class="thumbnail-message">${esc(item.headline)}</p>${catalogPreview(item,true)}</div><div class="chart-tile-heading"><h2>${esc(item.name)}</h2><span class="arrow" aria-hidden="true">↗</span></div><p>${esc(item.question)}</p></a>`).join('')}</div><section class="catalog-footer"><h2>문서 작업에서 만든 사례도 함께 기록합니다</h2><p>현재는 표현 방식을 설명하는 가상 데이터 예시입니다. 실제 문서 사례를 추가할 때는 문서의 목적, 선택한 이유, 데이터 출처와 공개 가능 범위를 함께 기록합니다.</p><p><a href="#basics/data">표현을 선택하기 전에 살펴볼 기본 원칙 →</a></p></section>`;
 main.querySelectorAll('[data-chart-group]').forEach(b=>b.onclick=()=>{chartGroup=b.dataset.chartGroup;renderCharts();main.querySelector(`[data-chart-group="${chartGroup}"]`).focus({preventScroll:true})});mountCatalogCharts();wireChartAppearance();
}
function renderChartDetail(id){
 clearGuideCharts();markNav('charts');const item=chartCatalog.find(x=>x.id===id);
 if(!item){main.innerHTML='<h1>예시를 찾을 수 없습니다.</h1><a href="#charts">차트 목록으로 돌아가기</a>';return}
 document.title=item.name+' · 차트 · DeepSearch';
 main.innerHTML=`<a class="back" href="#charts">← 차트 목록</a><div class="page-title"><h1>${esc(item.name)}</h1><p>${esc(item.question)}</p></div>${chartAppearanceControls()}<div class="catalog-stage"><div class="catalog-sheet"><h2 class="chart-message">${esc(item.headline)}</h2>${item.group!=='table'?`<p class="catalog-unit">${esc(item.unit)}</p>`:''}${catalogPreview(item)}<p class="catalog-takeaway">${esc(item.takeaway)}</p><p class="hint">${esc(item.origin)}</p></div></div><div class="catalog-guidance"><section><h2>이럴 때 사용합니다</h2><p>${esc(item.use)}</p></section><section><h2>다른 표현이 나을 때</h2><p>${esc(item.avoid)}</p></section><section><h2>표현할 때 지킬 기준</h2><ul>${item.rules.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></section><section><h2>문서에 적용할 때</h2><p>인쇄용은 실제 판형에서 숫자와 주석을 확인합니다. 발표용은 뒤쪽에서도 라벨이 읽히는지 확인하고, 필요하면 항목 수를 줄입니다. 이 화면의 글자 크기를 그대로 복사하지 않습니다.</p></section></div>${item.group!=='table'?`<details class="catalog-data"><summary>예시에 사용한 데이터 보기</summary>${catalogTable(item,true)}</details>`:''}<details class="catalog-data"><summary>근거와 예시의 범위</summary><p>이 지면은 표현 방식을 설명하기 위해 직접 만든 학습 예시입니다. 실제 업무 데이터나 독자 시험 결과가 아닙니다.</p><p><a href="${esc(item.source)}">UK Government Analysis Function · 데이터 시각화 지침</a></p></details><p class="catalog-back"><a href="#charts">← 다른 표와 차트 살펴보기</a></p>`;mountCatalogCharts();wireChartAppearance();
}
window.addEventListener('hashchange',clearCatalogCharts);
window.addEventListener('beforeprint',()=>catalogInstances.forEach(c=>c.resize()));
window.addEventListener('afterprint',()=>catalogInstances.forEach(c=>c.resize()));
