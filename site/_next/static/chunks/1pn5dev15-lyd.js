(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28661,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(22016);let o=(e,t)=>`"\`**${e}**${t?`
${t}`:""}\`"`,s={all:"전체",structure:"관계와 구조",industry:"시장 속 위치",flow:"흐름과 절차",time:"시간과 논리"},a=[{id:"business-model",name:"사업 구조도",group:"structure",question:"이 회사는 누구에게서 사서, 누구에게 팔고, 돈은 어떻게 들어오나요?",docs:["기업현황","투자검토 IM"],use:"기업을 처음 소개하는 쪽에서 거래 상대와 제품·현금의 방향을 한 장으로 보여줄 때.",avoid:"거래 상대가 여덟 이상이면 상위 분류로 묶고 세부는 표로 뺍니다.",rules:["대상 기업 하나만 짙은 면으로 둡니다.","제품·판매는 실선, 현금은 점선으로 방향을 나눕니다.","선 이름표는 두세 글자 동사(납품, 결제, 정산)로 씁니다."],legend:["제품·판매","현금"],wide:`flowchart LR
  maker[${o("위탁 제조사","제품 생산 · 납품")}]
  subgraph company["기업의 직접 수행 범위"]
    direction TB
    brand[${o("가상 화장품 브랜드","기획 · 발주 · 판매")}]:::focus
    revenue[${o("매출원: 제품 판매대금","생산은 외부에 위탁합니다.")}]:::note
  end
  own[${o("자사몰","소비자 직접 판매")}]
  dist[${o("유통사","매입 후 재판매")}]
  maker -->|납품| brand
  maker <-.-|대금| brand
  brand -->|판매| own
  brand <-.-|결제| own
  brand -->|납품| dist
  brand <-.-|정산| dist`,narrow:`flowchart TB
  maker[${o("위탁 제조사","제품 생산 · 납품")}]
  subgraph company[" "]
    direction TB
    brand[${o("가상 화장품 브랜드","기획 · 발주 · 판매")}]:::focus
    revenue[${o("매출원: 제품 판매대금","생산은 외부에 위탁합니다.")}]:::note
  end
  own[${o("자사몰","소비자 직접 판매")}]
  dist[${o("유통사","매입 후 재판매")}]
  maker -->|납품| brand
  maker <-.-|대금| brand
  brand -->|판매| own
  brand <-.-|결제| own
  brand -->|납품| dist
  brand <-.-|정산| dist`},{id:"revenue-tree",name:"매출 구성 트리",group:"structure",question:"매출은 어떤 사업과 제품에서 나오나요?",docs:["기업현황","투자검토 IM","산업분석"],use:"매출을 사업부 → 제품군 순서로 나눠 규모와 비중을 함께 보여줄 때. 구성비 차트보다 계층이 잘 보입니다.",avoid:"계층이 셋을 넘거나 항목이 많으면 트리맵이나 표로 바꿉니다.",rules:["상자마다 금액과 비중을 둘째 줄에 같은 형식으로 적습니다.","같은 층의 합계가 위 상자의 값과 맞는지 확인합니다.","가장 큰 가지만 짙게 하지 말고, 설명하려는 가지에만 강조를 둡니다."],wide:`flowchart TB
  total[${o("매출 128억원","2025년 · 연결 기준")}]:::focus
  sub[${o("구독","74억원 · 58%")}]
  lic[${o("라이선스","35억원 · 27%")}]
  svc[${o("용역","19억원 · 15%")}]
  s1[${o("기업용","52억원")}]:::soft
  s2[${o("개인용","22억원")}]:::soft
  l1[${o("온프레미스","28억원")}]:::soft
  l2[${o("OEM","7억원")}]:::soft
  total --> sub & lic & svc
  sub --> s1 & s2
  lic --> l1 & l2`,narrow:`flowchart LR
  total[${o("매출 128억원","2025년")}]:::focus
  sub[${o("구독","74억원 · 58%")}]
  lic[${o("라이선스","35억원 · 27%")}]
  svc[${o("용역","19억원 · 15%")}]
  s1[${o("기업용","52억원")}]:::soft
  s2[${o("개인용","22억원")}]:::soft
  l1[${o("온프레미스","28억원")}]:::soft
  l2[${o("OEM","7억원")}]:::soft
  total --> sub & lic & svc
  sub --> s1 & s2
  lic --> l1 & l2`},{id:"org-chart",name:"조직도",group:"structure",question:"조직은 어떻게 나뉘고 각 조직에 몇 명이 있나요?",docs:["기업현황","투자검토 IM","기술제안서"],use:"보고 체계와 조직 규모를 보여줄 때. 기술제안서에서는 수행 조직과 책임자를 보여줄 때 씁니다.",avoid:"사람 이름을 모두 넣지 않습니다. 둘째 층까지만 그리고 셋째 층은 인원만 적습니다.",rules:["같은 층의 상자는 같은 높이에 둡니다.","둘째 줄에는 인원 또는 책임자 한 가지만 적습니다.","설명하려는 조직(예: 연구개발)에만 강조를 둡니다."],wide:`flowchart TB
  ceo[${o("대표이사","경영 총괄")}]
  board[${o("이사회","사외이사 2명")}]:::note
  ops[${o("경영지원","12명")}]
  biz[${o("사업본부","38명")}]
  rnd[${o("연구개발본부","54명 · CTO")}]:::focus
  b1[${o("국내 영업","22명")}]:::soft
  b2[${o("해외 사업","16명")}]:::soft
  r1[${o("플랫폼","31명")}]:::soft
  r2[${o("데이터·AI","23명")}]:::soft
  board -.- ceo
  ceo --> ops & biz & rnd
  biz --> b1 & b2
  rnd --> r1 & r2`,narrow:`flowchart LR
  ceo[${o("대표이사","경영 총괄")}]
  ops[${o("경영지원","12명")}]
  biz[${o("사업본부","38명")}]
  rnd[${o("연구개발본부","54명 · CTO")}]:::focus
  b1[${o("국내 영업","22명")}]:::soft
  b2[${o("해외 사업","16명")}]:::soft
  r1[${o("플랫폼","31명")}]:::soft
  r2[${o("데이터·AI","23명")}]:::soft
  ceo --> ops & biz & rnd
  biz --> b1 & b2
  rnd --> r1 & r2`},{id:"ownership",name:"지배구조·지분도",group:"structure",question:"누가 이 회사를 소유하고, 이 회사는 어떤 회사를 소유하나요?",docs:["기업현황","투자검토 IM"],use:"주주 구성과 자회사 관계를 지분율과 함께 보여줄 때. 위는 주주, 아래는 자회사로 방향을 고정합니다.",avoid:"주주가 많으면 5% 이상만 그리고 나머지는 ‘기타 주주’로 묶습니다.",rules:["선 이름표에 지분율만 적습니다.","지분율 기준일을 도식 아래 주석에 적습니다.","합계가 100%인지 확인합니다."],wide:`flowchart TB
  f[${o("창업자","개인")}]
  v1[${o("A 벤처캐피탈","재무적 투자자")}]
  v2[${o("B 전략투자사","사업 제휴")}]
  etc[${o("기타 주주","임직원 포함")}]:::soft
  co[${o("가상 소프트웨어","대상 기업")}]:::focus
  s1[${o("해외 법인","싱가포르")}]
  s2[${o("데이터 자회사","국내")}]
  f -->|42%| co
  v1 -->|24%| co
  v2 -->|15%| co
  etc -->|19%| co
  co -->|100%| s1
  co -->|67%| s2`,narrow:`flowchart TB
  f[${o("창업자","42%")}]
  v1[${o("A 벤처캐피탈","24%")}]
  v2[${o("B 전략투자사","15%")}]
  etc[${o("기타 주주","19%")}]:::soft
  co[${o("가상 소프트웨어","대상 기업")}]:::focus
  s1[${o("해외 법인","100%")}]
  s2[${o("데이터 자회사","67%")}]
  f & v1 & v2 & etc --> co
  co --> s1 & s2`},{id:"deal-structure",name:"투자 구조도",group:"structure",question:"투자금은 어떤 경로로 들어가고, 거래 후 지분은 어떻게 바뀌나요?",docs:["투자검토 IM"],use:"투자 방식(신주·구주), 투자 기구, 거래 후 지분을 한 장으로 보여줄 때.",avoid:"조건이 많은 계약 내용(우선주 조건, 옵션)은 도식에 넣지 않고 표로 둡니다.",rules:["자금 흐름은 점선, 지분 취득은 실선으로 나눕니다.","금액과 지분율은 선 이름표가 아니라 상자 둘째 줄에 둡니다.","거래 전·후 지분 비교는 도식 옆 표로 둡니다."],legend:["지분","자금"],wide:`flowchart LR
  lp[${o("출자자","연기금 · 금융기관")}]
  fund[${o("투자조합","약정 500억원")}]
  co[${o("대상 기업","거래 후 기업가치 1,200억원")}]:::focus
  old[${o("기존 주주","일부 구주 매각")}]
  lp -.->|출자| fund
  fund -.->|신주 100억원| co
  fund -.->|구주 40억원| old
  old -->|지분 3.3%| fund
  co -->|신규 지분 8.3%| fund`},{id:"value-chain",span:!0,name:"산업 지도(가치사슬)",group:"industry",question:"이 산업은 어떤 단계로 이루어지고, 대상 기업은 어디에 있나요?",docs:["기업현황","산업분석","투자검토 IM"],use:"원료부터 소비자까지 단계를 왼쪽에서 오른쪽으로 놓고 대상 기업의 위치를 짚을 때.",avoid:"단계가 여섯을 넘으면 앞뒤 단계를 묶습니다. 기업 이름을 단계마다 많이 넣지 않습니다.",rules:["단계 번호와 이름을 묶음 제목으로 둡니다.","대상 기업이 있는 단계만 짙은 면으로 둡니다.","단계를 돕는 지원 서비스는 도식 아래 한 줄 띠로 뺍니다."],band:["지원 서비스","시험·분석","패키지 디자인","물류·보관"],wide:`flowchart LR
  subgraph s1["01 공급"]
    raw[${o("원료 공급사","성분 원료")}]
    pack[${o("용기·포장사","용기 · 단상자")}]
  end
  subgraph s2["02 제조"]
    make[${o("ODM 개발 + 생산","또는\nOEM 위탁 생산")}]:::soft
  end
  subgraph s3["03 브랜드 \xb7 대상 기업"]
    brand[${o("가상 브랜드","기획 · 판매")}]:::focus
  end
  subgraph s4["04 판매 채널"]
    own[${o("자사몰","직접 판매")}]
    dist[${o("유통사","매입 후 판매")}]
  end
  subgraph s5["05 소비"]
    user[${o("소비자","구매 · 사용")}]
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
    shop[${o("가맹점","4,200곳")}]
    rider[${o("배송 파트너","1,100명")}]
  end
  hub[${o("가상 주문 플랫폼","중개 · 결제 · 정산")}]:::focus
  subgraph demand["수요 쪽"]
    direction TB
    user[${o("이용자","월 42만 명")}]
    corp[${o("기업 고객","식대 복지")}]
  end
  ad[${o("광고주","노출 구매")}]:::soft
  shop -->|메뉴 등록| hub
  rider -->|배송| hub
  hub -->|주문 전달| user
  hub -->|정산 보고| corp
  shop <-.-|수수료 8%| hub
  hub <-.-|결제| user
  ad -.->|광고비| hub`},{id:"market-sizing",name:"시장 범위(TAM·SAM·SOM)",group:"industry",question:"전체 시장 가운데 대상 기업이 실제로 공략하는 시장은 얼마인가요?",docs:["산업분석","투자검토 IM","기업현황"],use:"전체 시장에서 접근 가능한 시장, 확보 목표 시장으로 범위를 좁혀 가는 논리를 보여줄 때.",avoid:"각 층의 산정 근거(출처, 가정)를 밝힐 수 없으면 숫자를 넣지 않습니다.",rules:["바깥에서 안쪽으로 좁아지는 순서를 지킵니다.","각 층에 금액과 정의를 한 줄씩 적습니다.","산정 방식(하향식·상향식)과 출처를 도식 아래에 적습니다."],wide:`flowchart TB
  subgraph tam["TAM \xb7 국내 기업용 데이터 분석 시장 2.6조원"]
    subgraph sam["SAM \xb7 금융\xb7제조 업종의 클라우드 분석 1.1조원"]
      som[${o("SOM · 3년 내 확보 목표 900억원","점유율 8% 가정")}]:::focus
    end
  end
  style tam fill:#f4f4f4,stroke:#f4f4f4
  style sam fill:#e4e4e4,stroke:#e4e4e4`,narrow:`flowchart TB
  subgraph tam["TAM 2.6조원 \xb7 국내 전체"]
    subgraph sam["SAM 1.1조원 \xb7 금융\xb7제조"]
      som[${o("SOM 900억원","3년 목표 · 8%")}]:::focus
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
  p1[${o("01 원료 배합","배합 탱크\n원료를 혼합해\n내용물을 만듭니다.")}]
  p2[${o("02 내용물 확인","시료·시험\n내용물의 품질을\n확인합니다.")}]
  p3[${o("03 충전·포장","충전 설비\n용기에 담고\n포장합니다.")}]
  p4[${o("04 출하 검사","검사 기록\n검사를 마친 제품의\n출하를 승인합니다.")}]
  p1 --> p2 --> p3 --> p4`},{id:"decision-flow",name:"의사결정 흐름",group:"flow",question:"조건에 따라 업무가 어떻게 갈라지고 누가 처리하나요?",docs:["기술제안서","기업현황"],use:"예·아니요 판단에 따라 경로가 갈라지는 업무를 설명할 때. 담당자는 각 단계 둘째 줄에 적습니다.",avoid:"판단이 셋 이상 이어지면 표(조건 × 처리)로 바꿉니다.",rules:["판단은 마름모, 처리는 사각형으로 모양을 나눕니다.","판단에서 나가는 선에 예·아니요를 적습니다.","되돌아가는 선은 점선으로 둡니다."],legend:["업무 흐름","되돌림"],wide:`flowchart TB
  order[${o("주문 접수","영업")}]
  stock[${o("재고 확인","물류")}]
  decide{${o("출고 가능","재고입니까?")}}
  negotiate[${o("고객과 일정 협의","영업")}]
  confirm[${o("입고 일정 확정","영업")}]
  check[${o("출하 품질 확인","품질 담당")}]
  ship[${o("승인 제품 출고","품질 담당")}]
  deliver[${o("고객 인도","품질 담당")}]:::focus
  order --> stock --> decide
  decide -->|아니요| negotiate --> confirm
  stock <-.-|입고 후| confirm
  decide -->|예| check -->|적합| ship --> deliver`,narrow:""},{id:"system-architecture",span:!0,name:"시스템 구성도",group:"flow",question:"제안하는 시스템은 어떤 층으로 이루어지고 무엇과 연결되나요?",docs:["기술제안서"],use:"사용자 → 서비스 → 데이터 → 외부 연계 순서로 층을 나눠 구성 요소를 보여줄 때.",avoid:"서버·네트워크 세부(포트, 사양)는 도식에 넣지 않고 별도 표로 둡니다.",rules:["층은 묶음으로, 층 순서는 왼쪽(사용자)에서 오른쪽(외부)으로 둡니다.","이번 제안의 신규 구축 범위만 짙게 둡니다.","기존 시스템은 옅은 면으로 구분합니다."],wide:`flowchart LR
  subgraph u["사용자"]
    direction TB
    web[${o("업무 화면","웹 · 사내망")}]
    mob[${o("모바일","현장 점검")}]
  end
  subgraph s["서비스 \xb7 신규 구축"]
    direction TB
    api[${o("통합 API","인증 · 권한")}]:::focus
    ana[${o("분석 엔진","배치 · 실시간")}]:::focus
  end
  subgraph d["데이터"]
    direction TB
    dw[${o("데이터 저장소","정형 · 비정형")}]
  end
  subgraph e["기존 시스템 \xb7 외부"]
    direction TB
    erp[${o("ERP","기존")}]:::soft
    ext[${o("공공 데이터","외부 API")}]:::soft
  end
  web & mob --> api --> ana --> dw
  dw <-.-|수집| erp
  dw <-.-|수집| ext`},{id:"as-is-to-be",name:"현행·개선 비교(AS-IS/TO-BE)",group:"flow",question:"지금 방식과 바뀐 방식은 무엇이 다른가요?",docs:["기술제안서","발표"],use:"업무나 시스템이 바뀌는 전후를 같은 단계 순서로 나란히 보여줄 때.",avoid:"바뀌지 않는 단계까지 모두 그리지 않습니다. 달라지는 단계만 남깁니다.",rules:["왼쪽은 현행, 오른쪽은 개선으로 순서를 고정합니다.","같은 단계는 같은 높이에 둡니다.","개선되는 단계만 짙게 두고 효과(시간, 비용)를 둘째 줄에 적습니다."],wide:`flowchart LR
  subgraph asis["현행"]
    direction TB
    a1[${o("엑셀로 자료 취합","부서별 이메일")}]
    a2[${o("수작업 검증","평균 3일")}]
    a3[${o("보고서 작성","담당자 2명")}]
    a1 --> a2 --> a3
  end
  subgraph tobe["개선"]
    direction TB
    t1[${o("자동 수집","시스템 연계")}]:::soft
    t2[${o("규칙 기반 검증","당일 처리")}]:::focus
    t3[${o("보고서 자동 생성","검토 1명")}]:::focus
    t1 --> t2 --> t3
  end
  asis ~~~ tobe`,narrow:`flowchart TB
  subgraph asis["현행"]
    direction LR
    a1[${o("자료 취합","이메일")}]
    a2[${o("수작업 검증","3일")}]
    a1 --> a2
  end
  subgraph tobe["개선"]
    direction LR
    t1[${o("자동 수집","연계")}]:::soft
    t2[${o("규칙 검증","당일")}]:::focus
    t1 --> t2
  end
  asis ~~~ tobe`},{id:"history",span:!0,name:"연혁",group:"time",question:"회사는 언제 어떤 일을 거쳐 지금에 이르렀나요?",docs:["기업현황","투자검토 IM","발표"],use:"설립부터 현재까지 주요 사건을 시간 순서로 보여줄 때. 사건은 연도마다 두 개 이하로 줄입니다.",avoid:"사건이 열 개를 넘으면 표(연도 · 내용)로 바꿉니다. 간격이 불규칙해도 같은 폭으로 그린다는 점을 기억합니다.",rules:["연도는 굵게, 사건은 둘째 줄에 적습니다.","현재 또는 설명하려는 시점만 짙게 둡니다.","투자·매출 같은 수치 사건은 금액을 함께 적습니다."],wide:`flowchart LR
  y1[${o("2016","법인 설립")}]
  y2[${o("2018","시리즈 A 60억원\n첫 기업 고객")}]
  y3[${o("2021","해외 법인 설립")}]
  y4[${o("2024","매출 100억원 돌파")}]
  y5[${o("2025","상장 예비심사 청구")}]:::focus
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
  root[${o("영업이익 14억원 감소","2025년 · 전년 대비")}]
  r1[${o("매출 감소","−6억원")}]
  r2[${o("비용 증가","−8억원")}]
  q[${o("판매량","−4%")}]:::soft
  p[${o("단가","변동 없음")}]:::soft
  c1[${o("원재료비","+7억원 · 환율")}]:::focus
  c2[${o("판관비","+1억원")}]:::soft
  root --> r1 & r2
  r1 --> q & p
  r2 --> c1 & c2`,narrow:`flowchart TB
  root[${o("영업이익 14억원 감소","전년 대비")}]
  r1[${o("매출 감소","−6억원")}]
  r2[${o("비용 증가","−8억원")}]
  c1[${o("원재료비","+7억원")}]:::focus
  c2[${o("판관비","+1억원")}]:::soft
  root --> r1 & r2
  r2 --> c1 & c2`}],i=[{id:"business-model-software",name:"누리데이터 사업 구조",wide:`flowchart TB
  src[${o("데이터 원천","ERP · 계정계 · 공공 데이터")}]:::soft
  subgraph nuri["누리데이터"]
    direction LR
    plat[${o("데이터 통합 플랫폼","연결 · 정제 · 분석 · 보고")}]:::focus
    rnd[${o("연구개발 54명","제품 · 커넥터 180종")}]:::note
  end
  big[${o("대형 고객 41곳","직접 계약 · 직접 구축")}]
  partner[${o("파트너 12곳","판매 · 구축 대행")}]
  mid[${o("중견 고객 271곳","파트너 경로")}]
  src -->|연결| plat
  plat -->|구독 \xb7 라이선스| big
  plat -->|구독| partner --> mid
  plat <-.-|97억원| big
  plat <-.-|31억원 \xb7 구독료 70%| partner`},{id:"workflow",name:"문서 제작 흐름",legend:["다음 단계","되돌림"],wide:`flowchart LR
  s1[${o("01 목적","기획")}]
  s2[${o("02 수집","리서치")}]
  s3[${o("03 검증","검증")}]
  s4[${o("04 구조화","편집")}]
  s5[${o("05 표현","디자인")}]
  s6[${o("06 검수","검수")}]:::focus
  s7[${o("07 전달","기획")}]
  s8[${o("08 개선","전원")}]:::soft
  s1 --> s2 --> s3 --> s4 --> s5 --> s6 --> s7 --> s8
  s2 <-.-|근거 부족| s3
  s5 <-.-|수정 요청| s6`,narrow:`flowchart TB
  s1[${o("01 목적","기획")}]
  s2[${o("02 수집","리서치")}]
  s3[${o("03 검증","검증")}]
  s4[${o("04 구조화","편집")}]
  s5[${o("05 표현","디자인")}]
  s6[${o("06 검수","검수")}]:::focus
  s7[${o("07 전달","기획")}]
  s8[${o("08 개선","전원")}]:::soft
  s1 --> s2 --> s3 --> s4 --> s5 --> s6 --> s7 --> s8
  s4 <-.-|오류| s6`},{id:"review-gates",name:"검수 단계",legend:["통과","반려"],wide:`flowchart LR
  c[${o("내용 검수","사실 · 수치 · 논리")}]
  r[${o("화면 렌더","A4 · Chrome")}]
  p[${o("PDF","글꼴 · 넘침 · 쪽")}]
  o[${o("실물 출력","100% 인쇄")}]
  q[${o("디자인 QC","위계 · 밀도 · 정렬")}]
  ok[${o("승인","최종 판단: Bishop")}]:::focus
  c --> r --> p --> o --> q --> ok
  c <-.-|수정| q`}];function u(e){return a.find(t=>t.id===e)||i.find(t=>t.id===e)}var l=e.i(43237),c=e.i(66065);let d={};function f(e){return d[e]??=new Promise((t,r)=>{let n=document.createElement("script");n.src=c.basePath+e,n.onload=()=>t(),n.onerror=()=>r(Error(`${e}를 불러오지 못했습니다.`)),document.head.append(n)})}let p=Promise.resolve();function m(e){let t=p.then(async()=>(await f("/guide/vendor/mermaid-12.0.0.min.js"),await f("/guide/diagram-theme.js"),await document.fonts.ready,window.renderDiagram(e)));return p=t.catch(()=>void 0),t}function h({item:e}){let n=(0,r.useRef)(null),[o,s]=(0,r.useState)("");return(0,r.useEffect)(()=>{let t=!0;return Promise.all([m(e.wide),m(""===e.narrow?e.wide:e.narrow||e.wide.replace(/^flowchart LR/,"flowchart TB"))]).then(([r,o])=>{if(!t||!n.current)return;n.current.innerHTML=r+o;let[s,a]=n.current.querySelectorAll(":scope > svg");s?.classList.add("d"),a?.classList.add("m"),s?.setAttribute("aria-label",e.name),a?.setAttribute("aria-label",`${e.name} (세로 배치)`)}).catch(e=>t&&s(String(e.message||e))),()=>{t=!1}},[e]),(0,t.jsxs)("div",{className:"paper border border-line px-4 py-5",children:[(0,t.jsx)("div",{ref:n,className:"flex min-h-[120px] items-center justify-center [&_svg]:h-auto [&_svg]:max-w-full [&_svg.m]:hidden max-sm:[&_svg.d]:hidden max-sm:[&_svg.m]:block"}),o&&(0,t.jsxs)("p",{className:"m-0 text-xs text-[#a62326]",children:["도식을 그리지 못했습니다. ",o]}),e.legend&&(0,t.jsxs)("p",{className:"mx-0 mt-3 mb-0 flex justify-center gap-6 text-[11px] text-[#555]",children:[(0,t.jsx)("span",{className:"inline-flex items-center gap-2 before:w-7 before:border-t-[1.4px] before:border-[#555] before:content-['']",children:e.legend[0]}),(0,t.jsx)("span",{className:"inline-flex items-center gap-2 before:w-7 before:border-t-[1.4px] before:border-dashed before:border-[#555] before:content-['']",children:e.legend[1]})]}),e.band&&(0,t.jsxs)("p",{className:"mx-0 mt-3 mb-0 flex flex-wrap items-baseline gap-x-7 gap-y-1.5 bg-[#f2f2f2] px-3 py-2 text-[11.5px] text-[#555]",children:[(0,t.jsx)("strong",{className:"font-semibold text-[#222]",children:e.band[0]}),e.band.slice(1).map(e=>(0,t.jsx)("span",{children:e},e))]})]})}e.s(["Diagram",0,function({id:e}){let r=u(e);return r?(0,t.jsx)("div",{className:"my-6",children:(0,t.jsx)(h,{item:r})}):(0,t.jsxs)("p",{className:"text-xs text-[#a62326]",children:["도식 ",e,"를 찾지 못했습니다."]})},"DiagramCatalog",0,function({group:e}={}){let[o,i]=(0,r.useState)("all"),u=e??o,c=a.filter(e=>"all"===u||e.group===u);return(0,t.jsxs)("div",{children:[!e&&(0,t.jsx)("div",{className:"mb-4 border-b border-line pt-1 pb-2.5",children:(0,t.jsx)(l.ToggleGroup,{"aria-label":"도식 분류",value:u,onValueChange:i,className:"text-sm",children:Object.entries(s).map(([e,r])=>(0,t.jsx)(l.ToggleGroupItem,{value:e,children:r},e))})}),(0,t.jsxs)("p",{role:"status",className:"mt-0 mb-6 text-[13px] text-muted",children:[c.length,"개 도식"]}),(0,t.jsx)("ul",{className:"m-0 grid list-none grid-flow-row-dense grid-cols-2 gap-x-8 gap-y-12 p-0 max-toc:grid-cols-1",children:c.map(e=>(0,t.jsx)("li",{id:e.id,className:e.span?"col-span-full scroll-mt-24":"scroll-mt-24",children:(0,t.jsxs)(n.default,{href:`/docs/diagrams/${e.id}/`,className:"group block text-ink no-underline",children:[(0,t.jsx)("div",{className:"transition-colors [&>.paper]:group-hover:border-rule",children:(0,t.jsx)(h,{item:e})}),(0,t.jsx)("h3",{className:"mt-3 mb-1 text-base group-hover:text-accent-ink",children:e.name}),(0,t.jsx)("p",{className:"m-0 text-sm text-ink-2",children:e.question})]})},e.id))})]})},"DiagramSvg",0,function({id:e}){let n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=u(e);if(!t)return;let r=!0;return m(t.wide).then(e=>{let t=n.current;if(!r||!t)return;t.innerHTML=e;let o=t.querySelector("svg"),[,,s,a]=(o?.getAttribute("viewBox")||"").split(/\s+/).map(Number);if(!o||!s||!a)return;let i=Math.min(t.clientWidth/s,t.clientHeight/a,.8);o.style.width=`${s*i}px`,o.style.height=`${a*i}px`,o.style.maxWidth="none"}).catch(()=>void 0),()=>{r=!1}},[e]),(0,t.jsx)("div",{ref:n,className:"flex h-full w-full items-center justify-center"})},"Figure",0,h],28661)},14739,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(47163);let o=(0,r.createContext)(null);function s({href:e}){let[n,o]=(0,r.useState)(null),[a,i]=(0,r.useState)(!1),[u,l]=(0,r.useState)(!1),c=(0,r.useRef)(void 0);async function d(){if(null!==n)try{await navigator.clipboard.writeText(n),l(!0),clearTimeout(c.current),c.current=setTimeout(()=>l(!1),2e3)}catch{}}return(0,r.useEffect)(()=>()=>clearTimeout(c.current),[]),(0,r.useEffect)(()=>{let t=!0;return fetch(e).then(e=>e.ok?e.text():Promise.reject(e.status)).then(e=>{t&&o(e)}).catch(()=>{t&&i(!0)}),()=>{t=!1}},[e]),(0,t.jsxs)("section",{"aria-label":"Markdown 원고",className:"border border-line",children:[(0,t.jsxs)("div",{className:"flex items-baseline justify-between gap-4 border-b border-line px-4 py-2 text-[13px] text-muted",children:[(0,t.jsx)("span",{children:"Markdown · 에이전트와 도구가 읽는 원고"}),null!==n&&(0,t.jsx)("button",{type:"button",onClick:d,className:"hit cursor-pointer text-muted hover:text-ink",children:(0,t.jsx)("span",{"aria-live":"polite",children:u?"복사했습니다":"복사"})})]}),(0,t.jsx)("pre",{className:"m-0 overflow-x-auto px-4 py-4 font-mono text-[13px] leading-[1.7] whitespace-pre-wrap text-ink-2 [overflow-wrap:anywhere] [word-break:normal]",children:n??(a?"원고를 불러오지 못했습니다.":"불러오는 중…")})]})}e.s(["DocArticle",0,function({markdown:e,children:n}){let[s,a]=(0,r.useState)(!1),i=(0,r.useRef)(null);return(0,t.jsx)(o.Provider,{value:e?{href:e,markdown:s,toggle:()=>{a(e=>!e),(i.current?.getBoundingClientRect().top??0)<0&&i.current?.scrollIntoView({block:"start"})}}:null,children:(0,t.jsx)("article",{ref:i,children:n})})},"DocBody",0,function({children:e}){let n=(0,r.useContext)(o);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{hidden:n?.markdown,children:e}),n?.markdown&&(0,t.jsx)(s,{href:n.href})]})},"MarkdownToggle",0,function({className:e}){let s=(0,r.useContext)(o);return s?(0,t.jsx)("button",{type:"button",onClick:s.toggle,"aria-pressed":s.markdown,className:(0,n.cn)("hit cursor-pointer text-muted hover:text-ink",s.markdown&&"font-semibold text-ink",e),children:s.markdown?"문서로 돌아가기":"Markdown 보기"}):null}])},48399,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(47163);e.s(["Toc",0,function({headings:e}){let[o,s]=(0,r.useState)(e[0]?.id);return((0,r.useEffect)(()=>{let t=()=>{let t=e[0]?.id;for(let r of e){let e=document.getElementById(r.id);e&&e.getBoundingClientRect().top<.3*window.innerHeight&&(t=r.id)}s(t)};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[e]),e.length)?(0,t.jsxs)("nav",{"aria-label":"이 페이지의 내용",className:"text-[13px]",children:[(0,t.jsx)("h2",{className:"mb-2.5 border-b border-rule pb-2 text-[13px] font-semibold text-ink",children:"이 페이지"}),(0,t.jsx)("ol",{className:"m-0 list-none p-0",children:e.map(e=>(0,t.jsx)("li",{className:3===e.depth?"pl-4":void 0,children:(0,t.jsx)("a",{href:`#${e.id}`,className:(0,n.cn)("block py-1 pointer-coarse:py-2 leading-snug text-muted no-underline hover:text-ink",o===e.id&&"font-semibold text-ink before:mr-1.5 before:mb-1 before:inline-block before:h-px before:w-2.5 before:bg-accent before:align-middle"),children:e.text})},e.id))})]}):null}])},22016,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return x}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let s=e.r(90809),a=e.r(43476),i=s._(e.r(71645)),u=e.r(95057),l=e.r(8372),c=e.r(18581),d=e.r(18967),f=e.r(5550),p=e.r(88540),m=e.r(91949),h=e.r(73668),b=e.r(9396);function g(t){var r;let n,o,s,[g,x]=(0,i.useOptimistic)(m.IDLE_LINK_STATUS),w=(0,i.useRef)(null),{href:y,as:v,children:j,prefetch:k=null,passHref:T,replace:M,shallow:E,scroll:N,onClick:P,onMouseEnter:S,onTouchStart:R,legacyBehavior:B=!1,onNavigate:C,transitionTypes:O,ref:L,unstable_dynamicOnHover:_,...A}=t;n=j,B&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let I=i.default.useContext(l.AppRouterContext),q=!1!==k,D=!1===k?"none":!0===k?"full":"auto",U="none"!==D?"auto"===D?b.FetchStrategy.PPR:b.FetchStrategy.Full:b.FetchStrategy.PPR,F="string"==typeof(r=v||y)?r:(0,u.formatUrl)(r);if(B){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=i.default.Children.only(n)}let z=B?o&&"object"==typeof o&&o.ref:L,K,W=i.default.useCallback(e=>(null!==I&&(w.current=(0,m.mountLinkInstance)(e,F,I,U,q,x,K)),()=>{w.current&&((0,m.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,m.unmountPrefetchableInstance)(e)}),[q,F,I,U,x,K]),H={ref:(0,c.useMergedRef)(W,z),onClick(t){B||"function"!=typeof P||P(t),B&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!I||t.defaultPrevented||function(t,r,n,o,s,a,u,l="none"){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);i.default.startTransition(()=>{f(r,o?"replace":"push",!1===s?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,u,l)})}}(t,F,w,M,N,C,O,D)},onMouseEnter(e){B||"function"!=typeof S||S(e),B&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&q&&(0,m.onNavigationIntent)(e.currentTarget,!0===_)},onTouchStart:function(e){B||"function"!=typeof R||R(e),B&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&q&&(0,m.onNavigationIntent)(e.currentTarget,!0===_)}};return(0,d.isAbsoluteUrl)(F)?H.href=F:B&&!T&&("a"!==o.type||"href"in o.props)||(H.href=(0,f.addBasePath)(F)),s=B?i.default.cloneElement(o,H):(0,a.jsx)("a",{...A,...H,children:n}),(0,a.jsx)($.Provider,{value:g,children:s})}let $=(0,i.createContext)(m.IDLE_LINK_STATUS),x=()=>(0,i.useContext)($);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=s(e,n)),t&&(o.current=s(t,n))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return w},NormalizeError:function(){return $},PageNotFoundError:function(){return x},SP:function(){return h},ST:function(){return b},WEB_VITALS:function(){return s},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return c},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&i.test(e)};function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=l();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let h="u">typeof performance,b=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class $ extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return s}});let n=e.r(18967),o=e.r(52817);function s(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return u},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return i}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function s(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function u(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return i},formatWithValidation:function(){return l},urlObjectKeys:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let s=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",i=e.hash||"",u=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(l+=":"+e.port)),u&&"object"==typeof u&&(u=String(s.urlQueryToSearchParams(u)));let c=e.search||u&&`?${u}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==l?(l="//"+(l||""),o&&"/"!==o[0]&&(o="/"+o)):l||(l=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${l}${o}${c}${i}`}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return i(e)}}]);