# 표·차트·도식은 공통 라이브러리로 그립니다

차트는 ECharts, 표는 공통 표 규칙, 도식은 Mermaid로 만듭니다.

- 상태: 작성 중
- 갱신: 2026-09-30
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/visuals/libraries/

표·차트·도식은 아래 공통 라이브러리와 공통 설정으로 만듭니다. 사용자가 특정 표현을 따로 요청하지 않았다면 직접 그리지 않습니다. 문서마다 모양과 품질이 달라지지 않게 하기 위해서입니다.

| 대상 | 라이브러리 | 쓰는 방식 | 상태 |
|---|---|---|---|
| 차트 | [Apache ECharts 5.6.0](https://echarts.apache.org/) | SVG 렌더러와 공통 테마(guide/chart-theme.js). 흑백 기본, 강조색은 비교가 필요할 때만. 차트 갤러리 33종과 기본 가이드 예시가 모두 이 설정을 씁니다. 표현 비교 견본도 같은 5.6.0을 씁니다. | 사용 중 |
| 표 | [shadcn/ui Table](https://ui.shadcn.com/docs/components/table) | 사이트 화면의 표 구조. 문서 지면의 표는 라이브러리가 아니라 공통 표 규칙(1px 중성색 선, 머리 행 면색, 숫자 오른쪽 정렬·tabular 숫자)으로 조판합니다. | 사용 중 |
| 도식 | [Mermaid 12.0.0](https://mermaid.js.org/) | 흐름도(flowchart)와 dagre 자동 배치, 공통 설정(guide/diagram-theme.js). 흑백·1px 선, 대상 기업만 짙은 면, 실선은 흐름·점선은 현금·되돌림. 한 원고에서 넓은 화면·인쇄용 가로 배치와 좁은 화면용 세로 배치를 함께 만듭니다. 자동 배치라 손으로 그린 도식보다 위치 조정 폭이 좁습니다. 공정 설명의 설비 그림은 빠졌고, 판단 흐름의 담당 구역은 단계별 담당 표기로 바꿨습니다. | 사용 중 |

예시는 모두 가상 데이터입니다.
