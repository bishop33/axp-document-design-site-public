/* Purpose-led examples; all figures are fictional learning data. */
function dataExamples(){
 const values=[6.4,5.8,4.9,4.2];
 const chart=(kind,label)=>`<div class="library-chart" data-chart="${kind}" role="img" aria-label="${label}"></div>`;
 const line=chart('line','평균 첫 응답시간: 1분기 6.4, 2분기 5.8, 3분기 4.9, 4분기 4.2시간');
 const pie=chart('pie','4분기 문의 유형: 이용 방법 50%, 계정 30%, 결제 20%. 합계 100%.');
 const card=(title,question,visual,read,tip)=>`<figure><figcaption><h3>${title}</h3><p>${question}</p></figcaption><div class="data-visual">${visual}</div><p class="data-reading">${read}</p><p class="data-tip">${tip}</p></figure>`;
 return `<div class="data-examples">`+
 card('표 · 정확한 값 조회','2분기 응답시간은 얼마인가요?',`<table><caption>평균 첫 응답시간 (시간)</caption><thead><tr><th scope="col">기간</th><th scope="col">시간</th></tr></thead><tbody>${values.map((v,i)=>`<tr><th scope="row">${i+1}분기</th><td>${v.toFixed(1)}</td></tr>`).join('')}</tbody></table>`,'2분기 행에서 5.8시간을 찾습니다.','정확한 값을 찾아보거나 여러 항목을 대조할 때 사용합니다. 숫자는 오른쪽에 정렬하고 소수 자릿수를 통일합니다.')+
 card('막대 · 크기 비교','어느 분기의 응답시간이 가장 긴가요?',`<p class="chart-unit">평균 첫 응답시간 (시간)</p>${chart('bar','평균 첫 응답시간: 1분기 6.4, 2분기 5.8, 3분기 4.9, 4분기 4.2시간. 0~8시간 척도.')}`,'1분기가 가장 길고, 4분기가 가장 짧습니다.','막대 길이로 크기를 비교합니다. 이 예시는 0~8시간의 같은 척도를 사용합니다.')+
 card('선 · 시간에 따른 변화','응답시간은 어떻게 변하고 있나요?',`<p class="chart-unit">평균 첫 응답시간 (시간)</p>${line}`,'1분기부터 4분기까지 계속 줄었습니다.','시간 순서대로 연결해 변화 방향을 보여줍니다. 순서가 없는 제품이나 부서 이름을 선으로 연결하지 않습니다.')+
 card('파이 · 전체 중 비중','전체 문의 중 이용 방법 문의는 얼마나 되나요?',`<p class="chart-unit">4분기 문의 유형별 비중 (전체 100%)</p>${pie}`,'이용 방법 문의가 전체의 50%를 차지합니다.','서로 겹치지 않는 항목의 합계가 100%일 때 사용합니다. 항목이 많거나 비중 차이가 작으면 막대가 비교하기 좋습니다.')+`</div>`;
}

const guideChartInstances=[];
let guideChartObserver;
function clearGuideCharts(){
 guideChartObserver?.disconnect();
 guideChartInstances.splice(0).forEach(chart=>chart.dispose());
}
function guideChartOption(kind,width=600){const data=kind==='pie'?{labels:['이용 방법','계정','결제'],values:[50,30,20]}:{labels:['1분기','2분기','3분기','4분기'],values:[6.4,5.8,4.9,4.2]};return documentChartOption({chartType:kind,data,axisMax:8},false,width)}
function mountGuideCharts(){
 clearGuideCharts();
 if(!window.echarts)return;
 document.querySelectorAll('[data-chart]').forEach(el=>{
  const chart=echarts.init(el,null,{renderer:'svg'});
  chart.setOption(guideChartOption(el.dataset.chart,el.clientWidth));
  guideChartInstances.push(chart);
 });
 guideChartObserver=new ResizeObserver(()=>guideChartInstances.forEach(chart=>{const el=chart.getDom();chart.resize();chart.setOption(guideChartOption(el.dataset.chart,el.clientWidth),true)}));
 guideChartInstances.forEach(chart=>guideChartObserver.observe(chart.getDom()));
}
window.addEventListener('hashchange',clearGuideCharts);
window.addEventListener('DOMContentLoaded',()=>{mountGuideCharts();document.fonts.ready.then(()=>guideChartInstances.forEach(chart=>chart.resize()))});
window.addEventListener('beforeprint',()=>guideChartInstances.forEach(chart=>chart.resize()));
window.addEventListener('afterprint',()=>guideChartInstances.forEach(chart=>chart.resize()));
