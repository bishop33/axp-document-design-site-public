// 설명형 도식 4종을 공통 도식 라이브러리(Mermaid, ../../guide/diagram-theme.js)로 그린다.
// 한 원고에서 두 방향을 만든다: 넓은 화면·인쇄는 A4 본문 삽입용 가로 배치, 좁은 화면은 세로 배치.
// 선 의미는 모든 도식이 같다: 실선은 제품·판매·업무 흐름, 점선은 현금·되돌림.
// 거꾸로 가는 선은 `A <-.- B`로 쓴다(diagram-theme.js 참고).
{
const box = (title, sub) => `"\`**${title}**${sub ? `\n${sub}` : ''}\`"`;

// narrow: 좁은 화면용 세로 배치. 같은 주체·관계를 유지하고 배치 방향과 묶음만 바꾼다.
const sources = {
  // 좁은 화면에서는 위아래 선이 묶음 제목을 가로질러 제목을 뺀다(캡션이 회색 영역의 뜻을 설명한다).
  business: (narrow) => `flowchart ${narrow ? 'TB' : 'LR'}
  maker[${box('위탁 제조사', '제품 생산 · 납품')}]
  subgraph company["${narrow ? ' ' : '기업의 직접 수행 범위'}"]
    direction TB
    brand[${box('가상 화장품 브랜드', '기획 · 발주 · 판매')}]:::focus
    revenue[${box('매출원: 제품 판매대금', '생산은 외부에 위탁합니다.')}]:::note
  end
  own[${box('자사몰', '소비자 직접 판매')}]
  dist[${box('유통사', '매입 후 재판매')}]
  maker -->|납품| brand
  maker <-.-|대금| brand
  brand -->|판매| own
  brand <-.-|결제| own
  brand -->|납품| dist
  brand <-.-|정산| dist`,

  industry: (narrow) => `flowchart ${narrow ? 'TB' : 'LR'}
  subgraph s1["01 공급"]
    raw[${box('원료 공급사', '성분 원료')}]
    pack[${box('용기·포장사', '용기 · 단상자')}]
  end
  subgraph s2["02 제조"]
    make[${box('ODM 개발 + 생산', '또는\nOEM 위탁 생산')}]:::soft
  end
  subgraph s3["03 브랜드 · 대상 기업"]
    brand[${box('가상 브랜드', '기획 · 판매')}]:::focus
  end
  subgraph s4["04 판매 채널"]
    own[${box('자사몰', '직접 판매')}]
    dist[${box('유통사', '매입 후 판매')}]
  end
  subgraph s5["05 소비"]
    user[${box('소비자', '구매 · 사용')}]
  end
  raw -->|투입| make
  pack --> make
  make -->|제품| brand
  brand -->|판매| own
  brand --> dist
  own -->|전달| user
  dist --> user`,

  process: (narrow) => `flowchart ${narrow ? 'TB' : 'LR'}
  p1[${box('01 원료 배합', '배합 탱크\n원료를 혼합해\n내용물을 만듭니다.')}]
  p2[${box('02 내용물 확인', '시료·시험\n내용물의 품질을\n확인합니다.')}]
  p3[${box('03 충전·포장', '충전 설비\n용기에 담고\n포장합니다.')}]
  p4[${box('04 출하 검사', '검사 기록\n검사를 마친 제품의\n출하를 승인합니다.')}]
  p1 --> p2 --> p3 --> p4`,

  // 담당 구역(swimlane) 묶음은 dagre 배치에서 단계 순서가 뒤섞여, 담당을 각 단계 둘째 줄에 적는다.
  flow: () => `flowchart TB
  order[${box('주문 접수', '영업')}]
  stock[${box('재고 확인', '물류')}]
  decide{${box('출고 가능', '재고입니까?')}}
  negotiate[${box('고객과 일정 협의', '영업')}]
  confirm[${box('입고 일정 확정', '영업')}]
  check[${box('출하 품질 확인', '품질 담당')}]
  ship[${box('승인 제품 출고', '품질 담당')}]
  deliver[${box('고객 인도', '품질 담당')}]:::focus
  order --> stock --> decide
  decide -->|아니요| negotiate --> confirm
  stock <-.-|입고 후| confirm
  decide -->|예| check -->|적합| ship --> deliver`,
};

// 도식 아래 보조 정보(범례, 지원 서비스 층)는 도식이 아니라 문장 요소라 HTML로 둔다.
const legend = '<p class="diagram-legend"><span class="solid">제품·판매</span><span class="dashed">현금</span></p>';
const extras = {
  business: legend,
  industry: '<p class="diagram-band"><strong>지원 서비스</strong><span>시험·분석</span><span>패키지 디자인</span><span>물류·보관</span></p>',
  flow: '<p class="diagram-legend"><span class="solid">업무 흐름</span><span class="dashed">되돌림</span></p>',
};

(async () => {
  for (const [id, source] of Object.entries(sources)) {
    const el = document.getElementById(id);
    const figure = el && el.querySelector('.diagram');
    if (!figure) continue;
    try {
      const [wide, narrow] = [await window.renderDiagram(source(false)), await window.renderDiagram(source(true))];
      figure.innerHTML = wide + narrow + (extras[id] || '');
      const [d, m] = figure.querySelectorAll(':scope > svg');
      d.classList.add('d');
      m.classList.add('m');
      const title = el.querySelector('h2').textContent;
      d.setAttribute('aria-label', title);
      m.setAttribute('aria-label', title + ' (세로 배치)');
    } catch (error) {
      figure.insertAdjacentHTML('beforeend', `<p class="diagram-error">도식을 그리지 못했습니다. ${String(error.message || error)}</p>`);
    }
  }
  document.documentElement.dataset.diagrams = 'ready';
})();
}
