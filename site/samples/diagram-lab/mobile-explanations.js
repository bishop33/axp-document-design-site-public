// Narrow-screen reflow: the A4 insertion drawings stay as they are for print and wide screens.
// Below 700px each diagram is redrawn top-to-bottom so labels stay readable without horizontal scrolling.
// Same entities, relations and line meanings (solid: product/sale, dashed: cash) as the A4 drawing.
{
const W=300;
// The A4 drawing is hidden on narrow screens, and a marker inside a hidden svg does not render, so each vertical drawing carries its own.
const msvg=(h,body,title,id)=>`<svg class="m" viewBox="0 0 ${W} ${h}" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrow-${id}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#555"/></marker></defs>${body.replaceAll('url(#arrow)',`url(#arrow-${id})`)}</svg>`;
const box=(x,y,w,title,sub='',dark=false,h=52)=>rect(x,y,w,h,dark?'#303030':'#fff',dark?'#303030':'#999')+txt(x+w/2,y+(sub?22:h/2+5),title,'title'+(dark?' white':''),'middle')+(sub?txt(x+w/2,y+41,sub,'small'+(dark?' muted':''),'middle'):'');

// 01 Business: maker above, company in the middle, channels below.
let b=box(60,8,180,'위탁 제조사','제품 생산 · 납품');
b+=line('M125 60V112')+label(84,92,'납품')+line('M175 112V60',true)+label(184,92,'대금');
b+=rect(10,112,280,132,'#eee','none')+txt(22,131,'기업의 직접 수행 범위','small');
b+=box(60,142,180,'가상 화장품 브랜드','기획 · 발주 · 판매',true);
b+=txt(150,220,'매출원: 제품 판매대금','title','middle')+txt(150,237,'생산은 외부에 위탁합니다.','small','middle');
b+=line('M55 244V300')+label(16,276,'판매')+line('M95 300V244',true)+label(102,276,'결제');
b+=line('M205 244V300')+label(166,276,'납품')+line('M245 300V244',true)+label(252,276,'정산');
b+=box(10,300,130,'자사몰','소비자 직접 판매')+box(160,300,130,'유통사','매입 후 재판매');
b+=line('M12 380H43')+txt(51,385,'제품·판매','small')+line('M150 380H181',true)+txt(189,385,'현금','small');

// 02 Industry: stages as rows, stage name in the left column.
const stage=(cy,n,s)=>txt(10,cy-6,n,'small')+txt(10,cy+12,s,'title');
let i=stage(34,'01','공급')+box(88,8,98,'원료 공급사','성분 원료')+box(192,8,98,'용기·포장사','용기·단상자');
i+=line('M137 60V68H240V60',false,false)+line('M190 68V88')+txt(200,84,'투입','small');
i+=stage(116,'02','제조')+rect(88,88,202,56,'#f2f2f2','#aaa')+txt(138,110,'ODM','title','middle')+txt(138,129,'개발 + 생산','small','middle')+txt(190,120,'또는','small','middle')+txt(242,110,'OEM','title','middle')+txt(242,129,'위탁 생산','small','middle');
i+=line('M190 144V172')+txt(200,162,'제품','small');
i+=stage(198,'03','브랜드')+rect(88,172,202,52,'#303030','#303030')+txt(189,194,'가상 브랜드','title white','middle')+txt(189,213,'기획 · 판매','small muted','middle')+txt(10,232,'대상 기업','small');
i+=line('M190 224V238',false,false)+line('M137 238H242',false,false)+line('M137 238V252')+line('M242 238V252')+txt(250,248,'판매','small');
i+=stage(278,'04','판매 채널')+box(88,252,98,'자사몰','직접 판매')+box(192,252,98,'유통사','매입 후 판매');
i+=line('M137 304V316H242V304',false,false)+line('M190 316V344')+txt(200,335,'전달','small');
i+=stage(368,'05','소비')+box(88,344,202,'소비자','구매 · 사용',false,50);
i+=rect(10,410,280,52,'#f2f2f2','none')+txt(22,431,'지원 서비스','title')+txt(22,452,'시험·분석 · 패키지 디자인 · 물류·보관','small');

// 03 Process: four steps in a 2 x 2 reading order.
let p='';
const icons=[vessel,tube,bottles,check];const titles=['01 원료 배합','02 내용물 확인','03 충전·포장','04 출하 검사'];const tools=['배합 탱크','시료·시험','충전 설비','검사 기록'];const changes=[['원료를 혼합해','내용물을 만듭니다.'],['내용물의 품질을','확인합니다.'],['용기에 담고','포장합니다.'],['검사를 마친 제품의','출하를 승인합니다.']];
titles.forEach((s,j)=>{const x=8+(j%2)*150,y=8+Math.floor(j/2)*246;p+=rect(x,y,134,220,'#fff','#aaa')+rect(x,y,134,33,'#e8e8e8','none')+txt(x+10,y+22,s,'title');p+=`<g transform="translate(${x+37},${y+60}) scale(.65)">${icons[j](0,0)}</g>`;p+=txt(x+67,y+148,tools[j],'title','middle')+txt(x+67,y+175,changes[j][0],'small','middle')+txt(x+67,y+196,changes[j][1],'small','middle');});
p+=line('M142 118H158')+line('M225 228V241H75V254')+line('M142 364H158');

// 04 Flow: one column, owner shown under each step; the "no" loop runs on the left.
let f=box(80,8,140,'주문 접수','영업')+line('M150 60V84');
f+=box(80,84,140,'재고 확인','물류')+line('M150 136V158');
f+=`<path d="M150 158L220 196L150 234L80 196Z" fill="white" stroke="#777"/>`+txt(150,192,'출고 가능','title','middle')+txt(150,210,'재고입니까?','small','middle');
f+=line('M80 196H75V262')+label(22,190,'아니요')+line('M220 196H225V262')+label(232,190,'예');
f+=box(8,262,134,'고객과 일정 협의','영업')+line('M75 314V338')+box(8,338,134,'입고 일정 확정','영업');
f+=line('M8 364H3V110H80')+label(16,102,'입고 후');
f+=box(158,262,134,'출하 품질 확인','품질 담당')+line('M225 314V338')+label(232,330,'적합');
f+=box(158,338,134,'승인 제품 출고','품질 담당')+line('M225 390V414')+box(158,414,134,'고객 인도','품질 담당',true);

[['business',b,396],['industry',i,470],['process',p,482],['flow',f,474]].forEach(([id,body,h])=>{
  const el=document.getElementById(id);const figure=el.querySelector('.diagram');
  figure.querySelector('svg').classList.add('d');
  figure.insertAdjacentHTML('beforeend',msvg(h,body,el.querySelector('h2').textContent+' (세로 배치)','m-'+id));
});
}
