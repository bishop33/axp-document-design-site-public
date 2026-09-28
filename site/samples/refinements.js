/* Pilot refinement: relationship grammar, table hierarchy, verification patterns. */
function addRefinedSamples({page,spec,table,pages,charts}) {
  const old=pages.findIndex(p=>p.html.includes('11 / STRUCTURE'));
  if(old>=0)pages.splice(old,1);
  const svg=(id,height,label,body)=>`<div class="diagram-shell"><svg class="diagram" viewBox="0 0 620 ${height}" role="img" aria-label="${label}"><title>${label}</title><defs><marker id="${id}-a" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 Z" fill="#555"/></marker></defs>${body}</svg></div>`;
  const txt=(x,y,s,cls='d-label',anchor='middle')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" class="${cls}">${s}</text>`;
  const node=(x,y,w,h,title,sub='',tone='plain')=>`<g class="d-node ${tone}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/>${txt(x+w/2,y+(sub?24:h/2+5),title,'d-title')}${sub?txt(x+w/2,y+43,sub,'d-sub'):''}</g>`;
  const path=(d,id,arrow=true,dashed=false)=>`<path d="${d}" class="d-link" ${arrow?`marker-end="url(#${id}-a)"`:''} ${dashed?'stroke-dasharray="5 4"':''}/>`;
  const framed=(diagram,legend)=>`<div class="diagram-frame">${diagram}<div class="diagram-legend">${legend}</div></div>`;
  const hierarchy=svg('hier',256,'가상 기업 조직 구조: 예시생활 아래 상품·영업·운영 세 부문과 각 실무 기능',
    path('M310 62 V88 M106 88 H514 M106 88 V107 M310 88 V107 M514 88 V107','hier',false)+
    [106,310,514].map(x=>path(`M${x} 153 V179 M${x-47} 179 H${x+47} M${x-47} 179 V202 M${x+47} 179 V202`,'hier',false)).join('')+
    node(223,10,174,52,'예시생활','가상 조직 구성','dark')+
    [node(24,107,164,46,'상품 부문','','mid'),node(228,107,164,46,'영업 부문','','mid'),node(432,107,164,46,'운영 부문','','mid')].join('')+
    [[16,'상품 기획'],[110,'품질 관리'],[220,'온라인'],[314,'도매 영업'],[424,'재고 운영'],[518,'재무 관리']].map(([x,t])=>node(x,202,86,38,t)).join(''));
  const relation=svg('rel',290,'거래 관계도: 외주 생산사, 예시생활, 온라인몰, 도매 거래처, 물류사 사이 제품·대금·위탁 관계',
    path('M158 101 H242','rel')+txt(200,91,'제품 공급','d-sub')+
    path('M242 130 H158','rel',true,true)+txt(201,151,'생산 대금','d-sub')+
    path('M378 103 H418 V48 H469','rel')+txt(417,34,'판매','d-sub')+
    path('M469 77 H443 V129 H378','rel',true,true)+txt(400,121,'정산','d-sub')+
    path('M378 157 H419 V211 H469','rel')+txt(432,232,'납품','d-sub')+
    path('M469 184 H445 V144 H378','rel',true,true)+txt(508,170,'판매대금','d-sub')+
    path('M310 167 V221','rel')+txt(328,199,'물류 위탁','d-sub','start')+
    node(20,82,138,62,'외주 생산사','제조·품질 책임')+node(242,96,136,71,'예시생활','브랜드·재고 운영','dark')+
    node(469,29,132,64,'온라인몰','판매·정산','mid')+node(469,180,132,64,'도매 거래처','납품·정산','mid')+
    node(242,221,136,58,'물류사','보관·출고'));
  page('structure','11A / STRUCTURE · RELATION','소속과 거래는 다릅니다','소속과 거래에 맞게 선의 의미를 달리하고 연결 대상을 명시합니다.',
    spec('ST-01','계층형 조직도',framed(hierarchy,'진한 면: 최상위 주체　/　중간 면: 부문　/　흰 면: 실행 기능'),'연결선에는 방향 화살표를 쓰지 않습니다. 이 도식은 소속 관계이며 지분율을 뜻하지 않습니다.')+
    spec('ST-02','거래 관계도 · 실물과 대금의 분리',framed(relation,'실선 → 제품·서비스　　점선 ⇢ 대금·정산'),'한 선에 여러 의미를 섞지 않고, 출발점·도착점·관계명을 명시합니다.'),false,'refined diagrams');
  const swim=svg('swim',288,'담당 주체별 예시 플로우: 기업 자료 제출, 분석 담당자 대조, 심사역 확인 질문, 기업 보완 회신',
    `<rect x="0" y="34" width="620" height="80" fill="#f4f4f4"/><rect x="0" y="114" width="620" height="80" fill="#fff"/><rect x="0" y="194" width="620" height="82" fill="#f4f4f4"/>`+
    txt(182,20,'01 · 수집','d-sub')+txt(344,20,'02 · 대조','d-sub')+txt(516,20,'03 · 확인','d-sub')+
    txt(44,78,'기업','d-title')+txt(44,159,'분석 담당','d-title')+txt(44,241,'심사역','d-title')+
    path('M182 102 V155 H280','swim')+path('M408 155 H516 V211','swim')+path('M580 236 H606 V76 H580','swim')+
    txt(238,143,'제출 자료','d-sub')+txt(478,143,'분석·질문','d-sub')+
    node(122,48,120,54,'자료 제출','원장·계약서')+node(280,129,128,54,'자료 대조','불일치 항목 정리','mid')+
    node(452,211,128,54,'확인 질문','보완 범위 지정','dark')+node(452,48,128,54,'보완 회신','증빙·설명 제출'));
  const branch=svg('branch',250,'자료 일치 여부에 따라 상세 분석 또는 불일치 확인으로 나뉘는 조건 분기 예시',
    path('M310 54 V78','branch')+path('M222 123 H113 V181','branch')+path('M398 123 H507 V181','branch')+
    path('M39 210 H15 V31 H230','branch',true,true)+
    txt(159,112,'아니요','d-sub')+txt(455,112,'예','d-sub')+txt(78,18,'보완 후 재대조','d-sub')+
    node(230,10,160,44,'자료 간 대조','','mid')+
    `<polygon points="310,78 398,123 310,168 222,123" fill="#ededed" stroke="#888"/>`+txt(310,120,'주요 수치가','d-title')+txt(310,140,'일치합니까?','d-title')+
    node(39,181,148,60,'불일치 확인','원인·증빙 요청')+node(433,181,148,60,'상세 분석','재무·비재무 연결','dark'));
  page('structure','11B / FLOW · OWNERSHIP','흐름에는 주체와 조건이 있습니다','누가 무엇을 전달하고 어떤 조건에서 되돌아가는지 표현합니다.',
    spec('ST-03','스윔레인 · 담당 주체별 흐름',framed(swim,'가로: 업무 단계　/　세로: 담당 주체　/　화살표: 인계 방향'),'기업·분석 담당·심사역을 분리한 가상 검토 흐름입니다. 중진공 공식 프로세스는 아닙니다.')+
    spec('ST-04','조건 분기 · 보완 루프',framed(branch,'마름모: 확인 조건　/　실선: 진행　/　점선: 보완 후 재대조'),'예·아니요의 분기 라벨은 반드시 표시합니다. 조건은 임의의 승인 기준으로 사용하지 않습니다.'),false,'refined diagrams');
  const cycle=svg('cycle',268,'가상 자금 회수 시간축: 0일 매입, 20일 지급, 35일 판매, 80일 회수, 지급 후 회수까지 60일',
    path('M107 48 H590','cycle',false)+[0,20,35,80].map(d=>path(`M${107+d*6} 43 V244`,'cycle',false,true)+txt(107+d*6,30,d+'일','d-sub')).join('')+
    txt(14,86,'재고 보유','d-label','start')+txt(14,134,'매출채권','d-label','start')+txt(14,181,'매입채무','d-label','start')+
    `<rect x="107" y="63" width="210" height="34" fill="#d1d1d1"/><rect x="317" y="111" width="270" height="34" fill="#959595"/><rect x="107" y="158" width="120" height="34" fill="#ededed" stroke="#aaa"/>`+
    txt(212,85,'매입 → 판매 · 35일','d-label')+txt(452,133,'판매 → 회수 · 45일','d-white')+txt(167,180,'20일','d-label')+
    path('M227 214 V228 H587 V214','cycle',false)+txt(407,252,'대금 지급 후 회수까지 · 60일','d-title'));
  const architecture=svg('arch',253,'사업 구조의 계층: 판매 접점 온라인·도매, 내부 운영 상품·재고·정산, 외부 자원 생산사·물류사',
    txt(15,39,'판매 접점','d-title','start')+txt(15,119,'내부 운영','d-title','start')+txt(15,218,'외부 자원','d-title','start')+
    node(119,13,226,46,'온라인 판매','','mid')+node(365,13,226,46,'도매 납품','','mid')+
    path('M232 59 V78 H477 V59 M355 78 V96','arch',false)+
    `<rect x="106" y="96" width="499" height="72" fill="#f4f4f4"/>`+
    node(119,109,145,46,'상품·브랜드')+node(282,109,145,46,'재고·발주')+node(445,109,146,46,'매출·정산')+
    path('M354 168 V184 M232 184 H477 M232 184 V202 M477 184 V202','arch',false)+
    node(119,202,226,42,'외주 생산사')+node(365,202,226,42,'물류 서비스사'));
  page('structure','11C / STRUCTURE · TIME & LAYERS','시간축과 운영 계층','길이는 기간을, 면의 계층은 역할을 표현합니다. 도식에 사용한 시각적 속성과 의미를 일치시킵니다.',
    spec('ST-05','자금 회수 사이클 · 시간축',framed(cycle,'회수기간 45일 + 재고기간 35일 − 지급기간 20일 = 60일 [가상]'),'세 기간은 동일한 예시 거래를 기준으로 단순화했습니다. 실제 현금흐름이나 필요 한도를 산출한 값이 아닙니다.')+
    spec('ST-06','레이어형 사업 구조',framed(architecture,'위: 고객 접점　/　가운데: 기업 내부 기능　/　아래: 외부 자원'),'조직의 소속이나 처리 순서가 아니라, 사업을 구성하는 역할의 계층을 보여줍니다.'),false,'refined diagrams');
  page('table-detail','TABLES / HIERARCHY','면의 농도로 계층을 구분합니다','상위 분류는 진하게, 하위 분류는 중간 톤으로, 본문은 흰색으로 둡니다. 색상 없이도 구조를 읽을 수 있어야 합니다.',
    spec('TB-13','3단 헤더 · 연도 → 채널 → 지표',`<div class="tone-key"><span><i style="background:#393939"></i>상위 분류</span><span><i style="background:#c8c8c8"></i>중간 분류</span><span><i style="background:#eaeaea"></i>세부 항목</span></div><table class="tiered"><thead><tr><th rowspan="3">기간</th><th colspan="4">2025년 · 가상 데이터</th></tr><tr><th colspan="2">온라인</th><th colspan="2">도매</th></tr><tr><th>매출</th><th>비중</th><th>매출</th><th>비중</th></tr></thead><tbody><tr><th scope="row">상반기</th><td class="num">300</td><td class="num">60%</td><td class="num">200</td><td class="num">40%</td></tr><tr><th scope="row">하반기</th><td class="num">420</td><td class="num">60%</td><td class="num">280</td><td class="num">40%</td></tr><tr class="total"><th scope="row">연간 합계</th><td class="num">720</td><td class="num">60%</td><td class="num">480</td><td class="num">40%</td></tr></tbody></table>`,'금액 단위: 백만원. 같은 계층에는 같은 농도를 적용하며 특정 연도나 채널을 자의적으로 강조하지 않습니다.')+
    spec('TB-14','왼쪽 다중 구조 · 영역 → 항목',`<table class="tiered side-tier"><thead><tr><th>영역</th><th>항목</th><th>현재 정보</th><th>확인 자료</th></tr></thead><tbody><tr><th rowspan="3" class="parent" scope="rowgroup">재무</th><th scope="row">현금</th><td>장부 잔액만 제시</td><td>통장·제한성 예금</td></tr><tr><th scope="row">채권</th><td>거래처별 현황 미제시</td><td>채권 연령표</td></tr><tr><th scope="row">차입</th><td>월별 상환액 미제시</td><td>차입금 명세</td></tr><tr><th rowspan="2" class="parent" scope="rowgroup">비재무</th><th scope="row">생산</th><td>외주 생산</td><td>위탁 계약서</td></tr><tr><th scope="row">판매</th><td>온라인·도매 병행</td><td>채널 계약·정산표</td></tr></tbody></table>`,'상위 영역과 개별 항목을 다른 면으로 묶습니다. 셀 병합은 실제 계층이 있는 경우에만 사용합니다.'),false,'refined table-hierarchy');
  page('review','REVIEW / CHECKLIST','무엇을, 왜 더 확인해야 합니까?','누락 자료를 나열하지 않습니다. 현재 근거와 확인 이유를 연결해 심사역이 다음 행동을 결정하도록 돕습니다.',
    spec('QA-01','근거 연결형 체크리스트',`<table class="evidence-table"><colgroup><col style="width:27%"><col style="width:43%"><col style="width:30%"></colgroup><thead><tr><th>확인 질문</th><th>현재 근거 → 확인 이유</th><th>요청 자료 / 상태</th></tr></thead><tbody><tr><td><strong>매출이 실제로<br>회수되었습니까?</strong></td><td><strong>근거</strong> 월별 매출만 제시되었습니다.<br><strong>이유</strong> 매출 인식과 입금을 대조해야 합니다.</td><td>거래처별 채권·입금 명세<br><span class="state">미확보</span></td></tr><tr><td><strong>가용 현금에<br>제약이 있습니까?</strong></td><td><strong>근거</strong> 장부 잔액만 확인됩니다.<br><strong>이유</strong> 사용 제한 금액을 구분해야 합니다.</td><td>통장·예금 제한 내역<br><span class="state">미검증</span></td></tr><tr><td><strong>기존 원리금은<br>언제 상환합니까?</strong></td><td><strong>근거</strong> 차입금 총액만 제시되었습니다.<br><strong>이유</strong> 월별 지급 집중을 확인해야 합니다.</td><td>차입금·상환 일정표<br><span class="state">미확보</span></td></tr></tbody></table>`,'상태는 자료 확보·검증 여부이며, 양호하다는 평가와 구분합니다.')+
    spec('QA-02','핵심 질문 + 검증 항목',`<div class="review-block"><div class="question"><span>Q</span><strong>추가 자금은 어디에 사용되며, 무엇으로 갚습니까?</strong></div><dl class="answer-grid"><dt>현재 근거</dt><dd>예시 신청서에는 ‘운전자금’만 기재되어 있습니다.</dd><dt>확인 이유</dt><dd>지출 시점과 현금 회수 시점을 연결하기 어렵습니다.</dd><dt>요청 자료</dt><dd>자금 사용계획·월별 현금흐름·기존 원리금 일정</dd></dl><div class="check-row"><strong>금액·시점 대조</strong><strong>상환 재원 확인</strong><strong>증빙 검증</strong></div></div>`,'단일 핵심 질문 아래에 세부 검증을 묶습니다. 질문에 대한 답과 검증 완료는 별개입니다.'),false,'refined review-page');
  const qa=(what,known,why,how)=>`<table class="initial-review"><colgroup><col style="width:18%"><col style="width:82%"></colgroup><tbody><tr><th scope="row">확인할 내용</th><td><strong>${what}</strong></td></tr><tr><th scope="row">근거와 이유</th><td>${known}<br>${why}</td></tr><tr><th scope="row">필요 자료</th><td>${how}</td></tr></tbody></table>`;
  page('review','REVIEW / INITIAL ASSESSMENT','기업 파악을 위한 추가 확인사항','조사 자료에서 드러난 확인 과제를 간결하게 정리합니다. 아래 자료명과 수치는 모두 가상입니다.',
    spec('QA-03','01 · 단기 지급 재원',qa('향후 30일의 확정 입금액과 사용 가능한 현금을 확인합니다.','[D1·D2] 현금 300, 30일 지급 예정 400백만원으로 단순 차액은 100입니다.','예정 입금을 확인해야 매입대금·원리금 지급 가능 여부를 파악할 수 있습니다.','통장·예금 사용 제한·입금 예정표·지급 일정을 주별로 대조합니다.'),'단순 차액은 예정 유입과 예금 사용 제한을 반영하지 않아, 자금 부족을 뜻하지는 않습니다.')+
    spec('QA-04','02 · 도매대금 회수',qa('최근 3개월 납품 건의 실제 입금일과 기한을 넘긴 미수금을 확인합니다.','[D3] 약정 지급기한은 납품 후 45일이나 실제 입금 이력은 미확보입니다.','회수 지연은 재고 매입자금을 묶어 상환에 쓸 현금을 줄일 수 있습니다.','납품 명세·채권 연령표·통장 입금을 거래처별로 대조합니다.'),'45일은 계약 조건이며 실제 평균 회수기간이 아닙니다.'),false,'refined review-page evidence-actions');
  const sc=(id,title,type,note)=>{charts.push({id,type});return `<section class="chart-frame"><h4>${title}</h4><p class="unit">단위: 백만원 · 전 수치 가상</p><div class="chart" id="${id}" role="img" aria-label="${title} 가상 데이터"></div><p class="chart-note">${note}</p></section>`};
  page('summary','SUMMARY / VISUAL FIRST','기업을 한 장으로 읽습니다','예시생활 [가상] · 생활용품 브랜드·유통 · 2025.12.31 기준',
    spec('CP-06','차트 중심형 · 기본정보 + 네 가지 질문',`<div class="visual-identity"><div><strong>예시생활</strong><p>2023.01.01 설립 · 대표 김예시 [가상]<br>서울특별시 예시구 예시로 10 [가상]</p></div><div><strong>무엇을 하는 기업입니까?</strong><p>외주 생산 → 브랜드·재고 운영 → 온라인·도매 판매</p></div></div><div class="summary-charts">`+
    sc('sum-trend','01 · 사업 규모는 커지고 있습니까?','sumTrend','매출 1,000 → 1,200 / 영업이익 150 → 180')+
    sc('sum-channel','02 · 어디에서 매출이 발생합니까?','sumChannel','온라인 720 (60%) / 도매 480 (40%)')+
    sc('sum-cash','03 · 단기 지급과 현금은 어떻습니까?','sumCash','현금 300 / 30일 내 지급 400. 유입·제한성 미반영')+
    sc('sum-debt','04 · 상환 일정은 언제 집중됩니까?','sumDebt','2026년 1~4월 지급 예정 180 / 신규 대출 미반영')+
    `</div><div class="summary-followup"><strong>추가 확인 · 질문과 이유</strong><div><span>현금은 사용 가능합니까?</span><span>잔액만으로 제한성 예금을 알 수 없습니다.</span></div><div><span>신규 대출의 금액·조건은?</span><span>추가 원리금과 월별 유입을 함께 확인해야 합니다.</span></div></div><p class="small summary-limit">모든 수치는 별도로 구성한 가상 데이터입니다. 도식은 판단을 돕는 표현 예시이며 실제 대출 의견이 아닙니다. 실적·계획·미확인 정보를 혼용하지 않습니다.</p>`),false,'refined visual-summary');
  // Full-width identity, paired modules, full-width action matrix: one A4 page.
  const basic=pages.findIndex(p=>p.cat==='summary'&&p.html.includes('CP-01'));
  if(basic>=0)pages.splice(basic,1);
  page('summary','SUMMARY / MIXED GRID','기업분석 한 장 요약','예시생활 · 2025.12.31 기준 · 모든 기업정보·자료·수치는 가상입니다.',
    spec('CP-01','기업 현황',table(null,[['기업 / 대표','주식회사 예시생활 / 김예시'],['실제 사업','생활용품 브랜드 · 외주 생산 / 온라인·도매 판매'],['주소 / 설립','서울특별시 예시구 예시로 10 / 2023.01.01']],'left'))+
    `<div class="summary-pair">`+spec('CP-02','간략 재무정보',`<table class="summary-financial"><colgroup><col style="width:42%"><col style="width:29%"><col style="width:29%"></colgroup><thead><tr><th>백만원</th><th class="num">2024</th><th class="num">2025</th></tr></thead><tbody><tr><td>매출액</td><td class="num">1,000</td><td class="num">1,200</td></tr><tr><td>영업이익</td><td class="num">150</td><td class="num">180</td></tr><tr><td>영업이익률</td><td class="num">15.0%</td><td class="num">15.0%</td></tr></tbody></table><p class="module-note">전년 대비 매출 +20% · 이익률 동일</p>`)+
    spec('CP-07','단기 지급과 현금',sc('sum-mixed-cash','현금과 30일 내 지급 예정액','sumCash','단순 차액 100 · 예정 유입·예금 사용 제한 미반영'))+`</div>`+
    `<div class="summary-pair">`+spec('CP-03','사업·산업 이해',`<div class="summary-copy"><strong>외주 생산 → 재고 보유 → 온라인·도매</strong><p>직접 설비보다 발주·재고·정산 조건이 운전자금 수요와 연결됩니다.</p><p><b>MOQ</b>는 최소 발주 수량입니다. 판매 전 선지급이 필요하면 자금이 먼저 묶입니다.</p></div>`)+
    spec('CP-08','자료에서 파악한 사항',`<div class="summary-copy"><p><b>재무</b> [D1·D2] 현금 300, 30일 내 지급 400입니다. 입금 반영 전 차액입니다.</p><p><b>비재무</b> [D3] 도매 약정은 납품 후 45일입니다. 실제 회수 이력은 미확보입니다.</p></div>`)+`</div>`+
    spec('CP-04','우선 확인 · 무엇을, 왜, 어떻게',`<table class="summary-actions"><colgroup><col style="width:27%"><col style="width:35%"><col style="width:38%"></colgroup><thead><tr><th>무엇을 확인합니까?</th><th>왜 필요합니까?</th><th>어떤 자료로 확인합니까?</th></tr></thead><tbody><tr><td><strong>30일 내 지급 재원</strong><br><span class="small">D1·D2 근거</span></td><td>단순 차액 100의 재원이 확인되지 않았습니다.</td><td>통장·입금 예정·지급표를 주별로 대조합니다.</td></tr><tr><td><strong>45일 내 실제 회수</strong><br><span class="small">D3 근거</span></td><td>회수가 지연되면 상환에 쓸 현금이 줄어듭니다.</td><td>최근 3개월 납품·입금·미수금을 대조합니다.</td></tr><tr><td><strong>신규 대출 금액·용도</strong><br><span class="small">신청 조건 미확보</span></td><td>추가 원리금을 감당할지 아직 계산할 수 없습니다.</td><td>사용계획·대출 조건·기존 상환표를 받습니다.</td></tr></tbody></table>`)+
    `<p class="summary-source">가상 근거: D1 현금 잔액 / D2 30일 지급표 / D3 도매 계약. 실제 조사·대출 의견이 아닌 표현 예시입니다.</p>`,false,'summary mixed-summary');
  // 새 도식은 그룹핑 뒤, 체크리스트와 요약은 문서 마지막에 배치합니다.
  const rank=p=>p.cat==='text'?0:p.cat==='table'?1:p.cat==='table-detail'?2:p.cat==='chart'?3:p.cat==='layout'?4:p.cat==='structure'?5:p.cat==='review'?6:7;
  pages.sort((a,b)=>rank(a)-rank(b)||(a.cat==='summary'?Number(b.html.includes('mixed-summary'))-Number(a.html.includes('mixed-summary')):0));
}

