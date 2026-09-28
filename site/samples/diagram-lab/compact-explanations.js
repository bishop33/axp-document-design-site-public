// Compact geometry: keep labels readable; reduce node heights and unused space.
{
const box=(x,y,w,title,sub='',dark=false)=>rect(x,y,w,sub?60:44,dark?'#303030':'#fff','#999')+txt(x+w/2,y+26,title,'title'+(dark?' white':''),'middle')+(sub?txt(x+w/2,y+46,sub,'small'+(dark?' muted':''),'middle'):'');
let b=rect(217,10,199,230,'#eee','none')+txt(232,29,'기업의 직접 수행 범위','small');
b+=box(10,74,149,'위탁 제조사','제품 생산 · 납품')+box(233,67,167,'가상 화장품 브랜드','기획 · 발주 · 판매',true)+box(478,42,151,'자사몰','소비자 직접 판매')+box(478,154,151,'유통사','매입 후 재판매');
b+=line('M159 87H233')+label(178,77,'납품')+line('M233 111H159',true)+label(178,132,'대금');
b+=line('M400 80H444V61H478')+label(420,49,'판매')+line('M478 82H455V105H400',true)+label(459,124,'결제');
b+=line('M400 115H435V172H478')+label(443,160,'납품')+line('M478 193H400',true)+label(436,214,'정산');
b+=txt(233,178,'매출원: 제품 판매대금','title')+txt(233,202,'생산은 외부에 위탁합니다.','small');
b+=line('M12 267H43')+txt(53,272,'제품·판매','small')+line('M168 267H199',true)+txt(209,272,'현금','small');

let i='';
const stage=(x,w,s)=>txt(x+w/2,22,s,'title','middle')+line(`M${x} 35H${x+w}`,false,false);
i+=stage(8,94,'01 공급')+stage(140,104,'02 제조')+stage(287,96,'03 브랜드')+stage(426,88,'04 판매 채널')+stage(558,74,'05 소비');
i+=box(8,64,94,'원료 공급사','성분 원료')+box(8,148,94,'용기·포장사','용기 / 단상자');
// OEM and ODM are alternatives inside the manufacturing stage, not sequential tasks.
i+=rect(140,56,104,152,'#f2f2f2','#aaa')+txt(192,82,'ODM','title','middle')+txt(192,101,'개발 + 생산','small','middle')+txt(192,135,'또는','small','middle')+txt(192,168,'OEM','title','middle')+txt(192,187,'위탁 생산','small','middle');
i+=rect(287,96,96,72,'#303030','#303030')+txt(335,123,'가상 브랜드','title white','middle')+txt(335,146,'기획 · 판매','small muted','middle')+txt(335,188,'대상 기업','small','middle');
i+=box(426,64,88,'자사몰','직접 판매')+box(426,148,88,'유통사','매입 후 판매');
i+=rect(558,102,74,60,'white','#999')+txt(595,128,'소비자','title','middle')+txt(595,149,'구매 · 사용','small','middle');
// Two supply inputs converge; two selling routes branch and rejoin.
i+=line('M102 94H119V174H102',false,false)+line('M119 132H140')+txt(121,121,'투입','small','middle');
i+=line('M244 132H287')+txt(265,121,'제품','small','middle');
i+=line('M383 132H405V94H426')+line('M405 132V178H426')+txt(405,81,'판매','small','middle');
i+=line('M514 94H536V178H514',false,false)+line('M536 132H558')+txt(536,121,'전달','small','middle');
// Support is a separate service layer, not another ownership or product-flow node.
i+=rect(8,238,624,35,'#f2f2f2','none')+txt(23,260,'지원 서비스','title')+txt(114,260,'시험·분석','small')+txt(263,260,'패키지 디자인','small')+txt(441,260,'물류·보관','small');

let p='';
const icons=[vessel,tube,bottles,check];const titles=['01 원료 배합','02 내용물 확인','03 충전·포장','04 출하 검사'];const tools=['배합 탱크','시료·시험','충전 설비','검사 기록'];const changes=[['원료를 혼합해','내용물을 만듭니다.'],['내용물의 품질을','확인합니다.'],['용기에 담고','포장합니다.'],['검사를 마친 제품의','출하를 승인합니다.']];
titles.forEach((s,j)=>{let x=8+j*158;p+=rect(x,8,137,220,'#fff','#aaa')+rect(x,8,137,33,'#e8e8e8','none')+txt(x+11,30,s,'title');p+=`<g transform="translate(${x+39},68) scale(.65)">${icons[j](0,0)}</g>`;p+=txt(x+68,156,tools[j],'title','middle')+txt(x+68,183,changes[j][0],'small','middle')+txt(x+68,204,changes[j][1],'small','middle');if(j<3)p+=line(`M${x+137} 110H${x+158}`);});

let f='';
['영업','물류','품질 담당'].forEach((s,j)=>{let x=8+j*210;f+=rect(x,8,204,347,j===1?'#f3f3f3':'#fafafa','#ddd')+rect(x,8,204,30,'#ddd','none')+txt(x+102,29,s,'title','middle');});
f+=box(37,51,145,'주문 접수')+box(247,51,145,'재고 확인');
f+=`<path d="M319 125L388 174L319 223L250 174Z" fill="white" stroke="#777"/>`+txt(319,169,'출고 가능','title','middle')+txt(319,188,'재고입니까?','small','middle');
f+=box(37,152,145,'고객과 일정 협의')+box(37,273,145,'입고 일정 확정')+box(457,152,145,'출하 품질 확인')+box(457,235,145,'승인 제품 출고')+box(457,299,145,'고객 인도','',true);
f+=line('M182 73H247')+line('M319 95V125')+line('M250 174H182')+label(189,160,'아니요')+line('M388 174H457')+label(419,160,'예');
f+=line('M109 196V273')+line('M182 295H227V182Q241 174 227 166V110H291V95')+label(185,249,'입고 후')+line('M529 196V235')+label(540,219,'적합')+line('M529 279V299');

const specs=[['business',b,287,'제품 판매대금이 매출원이며 생산은 위탁합니다. 유통사 반품·정산 조건은 계약으로 확인합니다.'],['industry',i,282,'ODM은 개발·생산, OEM은 생산 위탁으로 단순화했습니다. 실제 역할과 거래 관계는 계약에 따라 다릅니다.'],['process',p,239,'그림은 기능을 설명하는 개념도입니다. 실제 생산능력·병목·검사 기준은 설비 사양과 기록으로 확인합니다.'],['flow',f,367,'재고 부족 시 일정 협의 후 재고를 다시 확인합니다. 품질 부적합 처리 경로는 생략한 가상 업무 예시입니다.']];
specs.forEach(([id,body,h,note])=>{const el=document.getElementById(id);el.className='sample';el.querySelector('.diagram').innerHTML=svg(h,body,el.querySelector('h2').textContent);el.querySelector('.reading').outerHTML=`<p class="interpretation">${note}</p>`;el.querySelector('.running').remove();el.querySelector('footer').remove();el.querySelector('.kicker').remove();el.querySelector('.fighead span').remove();});
const host=document.getElementById('samples');const blocks=[...host.children];host.replaceChildren();
for(let n=0;n<2;n++){const sheet=document.createElement('article');sheet.className='paper';sheet.innerHTML=`<div class="running"><strong>DeepSearch</strong><span>설명형 도식 / 본문 삽입 크기 · 가상 사례</span></div>`;sheet.append(blocks[n*2],blocks[n*2+1]);sheet.insertAdjacentHTML('beforeend',`<footer><span>파일럿 0.0.1 · 실제 기업 평가에 사용하지 않습니다.</span><span>${n+1} / 02</span></footer>`);host.append(sheet);}
const industry=document.getElementById('industry');
industry.querySelector('.lead').textContent='공급·제조·브랜드·판매 채널·소비자를 연결해, 산업이 작동하는 흐름과 대상 기업의 역할을 설명합니다.';
industry.querySelector('.fighead h3').textContent='화장품 산업의 흐름과 대상 기업';
industry.querySelector('.caption').textContent='화살표는 가치 전달의 대표 경로입니다. 실제 물류·계약 관계는 다를 수 있으며, 현금 흐름은 생략했습니다.';
}
