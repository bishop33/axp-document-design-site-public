const txt=(x,y,s,cls='',anchor='start')=>`<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${s}</text>`;
const rect=(x,y,w,h,fill='#fff',stroke='#999')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}"/>`;
const line=(d,dash=false,arrow=true)=>`<path d="${d}" fill="none" stroke="#555" stroke-width="1.4" ${dash?'stroke-dasharray="5 4"':''} ${arrow?'marker-end="url(#arrow)"':''}/>`;
const label=(x,y,s)=>`<g>${rect(x-6,y-14,s.length*12+12,20,'white','none')}${txt(x,y,s,'small')}</g>`;
const node=(x,y,w,h,title,sub='',dark=false)=>rect(x,y,w,h,dark?'#303030':'#fff',dark?'#303030':'#999')+txt(x+w/2,y+(sub?28:h/2+5),title,'title'+(dark?' white':''),'middle')+(sub?txt(x+w/2,y+49,sub,'small'+(dark?' muted':''),'middle'):'');
const svg=(h,body,title)=>`<svg viewBox="0 0 640 ${h}" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#555"/></marker></defs>${body}</svg>`;
const table=rows=>`<table>${rows.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join('')}</table>`;
const page=(id,n,type,title,lead,figtitle,body,caption,rows,note)=>`<section id="${id}" class="paper"><div class="running"><strong>DeepSearch</strong><span>설명형 도식 라이브러리 / 가상 사례</span></div><p class="kicker">${n} / ${type}</p><h2>${title}</h2><p class="lead">${lead}</p><div class="figure"><div class="fighead"><h3>${figtitle}</h3><span>구조·관계는 설명용 가정입니다.</span></div><div class="diagram">${body}</div><p class="caption">${caption}</p></div><div class="reading"><h3>도식에서 읽어야 할 내용</h3>${table(rows)}<p>${note}</p></div><footer><span>파일럿 0.0.1 · 실제 기업 평가에 사용하지 않습니다.</span><span>${n} / 04</span></footer></section>`;

// 01 Business model: entity ownership and transaction directions share one map.
let business='';
business+=rect(210,26,220,327,'#eee','none')+txt(226,50,'대상 기업이 직접 수행하는 영역','small');
business+=txt(15,25,'외부 제조','small')+txt(480,25,'판매 채널','small');
business+=node(14,118,150,78,'위탁 제조사','제품 생산 · 납품');
business+=node(235,105,170,95,'가상 화장품 브랜드','기획 · 발주 · 판매 관리',true);
business+=node(476,80,150,70,'자사몰','소비자 직접 판매');
business+=node(476,232,150,70,'유통사','제품 매입 후 재판매');
business+=node(235,264,170,65,'매출이 발생하는 지점','제품 판매대금');
business+=line('M164 137H235')+label(176,124,'납품');
business+=line('M235 181H164',true)+label(176,173,'대금');
business+=line('M405 123H444V99H476')+label(430,76,'판매');
business+=line('M476 137H453V174H405',true)+label(459,168,'결제');
business+=line('M405 191H442V250H476')+label(447,230,'납품');
business+=line('M476 286H435V315H405',true)+label(447,310,'정산');
business+=line('M320 200V264',true)+label(332,237,'수취');
business+=rect(14,382,612,61,'#f4f4f4','none')+txt(30,406,'사업의 핵심','title')+txt(30,428,'직접 제조하지 않고, 상품 기획과 판매를 통해 수익을 만드는 구조입니다.','small');
business+=line('M16 472H56')+txt(67,477,'제품·판매 흐름','small')+line('M266 472H306',true)+txt(317,477,'현금 흐름','small');

// 02 Industry map: matrix and ownership span, not a generic node chain.
let industry='';
const stages=[['원료·부자재','원료 / 용기'],['개발·제조','제형 / 완제품'],['브랜드','기획 / 판매'],['유통·소비','채널 / 고객']];
stages.forEach((s,i)=>{let x=8+i*158;industry+=rect(x,32,150,56,i===2?'#303030':'#ddd','none')+txt(x+75,57,s[0],i===2?'title white':'title','middle')+txt(x+75,77,s[1],i===2?'small muted':'small','middle');if(i<3)industry+=line(`M${x+150} 60H${x+157}`);});
industry+=rect(324,101,150,252,'#eee','none');
const cols=[[['원료 공급사','성분 원료'],['용기·포장사','용기 / 단상자']],[['ODM 제조사','개발 + 생산'],['OEM 제조사','위탁 생산']],[['가상 브랜드','기획 / 발주'],['운영 기능','마케팅 / 판매']],[['판매 채널','자사몰 / 유통사'],['최종 소비자','제품 구매 / 사용']]];
cols.forEach((col,i)=>col.forEach((s,j)=>{let x=16+i*158,y=126+j*115;industry+=node(x,y,134,73,s[0],s[1],i===2&&j===0);}));
industry+=txt(399,338,'대상 기업의 위치','small','middle');
industry+=rect(8,378,624,61,'#e3e3e3','none')+txt(24,403,'산업 전반의 지원 기능','title')+txt(24,424,'시험·분석  /  물류·보관  /  패키지 디자인','small');
industry+=txt(8,470,'상단 화살표: 산업의 대표적인 가치 전달 방향','small');

