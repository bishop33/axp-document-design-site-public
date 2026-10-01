(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33103,e=>{"use strict";var t=e.i(43476),r=e.i(71645),s=e.i(43237);let a="docs-chart-appearance",n=(0,r.createContext)({appearance:"ink",setAppearance:()=>{}}),o=()=>(0,r.useContext)(n);e.s(["AppearanceProvider",0,function({children:e}){let[s,o]=(0,r.useState)("ink");return(0,r.useEffect)(()=>{try{"accent"===localStorage.getItem(a)&&o("accent")}catch{}},[]),(0,t.jsx)(n.Provider,{value:{appearance:s,setAppearance:e=>{o(e);try{localStorage.setItem(a,e)}catch{}}},children:e})},"AppearanceSwitch",0,function(){let{appearance:e,setAppearance:r}=o();return(0,t.jsxs)("div",{className:"flex items-baseline gap-3 text-[13px]",children:[(0,t.jsx)("span",{className:"text-muted",children:"표현 비교"}),(0,t.jsxs)(s.ToggleGroup,{"aria-label":"차트 강조 방식",value:e,onValueChange:e=>r(e),className:"gap-x-3",children:[(0,t.jsx)(s.ToggleGroupItem,{value:"ink",children:"흑백"}),(0,t.jsx)(s.ToggleGroupItem,{value:"accent",children:"강조색"})]})]})},"useAppearance",0,o])},64078,e=>{"use strict";var t=e.i(43476),r=e.i(71645),s=e.i(60833),a=e.i(33103),n=e.i(47163);e.s(["ChartView",0,function({item:o,compact:i=!1,className:l}){let c=(0,r.useRef)(null),{appearance:d}=(0,a.useAppearance)();return(0,r.useEffect)(()=>{let t,r,a=!1;return e.A(31542).then(e=>{if(a||!c.current)return;let n=c.current;t=e.init(n,null,{renderer:"svg"});let l=()=>t?.setOption((0,s.chartOption)(o,i,n.clientWidth,d),!0);l(),(r=new ResizeObserver(()=>{t?.resize(),l()})).observe(n),document.fonts.ready.then(()=>{a||(t?.resize(),l())})}),()=>{a=!0,r?.disconnect(),t?.dispose()}},[o,i,d]),(0,t.jsx)("div",{ref:c,className:(0,n.cn)("[font-variant-numeric:normal]",i?"h-[210px]":"h-[360px] max-nav:h-[300px]",l),...i?{"aria-hidden":!0}:{role:"img","aria-label":`${o.unit||o.name}. ${o.takeaway}`}})}])},28661,e=>{"use strict";var t=e.i(43476),r=e.i(71645),s=e.i(22016);let a=(e,t)=>`"\`**${e}**${t?`
${t}`:""}\`"`,n={all:"전체",structure:"관계와 구조",industry:"시장 속 위치",flow:"흐름과 절차",time:"시간과 논리"},o=[{id:"business-model",name:"사업 구조도",group:"structure",question:"이 회사는 누구에게서 사서, 누구에게 팔고, 돈은 어떻게 들어오나요?",docs:["기업현황","투자검토 IM"],use:"기업을 처음 소개하는 쪽에서 거래 상대와 제품·현금의 방향을 한 장으로 보여줄 때.",avoid:"거래 상대가 여덟 이상이면 상위 분류로 묶고 세부는 표로 뺍니다.",rules:["대상 기업 하나만 짙은 면으로 둡니다.","제품·판매는 실선, 현금은 점선으로 방향을 나눕니다.","선 이름표는 두세 글자 동사(납품, 결제, 정산)로 씁니다."],legend:["제품·판매","현금"],wide:`flowchart LR
  maker[${a("위탁 제조사","제품 생산 · 납품")}]
  subgraph company["기업의 직접 수행 범위"]
    direction TB
    brand[${a("가상 화장품 브랜드","기획 · 발주 · 판매")}]:::focus
    revenue[${a("매출원: 제품 판매대금","생산은 외부에 위탁합니다.")}]:::note
  end
  own[${a("자사몰","소비자 직접 판매")}]
  dist[${a("유통사","매입 후 재판매")}]
  maker -->|납품| brand
  maker <-.-|대금| brand
  brand -->|판매| own
  brand <-.-|결제| own
  brand -->|납품| dist
  brand <-.-|정산| dist`,narrow:`flowchart TB
  maker[${a("위탁 제조사","제품 생산 · 납품")}]
  subgraph company[" "]
    direction TB
    brand[${a("가상 화장품 브랜드","기획 · 발주 · 판매")}]:::focus
    revenue[${a("매출원: 제품 판매대금","생산은 외부에 위탁합니다.")}]:::note
  end
  own[${a("자사몰","소비자 직접 판매")}]
  dist[${a("유통사","매입 후 재판매")}]
  maker -->|납품| brand
  maker <-.-|대금| brand
  brand -->|판매| own
  brand <-.-|결제| own
  brand -->|납품| dist
  brand <-.-|정산| dist`},{id:"revenue-tree",name:"매출 구성 트리",group:"structure",question:"매출은 어떤 사업과 제품에서 나오나요?",docs:["기업현황","투자검토 IM","산업분석"],use:"매출을 사업부 → 제품군 순서로 나눠 규모와 비중을 함께 보여줄 때. 구성비 차트보다 계층이 잘 보입니다.",avoid:"계층이 셋을 넘거나 항목이 많으면 트리맵이나 표로 바꿉니다.",rules:["상자마다 금액과 비중을 둘째 줄에 같은 형식으로 적습니다.","같은 층의 합계가 위 상자의 값과 맞는지 확인합니다.","가장 큰 가지만 짙게 하지 말고, 설명하려는 가지에만 강조를 둡니다."],wide:`flowchart TB
  total[${a("매출 128억원","2025년 · 연결 기준")}]:::focus
  sub[${a("구독","74억원 · 58%")}]
  lic[${a("라이선스","35억원 · 27%")}]
  svc[${a("용역","19억원 · 15%")}]
  s1[${a("기업용","52억원")}]:::soft
  s2[${a("개인용","22억원")}]:::soft
  l1[${a("온프레미스","28억원")}]:::soft
  l2[${a("OEM","7억원")}]:::soft
  total --> sub & lic & svc
  sub --> s1 & s2
  lic --> l1 & l2`,narrow:`flowchart LR
  total[${a("매출 128억원","2025년")}]:::focus
  sub[${a("구독","74억원 · 58%")}]
  lic[${a("라이선스","35억원 · 27%")}]
  svc[${a("용역","19억원 · 15%")}]
  s1[${a("기업용","52억원")}]:::soft
  s2[${a("개인용","22억원")}]:::soft
  l1[${a("온프레미스","28억원")}]:::soft
  l2[${a("OEM","7억원")}]:::soft
  total --> sub & lic & svc
  sub --> s1 & s2
  lic --> l1 & l2`},{id:"org-chart",name:"조직도",group:"structure",question:"조직은 어떻게 나뉘고 각 조직에 몇 명이 있나요?",docs:["기업현황","투자검토 IM","기술제안서"],use:"보고 체계와 조직 규모를 보여줄 때. 기술제안서에서는 수행 조직과 책임자를 보여줄 때 씁니다.",avoid:"사람 이름을 모두 넣지 않습니다. 둘째 층까지만 그리고 셋째 층은 인원만 적습니다.",rules:["같은 층의 상자는 같은 높이에 둡니다.","둘째 줄에는 인원 또는 책임자 한 가지만 적습니다.","설명하려는 조직(예: 연구개발)에만 강조를 둡니다."],wide:`flowchart TB
  ceo[${a("대표이사","경영 총괄")}]
  board[${a("이사회","사외이사 2명")}]:::note
  ops[${a("경영지원","12명")}]
  biz[${a("사업본부","38명")}]
  rnd[${a("연구개발본부","54명 · CTO")}]:::focus
  b1[${a("국내 영업","22명")}]:::soft
  b2[${a("해외 사업","16명")}]:::soft
  r1[${a("플랫폼","31명")}]:::soft
  r2[${a("데이터·AI","23명")}]:::soft
  board -.- ceo
  ceo --> ops & biz & rnd
  biz --> b1 & b2
  rnd --> r1 & r2`,narrow:`flowchart LR
  ceo[${a("대표이사","경영 총괄")}]
  ops[${a("경영지원","12명")}]
  biz[${a("사업본부","38명")}]
  rnd[${a("연구개발본부","54명 · CTO")}]:::focus
  b1[${a("국내 영업","22명")}]:::soft
  b2[${a("해외 사업","16명")}]:::soft
  r1[${a("플랫폼","31명")}]:::soft
  r2[${a("데이터·AI","23명")}]:::soft
  ceo --> ops & biz & rnd
  biz --> b1 & b2
  rnd --> r1 & r2`},{id:"ownership",name:"지배구조·지분도",group:"structure",question:"누가 이 회사를 소유하고, 이 회사는 어떤 회사를 소유하나요?",docs:["기업현황","투자검토 IM"],use:"주주 구성과 자회사 관계를 지분율과 함께 보여줄 때. 위는 주주, 아래는 자회사로 방향을 고정합니다.",avoid:"주주가 많으면 5% 이상만 그리고 나머지는 ‘기타 주주’로 묶습니다.",rules:["선 이름표에 지분율만 적습니다.","지분율 기준일을 도식 아래 주석에 적습니다.","합계가 100%인지 확인합니다."],wide:`flowchart TB
  f[${a("창업자","개인")}]
  v1[${a("A 벤처캐피탈","재무적 투자자")}]
  v2[${a("B 전략투자사","사업 제휴")}]
  etc[${a("기타 주주","임직원 포함")}]:::soft
  co[${a("가상 소프트웨어","대상 기업")}]:::focus
  s1[${a("해외 법인","싱가포르")}]
  s2[${a("데이터 자회사","국내")}]
  f -->|42%| co
  v1 -->|24%| co
  v2 -->|15%| co
  etc -->|19%| co
  co -->|100%| s1
  co -->|67%| s2`,narrow:`flowchart TB
  f[${a("창업자","42%")}]
  v1[${a("A 벤처캐피탈","24%")}]
  v2[${a("B 전략투자사","15%")}]
  etc[${a("기타 주주","19%")}]:::soft
  co[${a("가상 소프트웨어","대상 기업")}]:::focus
  s1[${a("해외 법인","100%")}]
  s2[${a("데이터 자회사","67%")}]
  f & v1 & v2 & etc --> co
  co --> s1 & s2`},{id:"deal-structure",name:"투자 구조도",group:"structure",question:"투자금은 어떤 경로로 들어가고, 거래 후 지분은 어떻게 바뀌나요?",docs:["투자검토 IM"],use:"투자 방식(신주·구주), 투자 기구, 거래 후 지분을 한 장으로 보여줄 때.",avoid:"조건이 많은 계약 내용(우선주 조건, 옵션)은 도식에 넣지 않고 표로 둡니다.",rules:["자금 흐름은 점선, 지분 취득은 실선으로 나눕니다.","금액과 지분율은 선 이름표가 아니라 상자 둘째 줄에 둡니다.","거래 전·후 지분 비교는 도식 옆 표로 둡니다."],legend:["지분","자금"],wide:`flowchart LR
  lp[${a("출자자","연기금 · 금융기관")}]
  fund[${a("투자조합","약정 500억원")}]
  co[${a("대상 기업","거래 후 기업가치 1,200억원")}]:::focus
  old[${a("기존 주주","일부 구주 매각")}]
  lp -.->|출자| fund
  fund -.->|신주 100억원| co
  fund -.->|구주 40억원| old
  old -->|지분 3.3%| fund
  co -->|신규 지분 8.3%| fund`},{id:"value-chain",span:!0,name:"산업 지도(가치사슬)",group:"industry",question:"이 산업은 어떤 단계로 이루어지고, 대상 기업은 어디에 있나요?",docs:["기업현황","산업분석","투자검토 IM"],use:"원료부터 소비자까지 단계를 왼쪽에서 오른쪽으로 놓고 대상 기업의 위치를 짚을 때.",avoid:"단계가 여섯을 넘으면 앞뒤 단계를 묶습니다. 기업 이름을 단계마다 많이 넣지 않습니다.",rules:["단계 번호와 이름을 묶음 제목으로 둡니다.","대상 기업이 있는 단계만 짙은 면으로 둡니다.","단계를 돕는 지원 서비스는 도식 아래 한 줄 띠로 뺍니다."],band:["지원 서비스","시험·분석","패키지 디자인","물류·보관"],wide:`flowchart LR
  subgraph s1["01 공급"]
    raw[${a("원료 공급사","성분 원료")}]
    pack[${a("용기·포장사","용기 · 단상자")}]
  end
  subgraph s2["02 제조"]
    make[${a("ODM 개발 + 생산","또는\nOEM 위탁 생산")}]:::soft
  end
  subgraph s3["03 브랜드 \xb7 대상 기업"]
    brand[${a("가상 브랜드","기획 · 판매")}]:::focus
  end
  subgraph s4["04 판매 채널"]
    own[${a("자사몰","직접 판매")}]
    dist[${a("유통사","매입 후 판매")}]
  end
  subgraph s5["05 소비"]
    user[${a("소비자","구매 · 사용")}]
  end
  raw -->|투입| make
  pack --> make
  make -->|제품| brand
  brand -->|판매| own
  brand --> dist
  own -->|전달| user
  dist --> user`},{id:"ecosystem",name:"플랫폼 생태계",group:"industry",question:"플랫폼을 중심으로 누가 무엇을 주고받나요?",docs:["기업현황","산업분석","투자검토 IM"],use:"양면 시장(공급자·수요자)과 수수료 구조를 보여줄 때. 플랫폼을 가운데 두고 양쪽에 참여자를 놓습니다.",avoid:"참여자가 많아 선이 교차하면 공급 쪽과 수요 쪽을 나눠 두 장으로 그립니다.",rules:["가운데 플랫폼만 짙게 둡니다.","서비스 흐름은 실선, 수수료·대금은 점선으로 방향을 표시합니다.","참여자 규모(가맹점 수, 이용자 수)를 둘째 줄에 적습니다."],legend:["서비스","대금·수수료"],wide:`flowchart LR
  subgraph supply["공급 쪽"]
    direction TB
    shop[${a("가맹점","4,200곳")}]
    rider[${a("배송 파트너","1,100명")}]
  end
  hub[${a("가상 주문 플랫폼","중개 · 결제 · 정산")}]:::focus
  subgraph demand["수요 쪽"]
    direction TB
    user[${a("이용자","월 42만 명")}]
    corp[${a("기업 고객","식대 복지")}]
  end
  ad[${a("광고주","노출 구매")}]:::soft
  shop -->|메뉴 등록| hub
  rider -->|배송| hub
  hub -->|주문 전달| user
  hub -->|정산 보고| corp
  shop <-.-|수수료 8%| hub
  hub <-.-|결제| user
  ad -.->|광고비| hub`},{id:"market-sizing",name:"시장 범위(TAM·SAM·SOM)",group:"industry",question:"전체 시장 가운데 대상 기업이 실제로 공략하는 시장은 얼마인가요?",docs:["산업분석","투자검토 IM","기업현황"],use:"전체 시장에서 접근 가능한 시장, 확보 목표 시장으로 범위를 좁혀 가는 논리를 보여줄 때.",avoid:"각 층의 산정 근거(출처, 가정)를 밝힐 수 없으면 숫자를 넣지 않습니다.",rules:["바깥에서 안쪽으로 좁아지는 순서를 지킵니다.","각 층에 금액과 정의를 한 줄씩 적습니다.","산정 방식(하향식·상향식)과 출처를 도식 아래에 적습니다."],wide:`flowchart TB
  subgraph tam["TAM \xb7 국내 기업용 데이터 분석 시장 2.6조원"]
    subgraph sam["SAM \xb7 금융\xb7제조 업종의 클라우드 분석 1.1조원"]
      som[${a("SOM · 3년 내 확보 목표 900억원","점유율 8% 가정")}]:::focus
    end
  end
  style tam fill:#f4f4f4,stroke:#f4f4f4
  style sam fill:#e4e4e4,stroke:#e4e4e4`,narrow:`flowchart TB
  subgraph tam["TAM 2.6조원 \xb7 국내 전체"]
    subgraph sam["SAM 1.1조원 \xb7 금융\xb7제조"]
      som[${a("SOM 900억원","3년 목표 · 8%")}]:::focus
    end
  end
  style tam fill:#f4f4f4,stroke:#f4f4f4
  style sam fill:#e4e4e4,stroke:#e4e4e4`},{id:"positioning",name:"포지셔닝 맵(2×2)",group:"industry",question:"경쟁사와 비교해 대상 기업은 어떤 위치에 있나요?",docs:["산업분석","기업현황","발표"],use:"두 가지 기준으로 경쟁사를 배치해 차별점을 보여줄 때. 두 축은 서로 관계가 적은 기준을 고릅니다.",avoid:"축 기준을 수치로 정의할 수 없으면 주관적 배치임을 밝히거나 표로 비교합니다.",rules:["축 양 끝에 기준의 낮음·높음을 적습니다.","사분면 이름은 짧은 명사로 둡니다.","대상 기업 점만 크고 짙게 둡니다.","점 위치의 근거(점수, 설문)를 주석에 적습니다."],wide:`quadrantChart
  x-axis 낮은 가격 --> 높은 가격
  y-axis 좁은 기능 --> 넓은 기능
  quadrant-1 프리미엄
  quadrant-2 가성비 확장
  quadrant-3 저가 단순
  quadrant-4 브랜드 중심
  자사: [0.38, 0.78] radius: 8, color: #303030
  A사: [0.82, 0.7]
  B사: [0.22, 0.28]
  C사: [0.66, 0.34]
  D사: [0.52, 0.55]`,narrow:""},{id:"process",name:"공정·업무 단계",group:"flow",question:"제품이나 업무는 어떤 순서로 만들어지나요?",docs:["기업현황","기술제안서","산업분석"],use:"분기 없이 차례로 이어지는 단계를 설명할 때. 단계마다 설비·산출물과 설명을 같은 형식으로 둡니다.",avoid:"조건에 따라 갈라지면 의사결정 흐름을 씁니다. 단계가 여섯을 넘으면 묶습니다.",rules:["단계 번호를 이름 앞에 붙입니다.","상자 안 줄 수와 순서(설비 → 설명)를 모든 단계에서 같게 둡니다.","화살표에는 이름표를 붙이지 않습니다."],wide:`flowchart LR
  p1[${a("01 원료 배합","배합 탱크\n원료를 혼합해\n내용물을 만듭니다.")}]
  p2[${a("02 내용물 확인","시료·시험\n내용물의 품질을\n확인합니다.")}]
  p3[${a("03 충전·포장","충전 설비\n용기에 담고\n포장합니다.")}]
  p4[${a("04 출하 검사","검사 기록\n검사를 마친 제품의\n출하를 승인합니다.")}]
  p1 --> p2 --> p3 --> p4`},{id:"decision-flow",name:"의사결정 흐름",group:"flow",question:"조건에 따라 업무가 어떻게 갈라지고 누가 처리하나요?",docs:["기술제안서","기업현황"],use:"예·아니요 판단에 따라 경로가 갈라지는 업무를 설명할 때. 담당자는 각 단계 둘째 줄에 적습니다.",avoid:"판단이 셋 이상 이어지면 표(조건 × 처리)로 바꿉니다.",rules:["판단은 마름모, 처리는 사각형으로 모양을 나눕니다.","판단에서 나가는 선에 예·아니요를 적습니다.","되돌아가는 선은 점선으로 둡니다."],legend:["업무 흐름","되돌림"],wide:`flowchart TB
  order[${a("주문 접수","영업")}]
  stock[${a("재고 확인","물류")}]
  decide{${a("출고 가능","재고입니까?")}}
  negotiate[${a("고객과 일정 협의","영업")}]
  confirm[${a("입고 일정 확정","영업")}]
  check[${a("출하 품질 확인","품질 담당")}]
  ship[${a("승인 제품 출고","품질 담당")}]
  deliver[${a("고객 인도","품질 담당")}]:::focus
  order --> stock --> decide
  decide -->|아니요| negotiate --> confirm
  stock <-.-|입고 후| confirm
  decide -->|예| check -->|적합| ship --> deliver`,narrow:""},{id:"system-architecture",span:!0,name:"시스템 구성도",group:"flow",question:"제안하는 시스템은 어떤 층으로 이루어지고 무엇과 연결되나요?",docs:["기술제안서"],use:"사용자 → 서비스 → 데이터 → 외부 연계 순서로 층을 나눠 구성 요소를 보여줄 때.",avoid:"서버·네트워크 세부(포트, 사양)는 도식에 넣지 않고 별도 표로 둡니다.",rules:["층은 묶음으로, 층 순서는 왼쪽(사용자)에서 오른쪽(외부)으로 둡니다.","이번 제안의 신규 구축 범위만 짙게 둡니다.","기존 시스템은 옅은 면으로 구분합니다."],wide:`flowchart LR
  subgraph u["사용자"]
    direction TB
    web[${a("업무 화면","웹 · 사내망")}]
    mob[${a("모바일","현장 점검")}]
  end
  subgraph s["서비스 \xb7 신규 구축"]
    direction TB
    api[${a("통합 API","인증 · 권한")}]:::focus
    ana[${a("분석 엔진","배치 · 실시간")}]:::focus
  end
  subgraph d["데이터"]
    direction TB
    dw[${a("데이터 저장소","정형 · 비정형")}]
  end
  subgraph e["기존 시스템 \xb7 외부"]
    direction TB
    erp[${a("ERP","기존")}]:::soft
    ext[${a("공공 데이터","외부 API")}]:::soft
  end
  web & mob --> api --> ana --> dw
  dw <-.-|수집| erp
  dw <-.-|수집| ext`},{id:"as-is-to-be",name:"현행·개선 비교(AS-IS/TO-BE)",group:"flow",question:"지금 방식과 바뀐 방식은 무엇이 다른가요?",docs:["기술제안서","발표"],use:"업무나 시스템이 바뀌는 전후를 같은 단계 순서로 나란히 보여줄 때.",avoid:"바뀌지 않는 단계까지 모두 그리지 않습니다. 달라지는 단계만 남깁니다.",rules:["왼쪽은 현행, 오른쪽은 개선으로 순서를 고정합니다.","같은 단계는 같은 높이에 둡니다.","개선되는 단계만 짙게 두고 효과(시간, 비용)를 둘째 줄에 적습니다."],wide:`flowchart LR
  subgraph asis["현행"]
    direction TB
    a1[${a("엑셀로 자료 취합","부서별 이메일")}]
    a2[${a("수작업 검증","평균 3일")}]
    a3[${a("보고서 작성","담당자 2명")}]
    a1 --> a2 --> a3
  end
  subgraph tobe["개선"]
    direction TB
    t1[${a("자동 수집","시스템 연계")}]:::soft
    t2[${a("규칙 기반 검증","당일 처리")}]:::focus
    t3[${a("보고서 자동 생성","검토 1명")}]:::focus
    t1 --> t2 --> t3
  end
  asis ~~~ tobe`,narrow:`flowchart TB
  subgraph asis["현행"]
    direction LR
    a1[${a("자료 취합","이메일")}]
    a2[${a("수작업 검증","3일")}]
    a1 --> a2
  end
  subgraph tobe["개선"]
    direction LR
    t1[${a("자동 수집","연계")}]:::soft
    t2[${a("규칙 검증","당일")}]:::focus
    t1 --> t2
  end
  asis ~~~ tobe`},{id:"history",span:!0,name:"연혁",group:"time",question:"회사는 언제 어떤 일을 거쳐 지금에 이르렀나요?",docs:["기업현황","투자검토 IM","발표"],use:"설립부터 현재까지 주요 사건을 시간 순서로 보여줄 때. 사건은 연도마다 두 개 이하로 줄입니다.",avoid:"사건이 열 개를 넘으면 표(연도 · 내용)로 바꿉니다. 간격이 불규칙해도 같은 폭으로 그린다는 점을 기억합니다.",rules:["연도는 굵게, 사건은 둘째 줄에 적습니다.","현재 또는 설명하려는 시점만 짙게 둡니다.","투자·매출 같은 수치 사건은 금액을 함께 적습니다."],wide:`flowchart LR
  y1[${a("2016","법인 설립")}]
  y2[${a("2018","시리즈 A 60억원\n첫 기업 고객")}]
  y3[${a("2021","해외 법인 설립")}]
  y4[${a("2024","매출 100억원 돌파")}]
  y5[${a("2025","상장 예비심사 청구")}]:::focus
  y1 --> y2 --> y3 --> y4 --> y5`},{id:"roadmap",span:!0,name:"추진 일정(간트)",group:"time",question:"사업은 어떤 단계로, 언제부터 언제까지 진행하나요?",docs:["기술제안서","투자검토 IM"],use:"단계별 작업의 기간과 겹침을 보여줄 때. 기술제안서의 수행 일정에 씁니다.",avoid:"작업이 열다섯을 넘으면 단계 단위로 묶고 세부 일정은 부록 표로 둡니다.",rules:["단계(묶음)와 작업의 두 층만 둡니다.","핵심 작업 또는 검수 시점만 짙게 둡니다.","기간 단위(월·주)를 축에 적습니다."],wide:`gantt
  dateFormat YYYY-MM
  axisFormat %y.%m
  section 1단계 진단
  현황 분석 :a1, 2026-01, 2M
  section 2단계 구축
  데이터 연계 :a2, after a1, 3M
  화면 개발 :a3, after a1, 4M
  section 3단계 안정화
  시범 운영 :active, a4, after a3, 2M`,narrow:""},{id:"issue-tree",name:"이슈 트리",group:"time",question:"결과(문제)는 어떤 원인으로 나눠 설명할 수 있나요?",docs:["투자검토 IM","산업분석","기업현황"],use:"하나의 결과를 겹치지 않는 원인으로 나누고(MECE), 확인된 원인을 짚을 때.",avoid:"가지가 넷을 넘거나 층이 셋을 넘으면 표로 바꿉니다.",rules:["왼쪽에 결과, 오른쪽으로 갈수록 세부 원인을 둡니다.","같은 층의 가지는 서로 겹치지 않게 나눕니다.","데이터로 확인된 원인만 짙게 두고 수치를 적습니다."],wide:`flowchart LR
  root[${a("영업이익 14억원 감소","2025년 · 전년 대비")}]
  r1[${a("매출 감소","−6억원")}]
  r2[${a("비용 증가","−8억원")}]
  q[${a("판매량","−4%")}]:::soft
  p[${a("단가","변동 없음")}]:::soft
  c1[${a("원재료비","+7억원 · 환율")}]:::focus
  c2[${a("판관비","+1억원")}]:::soft
  root --> r1 & r2
  r1 --> q & p
  r2 --> c1 & c2`,narrow:`flowchart TB
  root[${a("영업이익 14억원 감소","전년 대비")}]
  r1[${a("매출 감소","−6억원")}]
  r2[${a("비용 증가","−8억원")}]
  c1[${a("원재료비","+7억원")}]:::focus
  c2[${a("판관비","+1억원")}]:::soft
  root --> r1 & r2
  r2 --> c1 & c2`}],i=[{id:"business-model-software",name:"누리데이터 사업 구조",wide:`flowchart TB
  src[${a("데이터 원천","ERP · 계정계 · 공공 데이터")}]:::soft
  subgraph nuri["누리데이터"]
    direction LR
    plat[${a("데이터 통합 플랫폼","연결 · 정제 · 분석 · 보고")}]:::focus
    rnd[${a("연구개발 54명","제품 · 커넥터 180종")}]:::note
  end
  big[${a("대형 고객 41곳","직접 계약 · 직접 구축")}]
  partner[${a("파트너 12곳","판매 · 구축 대행")}]
  mid[${a("중견 고객 271곳","파트너 경로")}]
  src -->|연결| plat
  plat -->|구독 \xb7 라이선스| big
  plat -->|구독| partner --> mid
  plat <-.-|97억원| big
  plat <-.-|31억원 \xb7 구독료 70%| partner`},{id:"workflow",name:"문서 제작 흐름",legend:["다음 단계","되돌림"],wide:`flowchart LR
  s1[${a("01 목적","기획")}]
  s2[${a("02 수집","리서치")}]
  s3[${a("03 검증","검증")}]
  s4[${a("04 구조화","편집")}]
  s5[${a("05 표현","디자인")}]
  s6[${a("06 검수","검수")}]:::focus
  s7[${a("07 전달","기획")}]
  s8[${a("08 개선","전원")}]:::soft
  s1 --> s2 --> s3 --> s4 --> s5 --> s6 --> s7 --> s8
  s2 <-.-|근거 부족| s3
  s5 <-.-|수정 요청| s6`,narrow:`flowchart TB
  s1[${a("01 목적","기획")}]
  s2[${a("02 수집","리서치")}]
  s3[${a("03 검증","검증")}]
  s4[${a("04 구조화","편집")}]
  s5[${a("05 표현","디자인")}]
  s6[${a("06 검수","검수")}]:::focus
  s7[${a("07 전달","기획")}]
  s8[${a("08 개선","전원")}]:::soft
  s1 --> s2 --> s3 --> s4 --> s5 --> s6 --> s7 --> s8
  s4 <-.-|오류| s6`},{id:"review-gates",name:"검수 단계",legend:["통과","반려"],wide:`flowchart LR
  c[${a("내용 검수","사실 · 수치 · 논리")}]
  r[${a("화면 렌더","A4 · Chrome")}]
  p[${a("PDF","글꼴 · 넘침 · 쪽")}]
  o[${a("실물 출력","100% 인쇄")}]
  q[${a("디자인 QC","위계 · 밀도 · 정렬")}]
  ok[${a("승인","최종 판단: Bishop")}]:::focus
  c --> r --> p --> o --> q --> ok
  c <-.-|수정| q`}];function l(e){return o.find(t=>t.id===e)||i.find(t=>t.id===e)}var c=e.i(43237),d=e.i(66065);let u={};function f(e){return u[e]??=new Promise((t,r)=>{let s=document.createElement("script");s.src=d.basePath+e,s.onload=()=>t(),s.onerror=()=>r(Error(`${e}를 불러오지 못했습니다.`)),document.head.append(s)})}let p=Promise.resolve();function m(e){let t=p.then(async()=>(await f("/guide/vendor/mermaid-12.0.0.min.js"),await f("/guide/diagram-theme.js"),await document.fonts.ready,window.renderDiagram(e)));return p=t.catch(()=>void 0),t}function h({item:e}){let s=(0,r.useRef)(null),[a,n]=(0,r.useState)("");return(0,r.useEffect)(()=>{let t=!0;return Promise.all([m(e.wide),m(""===e.narrow?e.wide:e.narrow||e.wide.replace(/^flowchart LR/,"flowchart TB"))]).then(([r,a])=>{if(!t||!s.current)return;s.current.innerHTML=r+a;let[n,o]=s.current.querySelectorAll(":scope > svg");n?.classList.add("d"),o?.classList.add("m"),n?.setAttribute("aria-label",e.name),o?.setAttribute("aria-label",`${e.name} (세로 배치)`)}).catch(e=>t&&n(String(e.message||e))),()=>{t=!1}},[e]),(0,t.jsxs)("div",{className:"paper border border-line px-4 py-5",children:[(0,t.jsx)("div",{ref:s,className:"flex min-h-[120px] items-center justify-center [&_svg]:h-auto [&_svg]:max-w-full [&_svg.m]:hidden max-sm:[&_svg.d]:hidden max-sm:[&_svg.m]:block"}),a&&(0,t.jsxs)("p",{className:"m-0 text-xs text-[#a62326]",children:["도식을 그리지 못했습니다. ",a]}),e.legend&&(0,t.jsxs)("p",{className:"mx-0 mt-3 mb-0 flex justify-center gap-6 text-[11px] text-[#555]",children:[(0,t.jsx)("span",{className:"inline-flex items-center gap-2 before:w-7 before:border-t-[1.4px] before:border-[#555] before:content-['']",children:e.legend[0]}),(0,t.jsx)("span",{className:"inline-flex items-center gap-2 before:w-7 before:border-t-[1.4px] before:border-dashed before:border-[#555] before:content-['']",children:e.legend[1]})]}),e.band&&(0,t.jsxs)("p",{className:"mx-0 mt-3 mb-0 flex flex-wrap items-baseline gap-x-7 gap-y-1.5 bg-[#f2f2f2] px-3 py-2 text-[11.5px] text-[#555]",children:[(0,t.jsx)("strong",{className:"font-semibold text-[#222]",children:e.band[0]}),e.band.slice(1).map(e=>(0,t.jsx)("span",{children:e},e))]})]})}e.s(["Diagram",0,function({id:e}){let r=l(e);return r?(0,t.jsx)("div",{className:"my-6",children:(0,t.jsx)(h,{item:r})}):(0,t.jsxs)("p",{className:"text-xs text-[#a62326]",children:["도식 ",e,"를 찾지 못했습니다."]})},"DiagramCatalog",0,function({group:e}={}){let[a,i]=(0,r.useState)("all"),l=e??a,d=o.filter(e=>"all"===l||e.group===l);return(0,t.jsxs)("div",{children:[!e&&(0,t.jsx)("div",{className:"mb-4 border-b border-line pt-1 pb-2.5",children:(0,t.jsx)(c.ToggleGroup,{"aria-label":"도식 분류",value:l,onValueChange:i,className:"text-sm",children:Object.entries(n).map(([e,r])=>(0,t.jsx)(c.ToggleGroupItem,{value:e,children:r},e))})}),(0,t.jsxs)("p",{role:"status",className:"mt-0 mb-6 text-[13px] text-muted",children:[d.length,"개 도식"]}),(0,t.jsx)("ul",{className:"m-0 grid list-none grid-flow-row-dense grid-cols-2 gap-x-8 gap-y-12 p-0 max-toc:grid-cols-1",children:d.map(e=>(0,t.jsx)("li",{id:e.id,className:e.span?"col-span-full scroll-mt-24":"scroll-mt-24",children:(0,t.jsxs)(s.default,{href:`/docs/diagrams/${e.id}/`,className:"group block text-ink no-underline",children:[(0,t.jsx)("div",{className:"transition-colors [&>.paper]:group-hover:border-rule",children:(0,t.jsx)(h,{item:e})}),(0,t.jsx)("h3",{className:"mt-3 mb-1 text-base group-hover:text-accent-ink",children:e.name}),(0,t.jsx)("p",{className:"m-0 text-sm text-ink-2",children:e.question})]})},e.id))})]})},"DiagramSvg",0,function({id:e}){let s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=l(e);if(!t)return;let r=!0;return m(t.wide).then(e=>{let t=s.current;if(!r||!t)return;t.innerHTML=e;let a=t.querySelector("svg"),[,,n,o]=(a?.getAttribute("viewBox")||"").split(/\s+/).map(Number);if(!a||!n||!o)return;let i=Math.min(t.clientWidth/n,t.clientHeight/o,.8);a.style.width=`${n*i}px`,a.style.height=`${o*i}px`,a.style.maxWidth="none"}).catch(()=>void 0),()=>{r=!1}},[e]),(0,t.jsx)("div",{ref:s,className:"flex h-full w-full items-center justify-center"})},"Figure",0,h],28661)},66543,e=>{"use strict";var t=e.i(43476),r=e.i(65318),s=e.i(47163);e.s(["GridSkeleton",0,function({system:e,grid:a=!0,thumb:n=!1,className:o}){return(0,t.jsx)("div",{className:(0,s.cn)("[&>svg]:block [&>svg]:h-auto [&>svg]:w-full",o),dangerouslySetInnerHTML:{__html:(0,r.systemSkeleton)(e,{grid:a,thumb:n})}})}])},8303,e=>{"use strict";var t=e.i(43476),r=e.i(71645),s=e.i(54539);let a=(0,r.createContext)({decisions:{},error:"",setExcluded:()=>{}});function n(){let e=window.localStorage.getItem(s.STORAGE_KEY);if(null===e)return{};let t=JSON.parse(e);if(Array.isArray(t)&&t.every(e=>"string"==typeof e))return Object.fromEntries(t.map(e=>[e,!0]));if(!t||"object"!=typeof t||Array.isArray(t)||!Object.values(t).every(e=>"boolean"==typeof e))throw Error("Invalid saved selection");return{...t}}e.s(["DecisionProvider",0,function({children:e}){let[o,i]=(0,r.useState)({}),[l,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)("");(0,r.useEffect)(()=>{try{i(n())}catch{c(!0),u("제외 기록을 읽을 수 없습니다. 현재 탭에서만 선별할 수 있으며 새로고침 후에는 유지되지 않습니다. 브라우저 저장 권한을 확인해 주세요.")}},[]);let f=(0,r.useCallback)((e,t)=>{let r={...o},a=l;if(!a)try{r=n()}catch{a=!0}r[e]=t,i(r);try{if(a)throw Error("Storage unavailable");window.localStorage.setItem(s.STORAGE_KEY,JSON.stringify(r)),u("")}catch{c(!0),u("제외 기록을 저장하지 못했습니다. 이번 변경은 현재 탭에만 반영되며 새로고침하면 사라질 수 있습니다. 원본 자료는 삭제되지 않았습니다.")}},[o,l]);return(0,t.jsx)(a.Provider,{value:{decisions:o,error:d,setExcluded:f},children:e})},"useDecisions",0,()=>(0,r.useContext)(a)])},56555,e=>{"use strict";var t=e.i(43476),r=e.i(54539),s=e.i(8303),a=e.i(66065);e.s(["ExcludeCheckbox",0,function({record:e}){let{decisions:a,setExcluded:n}=(0,s.useDecisions)();return(0,t.jsxs)("label",{className:"inline-flex cursor-pointer items-center gap-1.5 text-[13px] text-muted",children:[(0,t.jsx)("input",{type:"checkbox",checked:(0,r.isExcluded)(e,a),onChange:t=>n(e.id,t.target.checked),"aria-label":`${e.title} 제외`,className:"accent-[var(--accent)]"}),"제외"]})},"SourceLinks",0,function({record:e,pdf:s=!0}){return s&&(0,r.refPdf)(e.localPdf)?(0,t.jsx)("a",{href:(0,a.withBase)("/"+e.localPdf),className:"text-[13px]",children:"원본 PDF 열기"}):(0,t.jsxs)("span",{className:"inline-flex flex-wrap gap-x-3 text-[13px]",children:[/^https:\/\//.test(e.sourceUrl||"")?(0,t.jsx)("a",{href:e.sourceUrl,className:"hit",children:"원문"}):(0,t.jsx)("span",{className:"text-muted",children:"원문 링크 미확보"}),(e.relatedSources||[]).filter(e=>/^https:\/\//.test(e.url)).map(e=>(0,t.jsx)("a",{href:e.url,children:e.title},e.url))]})},"StorageNotice",0,function(){let{error:e}=(0,s.useDecisions)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"text-[13px] text-muted",children:r.LOCAL_NOTE}),e&&(0,t.jsx)("p",{role:"alert",className:"text-[13px] text-accent-ink",children:e})]})}])},46537,e=>{"use strict";var t=e.i(43476),r=e.i(47163);e.s(["NativeSelect",0,function({className:e,...s}){return(0,t.jsxs)("div",{"data-slot":"native-select-wrapper",className:"relative",children:[(0,t.jsx)("select",{"data-slot":"native-select",className:(0,r.cn)("h-8 pointer-coarse:h-11 w-full cursor-pointer appearance-none rounded-[var(--radius)] border-0 border-b border-line bg-transparent pr-6 text-sm text-ink outline-none hover:border-rule focus-visible:border-ink",e),...s}),(0,t.jsx)("span",{"aria-hidden":!0,className:"pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-xs text-muted",children:"▾"})]})},"NativeSelectOption",0,function(e){return(0,t.jsx)("option",{"data-slot":"native-select-option",...e})}])},65318,e=>{"use strict";let t={title:"#8d8d8d",text:"#cfcfcf",note:"#dedede",dark:"#6f6f6f",light:"#c8c8c8",face:"#f1f1f1",rule:"#d9d9d9",image:"#e4e4e4",block:"#d6d6d6"},r={title:"#d0d0d0",text:"#6a6a6a",note:"#555555",dark:"#e6e6e6",light:"#7a7a7a",face:"#3a3a3a",rule:"#4a4a4a",image:"#444444",block:"#4f4f4f"},s=t,a=(e,t,r,s,a,n="")=>r>0&&s>0?`<rect x="${e.toFixed(1)}" y="${t.toFixed(1)}" width="${r.toFixed(1)}" height="${s.toFixed(1)}" fill="${a}"${n}/>`:"";function n(e,t,r,s,{pitch:o,bar:i,color:l,rand:c,paragraph:d=6,last:u=!0}){let f="",p=0;for(let n=t+(o-i)/2;n+i<=t+s+.01;n+=o)p++,d&&p%(d+1)==0||(f+=a(e,n,d&&(p+1)%(d+1)==0?r*(.35+.35*c()):r*(.9+.1*c()),i,l));return u&&!p&&(f+=a(e,t,.6*r,Math.min(i,s),l)),f}function o(e){let[t]=e.size,r=(t-2*e.margin-e.gap*(e.columns-1))/e.columns,s=(e.height-e.gap*(e.rows-1))/e.rows;return(e.regions||[]).map(t=>({kind:t.kind||"block",label:t.label,x:e.margin+t.column*(r+e.gap),y:e.y+t.row*(s+e.gap),w:r*t.colSpan+e.gap*(t.colSpan-1),h:s*t.rowSpan+e.gap*(t.rowSpan-1)}))}e.s(["systemBlocks",0,o,"systemSkeleton",0,function(e,{grid:i=!0,thumb:l=!1}={}){return function({size:e,blocks:o,grid:i=null,label:l="",thumb:c=!1,background:d="#ffffff"}){let u,f,p={pitch:f=(u=e[0]>e[1]&&e[0]>=900)?22:12,slide:u,bar:f*(c?.42:.32)};s="dark"===d?r:t,"dark"===d&&(d="#1f1f1f");let m=o.map((e,t)=>(function(e,t,r){let o,i=(o=r+0x6d2b79f5,()=>(o=Math.imul(o^o>>>15,1|o),(((o^=o+Math.imul(o^o>>>7,61|o))^o>>>14)>>>0)/0x100000000)),{x:l,y:c,w:d,h:u}=e,f=t.pitch,p=t.bar;switch(e.kind){case"title":{if(!t.slide&&u>7*f&&d>12*f){let e=Math.min(2.2*f,u/5),t="",r=Math.min(3,Math.floor((u-f)/(1.35*e)));for(let n=0;n<r;n++)t+=a(l,c+.3*f+n*e*1.35,d*(n===r-1?.55:.92),e,s.title);return t}let e=Math.min(.4*u,t.slide&&u>4*f?1.8*f:t.slide?.95*f:.78*f),r=a(l,c+.2*f,.72*d,e,s.title),n=c+.2*f+e+.55*f;return n+p<=c+u&&(r+=a(l,n,.48*d,p,s.text)),n+f+p<=c+u&&(r+=a(l,n+.9*f,.4*d,p,s.text)),r}case"label":return a(l,c+.2*f,.6*d,1.25*p,s.title)+(u>1.6*f?n(l,c+1.1*f,d,u-1.1*f,{pitch:f,bar:p,color:s.text,rand:i,paragraph:0}):"");case"text":return n(l,c,d,u,{pitch:f,bar:p,color:s.text,rand:i});case"note":return n(l,c,d,u,{pitch:.78*f,bar:.8*p,color:s.note,rand:i,paragraph:3});case"kpi":{let e=Math.min(.45*u,2.2*f);return a(l,c+.2*f,Math.min(.62*d,3*e),e,s.dark)+a(l,c+.4*f+e,.5*d,p,s.text)+(u>e+2.2*f?n(l,c+e+1.4*f,d,u-e-1.4*f,{pitch:f,bar:p,color:s.note,rand:i,paragraph:0}):"")}case"chart":{let e=1.2*f,t=a(l,c+.2*f,.5*d,1.2*p,s.title),r=c+e+.4*f,n=c+u-.3*f,o=d>1.4*u?6:4,m=d/o;for(let e=0;e<o;e++){let o=(n-r)*(.35+.6*i());t+=a(l+e*m+.18*m,n-o,.64*m,o,0===e?s.dark:s.light)}return t+a(l,n,d,.8,s.dark)}case"table":{let e=a(l,c,d,1.1*f,s.face),t=d>14*f?5:d>7*f?3:2,r=d/t,n=1.25*f;for(let o=c+1.1*f;o+n<=c+u+.01;o+=n){e+=a(l,o+n-.6,d,.6,s.rule);for(let c=0;c<t;c++){let t=0===c?r*(.5+.3*i()):r*(.25+.2*i());e+=a(0===c?l:l+(c+1)*r-t-.08*r,o+(n-p)/2,t,p,0===c?s.text:s.light)}}return e}case"step":{let e=Math.min(1.4*f,.2*d);return`<circle cx="${(l+e/2).toFixed(1)}" cy="${(c+e/2+.1*f).toFixed(1)}" r="${(e/2).toFixed(1)}" fill="${s.dark}"/>`+a(l+e+.5*f,c+.25*f,.5*d,1.2*p,s.title)+n(l,c+e+.6*f,d,u-e-.6*f,{pitch:f,bar:p,color:s.text,rand:i,paragraph:0})}case"image":return a(l,c,d,u,s.image);default:return a(l,c,d,u,s.block)}})(e,p,t+1)).join("");return s=t,`<svg viewBox="0 0 ${e[0]} ${e[1]}" role="img" aria-label="${String(l).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}" xmlns="http://www.w3.org/2000/svg"><rect width="${e[0]}" height="${e[1]}" fill="${d}"/>${i?function(e){let[t]=e.size,{columns:r,rows:s,gap:a,margin:n,y:o,height:i}=e,l=(t-2*n-a*(r-1))/r,c=(i-a*(s-1))/s,d=new Set([n,t-n]),u=new Set([o,o+i]);for(let e=0;e<r;e++)d.add(n+e*(l+a)),d.add(n+e*(l+a)+l);for(let e=0;e<s;e++)u.add(o+e*(c+a)),u.add(o+e*(c+a)+c);return`<g fill="none" stroke="#c82d30" stroke-opacity=".2" stroke-width=".6">${[...d].map(e=>`<path d="M${e.toFixed(1)} ${o}v${i}"/>`).join("")}${[...u].map(e=>`<path d="M${n} ${e.toFixed(1)}h${t-2*n}"/>`).join("")}</g>`}(i):""}${m}</svg>`}({size:e.size,blocks:o(e),grid:i?e:null,thumb:l,background:"dark"===e.background?"dark":"#ffffff",label:`${e.name} 스켈레톤: ${e.columns}열 ${e.rows}행`})}])},54539,e=>{"use strict";let t={reviewed:"내지 검토",previewed:"내지 미리보기",candidate:"검토 후보"},r={publication:"발행 문서",template:"템플릿",project:"편집 프로젝트"},s=e=>/^references\/assets\/[\w.-]+$/.test(e||""),a=e=>e.category||"publication",n=e=>["reviewed","previewed"].includes(e.status)&&e.pages?.length>0&&/^https:\/\//.test(e.sourceUrl||"")&&e.pages.every(e=>Number.isInteger(e.pdfPage)&&e.pdfPage>0&&s(e.image)),o=(e,t)=>Object.prototype.hasOwnProperty.call(t,e.id)?t[e.id]:!0===e.defaultExcluded,i=[["category","자료 분류"],["styleGroup","편집 유형"],["documentType","문서 형식"],["medium","매체"],["language","언어"],["status","검토 상태"]];e.s(["FILTERS",0,i,"LOCAL_NOTE",0,"제외 기록은 이 브라우저에만 저장됩니다. 다른 기기·브라우저 및 원본 catalog에는 동기화되지 않습니다.","PAGE_SIZE",0,24,"STORAGE_KEY",0,"deepsearch.references.excluded.v1","categoryOf",0,a,"collectionSummary",0,function(e,t){let r=e.filter(e=>"reviewed"===e.status&&e.pages?.length);return`전체 확보 ${e.length}건 (제외 포함) \xb7 기본 활성 ${e.filter(e=>!0!==e.defaultExcluded).length}건 \xb7 현재 검토대상 ${e.filter(e=>!o(e,t)).length}건 \xb7 내지 검토 ${r.length}건 / ${r.reduce((e,t)=>e+t.pages.length,0)}쪽 \xb7 검토 후보 ${e.filter(e=>"candidate"===e.status).length}건`},"filterOptions",0,function(e,s){return("category"===s?Object.keys(r):[...new Set(e.map(e=>e[s]))].filter(Boolean)).map(e=>[e,"status"===s?t[e]:"category"===s?r[e]:e])},"hasPages",0,n,"isExcluded",0,o,"pageLabel",0,e=>"PDF "+e.pdfPage+"쪽"+(e.printedPage?" / 인쇄 "+e.printedPage+"쪽":""),"refAsset",0,s,"refCategory",0,r,"refPdf",0,e=>/^references\/documents\/[\w.-]+\.pdf$/i.test(e||""),"refStatus",0,t,"selectRecords",0,function(e,t,r){let s="candidates"===t.get("tab")?"candidates":"documents",l=t.get("selection")||"active",c=(t.get("q")||"").toLowerCase();return e.filter(e=>("documents"===s?n(e):!n(e))&&i.every(([r])=>!t.get(r)||("category"===r?a(e):e[r])===t.get(r))&&("all"===l||("excluded"===l?o(e,r):!o(e,r)))&&(!c||[e.title,e.publisher,...e.strengths||[]].join(" ").toLowerCase().includes(c))).sort((e,t)=>(t.previewAddedAt||"").localeCompare(e.previewAddedAt||""))}])}]);