function refineTables(root){
  root.querySelectorAll('table').forEach(t=>{
    if(t.tHead&&t.tHead.rows.length>1)t.classList.add('tiered');
    if(t.classList.contains('matrix')){[...t.tBodies[0].rows].forEach(r=>{const c=r.cells[0];c.classList.add('row-key')})}
  });
}

function summaryChartOption(type){
  const b={animation:false,color:['#292929','#aaa'],textStyle:{fontFamily:'Pretendard',fontSize:11,color:'#333'},tooltip:{trigger:'axis',confine:true},grid:{left:46,right:27,top:22,bottom:38},xAxis:{type:'category',axisTick:{show:false},axisLine:{lineStyle:{color:'#aaa'}}},yAxis:{type:'value',splitNumber:3,axisLabel:{fontSize:10},splitLine:{lineStyle:{color:'#e5e5e5'}}},series:[]};
  if(type==='sumTrend'){b.xAxis.data=['2024','2025'];b.legend={bottom:0,textStyle:{fontSize:10},itemWidth:10,itemHeight:8};b.grid.bottom=50;b.series=[{type:'bar',name:'매출',data:[1000,1200],barMaxWidth:30,label:{show:true,position:'top'}},{type:'bar',name:'영업이익',data:[150,180],barMaxWidth:30,label:{show:true,position:'top'}}]}
  if(type==='sumChannel'){b.grid.left=45;b.grid.right=35;b.xAxis={type:'value',max:800,interval:400};b.yAxis={type:'category',inverse:true,data:['온라인','도매'],axisTick:{show:false},axisLine:{show:false}};b.series=[{type:'bar',data:[720,480],barWidth:23,label:{show:true,position:'right'}}]}
  if(type==='sumCash'){b.grid.left=61;b.grid.right=28;b.xAxis={type:'value',max:500,interval:250};b.yAxis={type:'category',inverse:true,data:['현금','30일 지급'],axisTick:{show:false},axisLine:{show:false},axisLabel:{fontSize:10}};b.series=[{type:'bar',data:[{value:300,itemStyle:{color:'#292929'}},{value:400,itemStyle:{color:'#aaa'}}],barWidth:23,label:{show:true,position:'right'}}]}
  if(type==='sumDebt'){b.xAxis.data=['1월','2월','3월','4월'];b.yAxis.max=80;b.series=[{type:'bar',data:[30,50,40,60],barMaxWidth:27,label:{show:true,position:'top'}}]}
  return b;
}