// 03 Process: small technical line drawings show material transformation.
const vessel=(x,y)=>`<g transform="translate(${x},${y})" fill="none" stroke="#444" stroke-width="2"><path d="M5 15H67V67Q67 78 56 78H16Q5 78 5 67Z"/><path d="M0 15H72M36 0V58M21 54L51 62M21 62L51 54M16 78V89M56 78V89"/><path d="M7 44H65" stroke="#999"/><rect x="28" y="-4" width="16" height="14" fill="#ddd"/></g>`;
const tube=(x,y)=>`<g transform="translate(${x},${y})" fill="none" stroke="#444" stroke-width="2"><path d="M10 5H36L31 74H15Z" fill="#eee"/><path d="M10 17H36M15 74V81H31V74"/><path d="M58 5H84L79 74H63Z"/><path d="M58 17H84M63 74V81H79V74"/></g>`;
const bottles=(x,y)=>`<g transform="translate(${x},${y})" stroke="#444" stroke-width="2" fill="#eee"><path d="M8 22H31V78H8ZM53 22H76V78H53Z"/><path d="M13 8H26V22H13ZM58 8H71V22H58Z" fill="white"/><path d="M1 87H87M0 0H87V10M19 0V8M64 0V8" fill="none"/></g>`;
const check=(x,y)=>`<g transform="translate(${x},${y})" fill="none" stroke="#444" stroke-width="2"><rect x="10" y="8" width="65" height="79"/><path d="M27 4H58V16H27Z" fill="#ddd"/><path d="M24 37L30 43L40 31M47 37H63M24 62L30 68L40 56M47 62H63"/></g>`;
let process='';
const steps=[['01','원료 배합','원료를 정해진 비율로 혼합',vessel,'배합 탱크'],['02','내용물 확인','제형과 품질 기준을 확인',tube,'시료·시험'],['03','충전·포장','내용물을 용기에 담아 포장',bottles,'충전 설비'],['04','출하 검사','제품을 확인하고 출하 승인',check,'검사 기록']];
steps.forEach((s,i)=>{let x=i%2*326+8,y=Math.floor(i/2)*237+12;process+=rect(x,y,298,210,'#fff','#bbb')+rect(x,y,298,40,'#e8e8e8','none')+txt(x+16,y+26,`${s[0]}  ${s[1]}`,'title')+s[3](x+22,y+70)+txt(x+124,y+94,s[4],'title')+txt(x+124,y+119,i===0?'원료 → 혼합물':i===1?'혼합물 → 확인된 내용물':i===2?'내용물 → 포장 제품':'포장 제품 → 출하품','small')+txt(x+16,y+191,s[2],'small');});
process+=line('M306 116H334')+line('M483 222V237H157V249')+line('M306 353H334');

// 04 Swimlane flowchart: roles, decision, failure path and return loop.
let flow='';
['영업','물류','품질 담당'].forEach((s,i)=>{let x=8+i*210;flow+=rect(x,8,204,443,i===1?'#f4f4f4':'#fafafa','#ddd')+rect(x,8,204,39,'#ddd','none')+txt(x+102,34,s,'title','middle');});
flow+=node(36,72,146,50,'주문 접수');
flow+=node(246,72,146,50,'재고 확인');
flow+=`<path d="M319 154L390 209L319 264L248 209Z" fill="white" stroke="#777"/>`+txt(319,206,'출고 가능','title','middle')+txt(319,226,'재고입니까?','small','middle');
flow+=node(36,184,146,58,'고객과 일정 협의');
flow+=node(36,290,146,58,'입고 일정 확정');
flow+=node(456,184,146,58,'출하 품질 확인');
flow+=node(456,290,146,58,'승인 제품 출고');
flow+=node(456,375,146,50,'고객 인도', '',true);
flow+=line('M182 97H246')+line('M319 122V154')+line('M248 209H182')+label(195,196,'아니요');
flow+=line('M390 209H456')+label(413,196,'예');
flow+=line('M109 242V290')+line('M182 319H225V217Q239 209 225 201V136H299V122')+label(191,282,'입고 후');
flow+=line('M529 242V290')+label(541,271,'적합');
flow+=line('M529 348V375');
flow+=txt(24,482,'마름모: 조건 분기 / 사각형: 업무 / 세로 구획: 담당자 / 교차선은 비연결','small');

