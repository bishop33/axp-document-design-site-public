// 공통 도식 설정: Mermaid 12.0.0 (vendor/mermaid-12.0.0.min.js).
// 차트의 chart-theme.js처럼, 모든 도식은 이 설정으로만 그린다. 모양을 바꿀 때는 개별 도식이 아니라 여기를 고친다.
// - 흑백 기본: 흰 상자 + 회색 선(#999), 화살표·연결선 #555, 대상 기업만 짙은 면(focus).
// - 선 의미: 실선은 제품·판매·업무 흐름, 점선은 현금·되돌림.
// - 배치는 앞으로 가는 흐름으로만 잡는다. 거꾸로 가는 선(대금·되돌림)은 `A <-.- B`로 써서 화살표만 뒤로 향하게 한다.
//   (B -.-> A로 쓰면 순환이 생겨 자동 배치가 뒤엉킨다.)
// - 선: 부드러운 곡선(basis). 직선(linear)은 이름표를 지나며 지그재그가, 직각(step)은 작은 꺾임이 생긴다.
// - 글자: Pretendard 12px(본문 삽입 크기), 상자 안 둘째 줄은 설명.
// - 순수 SVG 글자(htmlLabels:false)로 그려 인쇄·PDF에서 글자가 사라지지 않게 한다.
(function () {
  const font = 'Pretendard, "Apple SD Gothic Neo", Arial, sans-serif';
  const config = {
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'base',
    // Mermaid 12 기본 모양(neo)은 상자에 그림자를 넣는다. 1px 선만 쓰는 사이트 규칙에 맞춰 classic으로 둔다.
    look: 'classic',
    // Mermaid 12는 flowchart 기본 배치가 ELK라 간격 설정이 적용되지 않고 도식이 1.5~2배 넓어진다. dagre로 고정한다.
    // (swimlane 배치는 담당 구역을 세로 열로 잘 나누지만 아직 beta라 선이 틀 밖으로 도는 경우가 있어 쓰지 않는다.)
    layout: 'dagre',
    fontFamily: font,
    // 상자 크기 계산에 쓰는 글자 크기. themeVariables.fontSize만으로는 크기 계산이 16px 기준으로 남는다.
    fontSize: 12,
    themeVariables: {
      fontFamily: font,
      fontSize: '12px',
      background: '#ffffff',
      primaryColor: '#ffffff',
      primaryBorderColor: '#999999',
      primaryTextColor: '#222222',
      secondaryColor: '#f2f2f2',
      tertiaryColor: '#f2f2f2',
      lineColor: '#555555',
      textColor: '#222222',
      clusterBkg: '#eeeeee',
      clusterBorder: '#eeeeee',
      titleColor: '#555555',
      edgeLabelBackground: '#ffffff',
      nodeBorder: '#999999',
      // 2×2(quadrantChart): 사분면은 옅은 회색 두 단계, 점은 짙은 회색. 대상 기업은 원고에서 :::focus 대신 radius·color로 구분한다.
      quadrant1Fill: '#f2f2f2', quadrant2Fill: '#fafafa', quadrant3Fill: '#f2f2f2', quadrant4Fill: '#fafafa',
      quadrant1TextFill: '#777777', quadrant2TextFill: '#777777', quadrant3TextFill: '#777777', quadrant4TextFill: '#777777',
      quadrantPointFill: '#8a8a8a', quadrantPointTextFill: '#222222', quadrantXAxisTextFill: '#555555', quadrantYAxisTextFill: '#555555',
      quadrantInternalBorderStrokeFill: '#cccccc', quadrantExternalBorderStrokeFill: '#cccccc', quadrantTitleFill: '#222222',
      // 연혁(timeline): 구간 색을 모두 흰 면 + 회색으로. 첫 구간만 짙게 두지 않는다(시간 순서 외의 위계를 만들지 않는다).
      ...Object.fromEntries(Array.from({ length: 12 }, (_, i) => [[`cScale${i}`, '#f2f2f2'], [`cScaleLabel${i}`, '#222222'], [`cScaleInv${i}`, '#999999']]).flat()),
      // 일정(gantt): 작업 막대는 회색, 핵심 작업(crit)만 짙게, 오늘 선은 쓰지 않는다.
      sectionBkgColor: '#fafafa', altSectionBkgColor: '#ffffff', sectionBkgColor2: '#fafafa',
      taskBkgColor: '#c8c8c8', taskBorderColor: '#c8c8c8', taskTextColor: '#222222', taskTextLightColor: '#222222', taskTextOutsideColor: '#222222', taskTextDarkColor: '#ffffff',
      activeTaskBkgColor: '#8a8a8a', activeTaskBorderColor: '#8a8a8a', doneTaskBkgColor: '#e4e4e4', doneTaskBorderColor: '#e4e4e4',
      critBkgColor: '#303030', critBorderColor: '#303030', gridColor: '#e5e5e5', todayLineColor: 'transparent',
    },
    // Mermaid 12는 상자 최소 폭이 120px(minNodeWidth)이라 짧은 이름도 넓은 상자가 된다. 0으로 두고 글자에 맞춘다.
    // Mermaid 11부터 htmlLabels는 최상위 설정이다(flowchart 안의 값은 무시된다).
    htmlLabels: false,
    suppressErrorRendering: true,
    quadrantChart: { chartWidth: 480, chartHeight: 360, pointRadius: 5, pointTextPadding: 6, titleFontSize: 13, quadrantLabelFontSize: 12, pointLabelFontSize: 12, xAxisLabelFontSize: 12, yAxisLabelFontSize: 12, quadrantPadding: 6, xAxisPosition: 'bottom', useMaxWidth: false },
    timeline: { disableMulticolor: true, useMaxWidth: false },
    gantt: { fontSize: 12, sectionFontSize: 12, barHeight: 20, barGap: 6, topPadding: 62, leftPadding: 110, gridLineStartPadding: 40, useMaxWidth: false },
    flowchart: { htmlLabels: false, minNodeWidth: 0, curve: 'basis', nodeSpacing: 14, rankSpacing: 22, padding: 7, diagramPadding: 4, subGraphTitleMargin: { top: 4, bottom: 4 }, useMaxWidth: false, wrappingWidth: 200 },
  };
  // 도식에서 쓰는 상자 종류. 새 종류가 필요하면 여기에 더한다.
  // 선 이름표·묶음 제목은 상자 글자보다 한 단계 작게, 회색으로.
  config.themeCSS = [
    '.edgeLabel text, .edgeLabel tspan { font-size: 10.5px; fill: #555; }',
    '.cluster-label text, .cluster-label tspan { font-size: 10.5px; fill: #555; }',
    '.node text, .node tspan { font-size: 12px; }',
    // 일정(gantt): 눈금선은 옅게, 막대 안 글자는 본문색.
    '.grid .tick text { font-size: 11px; fill: #555; } .grid .tick line { stroke: #e5e5e5; } .grid path { stroke-width: 0; }',
    '.taskText, .taskTextOutsideRight, .taskTextOutsideLeft, .sectionTitle { font-size: 12px !important; fill: #222 !important; }',
  ].join('\n');
  const classes = [
    'classDef default fill:#ffffff,stroke:#999999,stroke-width:1px,color:#222222',
    'classDef focus fill:#303030,stroke:#303030,color:#ffffff',
    'classDef soft fill:#f2f2f2,stroke:#aaaaaa,color:#222222',
    'classDef note fill:transparent,stroke:transparent,color:#222222',
  ].join('\n');
  let ready = false;
  let count = 0;
  window.diagramTheme = { config, classes };
  // source: 'flowchart LR' 등 머리를 포함한 Mermaid 원고. 공통 상자 종류를 붙여 SVG 문자열을 돌려준다.
  // 거꾸로 가는 선: Mermaid는 `A <-.- B`를 읽지만 화살표를 그리지 않는다(`A <-- B`는 읽지도 못한다).
  // 양쪽 화살표(`<-.->`, `<-->`)로 바꿔 그린 뒤 뒤쪽 화살표만 지운다. 배치는 A→B 방향 그대로다.
  const REVERSE = /^(\s*)([\w-]+)\s*<-(\.-|-)(\|[^|]*\|)?\s*([\w-]+)\s*$/;
  window.renderDiagram = async function (source) {
    if (!window.mermaid) throw new Error('Mermaid를 불러오지 못했습니다.');
    if (!ready) { window.mermaid.initialize(config); ready = true; }
    const reversed = [];
    const text = source.split('\n').map((line) => {
      const m = line.match(REVERSE);
      if (!m) return line;
      reversed.push(`L_${m[2]}_${m[5]}_`);
      return `${m[1]}${m[2]} <-${m[3] === '.-' ? '.->' : '->'}${m[4] || ''} ${m[5]}`;
    }).join('\n');
    const id = 'diagram-' + ++count;
    // 상자 종류(classDef)는 flowchart에만 붙는다. 다른 도식(quadrantChart·timeline·gantt)은 themeVariables로만 색을 정한다.
    const flow = /^\s*(flowchart|graph)\b/.test(text);
    const { svg } = await window.mermaid.render(id, flow ? text + '\n' + classes : text);
    const doc = new DOMParser().parseFromString(svg, 'image/svg+xml');
    doc.querySelectorAll('path[id]').forEach((path) => {
      if (reversed.some((key) => path.id.includes('-' + key))) path.removeAttribute('marker-end');
    });
    // 묶음 제목은 왼쪽 위에 둔다. 가운데 두면 위에서 들어오는 선이 제목을 가로지른다.
    doc.querySelectorAll('g.cluster').forEach((cluster) => {
      const box = cluster.querySelector(':scope > rect');
      const label = cluster.querySelector(':scope > g.cluster-label');
      const match = label && label.getAttribute('transform')?.match(/translate\(\s*[-\d.]+\s*,\s*([-\d.]+)\s*\)/);
      if (box && match) label.setAttribute('transform', `translate(${parseFloat(box.getAttribute('x')) + 8}, ${match[1]})`);
    });
    return new XMLSerializer().serializeToString(doc.documentElement);
  };
})();
