# 그리드는 내용이 놓일 자리를 미리 정한 선입니다

판면을 열과 행으로 나누고, 칸을 합쳐 제목·본문·표·차트의 자리를 정합니다. 같은 선을 여러 쪽에서 반복하면 쪽을 넘겨도 정렬이 이어집니다.

- 상태: 검토 중
- 갱신: 2026-09-29
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grid/

<GridAnatomy />

## 그리드 유형

나누는 방향과 칸을 합치는 방식에 따라 다섯 유형으로 나눕니다. 회색 면이 내용이 들어가는 영역입니다.

- **원고형(manuscript)** 판면 하나에 글이 이어진다. 여백과 판면 비례가 지면을 정한다. 견본: 1단, 제목 띠 + 본문, 넓은 안쪽 여백, 본문 + 주석 띠. 이 가이드의 시스템: [연속 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/continuous-text.md), [재무표 중심](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/financial-table.md), [표 중심 비교](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-table-focus.md)
- **칼럼형(column)** 세로 열로 나누고 열을 묶어 본문·주석·도판 폭을 정한다. 견본: 2단, 3단, 4단, 넓은 단 + 좁은 단. 이 가이드의 시스템: [대칭 2단 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/symmetric-columns.md), [본문과 옆주석](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/text-with-notes.md), [근거와 해설 비대칭](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/asymmetric-analysis.md), [발표 대등 비교](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-paired-evidence.md), [결론과 근거 셋](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-claim-three-proofs.md), [설명과 도판](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-text-visual.md), [대안 셋 비교](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-three-options.md)
- **로우형(row)** 가로 띠를 쌓아 위에서 아래로 읽는 순서를 나눈다. 견본: 2단 띠, 3단 띠, 4단 띠, 6단 띠. 이 가이드의 시스템: 없음
- **모듈형(modular)** 열과 행이 만든 모듈을 묶어 영역마다 역할을 준다. 견본: 2×3, 4×6, 큰 모듈 + 둘, 큰 모듈 + 넷. 이 가이드의 시스템: [병합 모듈](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/modular-evidence.md), [가로 항목 대조](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/landscape-comparison.md), [절차와 검증 대응](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/process-and-evidence.md), [발표 핵심 차트](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-chart-focus.md), [지표 넷과 추이](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-kpi-dashboard.md), [단계와 일정](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-timeline.md)
- **계층형(hierarchical)** 내용의 크기와 중요도에 맞춰 영역을 직접 나눈다. 견본: 제목 강조, 좌우 비대칭, 큰 도판 + 작은 목록, 모자이크. 이 가이드의 시스템: [섹션 표지](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-section-divider.md)

한 문서 안에서도 쪽마다 유형을 바꿔 씁니다. 열 수, 여백, 행간을 같게 두면 유형이 바뀌어도 정렬선이 이어집니다.

다음: [그리드 설계 원리](/docs/layout/grid-principles/) — 판면, 한 줄 길이, 행간과 행 모듈을 정하는 순서