document.querySelector('#samples').innerHTML=[
page('business','01','BUSINESS MODEL','이 회사는 어떻게 매출을 만듭니까?','가상 화장품 브랜드의 위탁 생산·판매 구조입니다. 제품과 현금의 방향을 같은 관계도 안에서 확인합니다.','사업 주체와 거래 흐름',svg(492,business,'가상 브랜드의 위탁 제조와 판매 및 대금 흐름'),'회색 영역은 대상 기업의 수행 범위입니다. 자사몰은 판매 채널이며 별도의 법인이라는 의미가 아닙니다.',[['사업 형태','제품 기획과 판매는 직접 수행하고, 생산은 외부 제조사에 위탁합니다.'],['추가 확인','제조 계약, 매출 귀속, 유통사 반품 조건과 정산 기일을 확인해야 합니다.']],'채널별 현금 회수 조건은 계약에 따라 다르므로 실제 자료로 교체해야 합니다.'),
page('industry','02','INDUSTRY MAP','산업 안에서 어떤 역할을 합니까?','화장품 산업을 네 단계로 나누고, 가상 브랜드가 담당하는 영역과 외부에 의존하는 기능을 표시합니다.','산업의 단계와 대상 기업의 위치',svg(487,industry,'화장품 원료 제조 브랜드 유통 단계와 대상 기업 위치'),'같은 열은 같은 산업 단계입니다. 개별 박스 사이의 실제 계약 관계를 나타내지는 않습니다.',[['ODM / OEM','이 샘플에서는 ODM을 개발·생산 위탁, OEM을 생산 위탁으로 단순화했습니다. 실제 업무 범위는 계약을 확인합니다.'],['추가 확인','브랜드가 보유한 기능과 위탁 범위, 특정 제조사·채널에 대한 의존도를 확인해야 합니다.']],'개별 산업의 모든 참여자를 포괄하지 않는 구조 설명용 예시입니다.'),
page('process','03','PROCESS EXPLAINER','제품은 어떤 과정을 거쳐 완성됩니까?','단계별 작업명뿐 아니라 투입물의 변화와 설비의 역할을 함께 설명합니다. 화장품 생산을 단순화한 가상 공정입니다.','원료에서 출하 제품까지',svg(474,process,'배합 확인 충전 포장 출하 검사 네 단계와 설비 설명 그림'),'그림은 기능 이해를 위한 개념도입니다. 실제 설비의 구조·사양·공정 조건을 재현하지 않습니다.',[['핵심 용어','배합은 원료를 섞는 작업이며, 충전은 내용물을 판매 용기에 담는 작업입니다.'],['추가 확인','실제 생산 주체, 공정별 처리능력, 품질 검사 기록과 병목 설비를 확인해야 합니다.']],'시설 설명에는 실제 설비 사진·명칭·사양을 함께 확보한 뒤 이 도식과 연결합니다.'),
page('flow','04','SWIMLANE FLOWCHART','누가 판단하고, 다음 단계는 무엇입니까?','가상 제품의 주문·출고 흐름입니다. 담당 주체와 재고 조건에 따라 달라지는 경로를 함께 보여줍니다.','주문에서 고객 인도까지',svg(495,flow,'영업 물류 품질 담당의 출고 과정과 재고 부족 시 일정 협의 및 재확인'),'품질 검사 이후는 적합 경로만 표시했습니다. 부적합 제품의 격리·재작업·폐기 경로는 생략했습니다.',[['읽는 방법','위에서 아래로 진행하며, 재고가 부족하면 왼쪽 경로에서 일정 협의 후 재고를 다시 확인합니다.'],['추가 확인','실제 담당 부서, 재고의 판매 가능 여부, 출고 승인 기준을 확인해야 합니다.']],'중진공의 공식 심사 절차가 아닌 일반 업무의 가상 예시입니다.')
].join('');
document.querySelector('main').insertAdjacentHTML('afterend',`<aside class="sources">구성 참고: <a href="https://www.ricoh.com/about/integrated-report/2025/value_creation_2">Ricoh · 사업 활동</a><a href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/06/mapping-the-semiconductor-value-chain_5ba52971/4154cdbf-en.pdf">OECD · 산업 단계</a><a href="https://www.asml.com/en/en/technology/all-about-microchips/how-microchips-are-made">ASML · 공정 설명</a><a href="https://lucid.co/templates/flowchart-with-swimlanes">Lucid · Swimlane</a><p>참고 자료의 그림을 복제하지 않고, 설명 목적에 맞춰 새로 구성했습니다. 작성자 검토 후 디벨롭할 파일럿이며 기존 스킬의 확정 규칙은 변경하지 않았습니다.</p></aside>`);
