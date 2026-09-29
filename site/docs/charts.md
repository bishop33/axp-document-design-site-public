# 데이터의 표현을 보고, 내 문서에 맞게 선택합니다

정확한 값을 찾는 표부터 차이·변화·관계를 보여주는 차트까지. 예시를 선택하면 사용 목적과 배치 기준을 자세히 볼 수 있습니다.

- 상태: 승인
- 갱신: 2026-09-22
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/charts/

**표**

- [수치 조회표](https://bishop33.github.io/axp-document-design-site-public/docs/charts/table-values.md): 각 항목의 정확한 값은 얼마인가요?
- [그룹·소계표](https://bishop33.github.io/axp-document-design-site-public/docs/charts/table-groups.md): 항목별 금액과 그룹별 합계는 얼마인가요?
- [항목 비교표](https://bishop33.github.io/axp-document-design-site-public/docs/charts/table-matrix.md): 두 서비스의 제공 조건은 어떻게 다른가요?

**크기 비교**

- [가로 막대](https://bishop33.github.io/axp-document-design-site-public/docs/charts/bar.md): 어느 제품의 매출이 가장 큰가요?
- [묶은 막대](https://bishop33.github.io/axp-document-design-site-public/docs/charts/grouped-bar.md): 제품별로 두 해의 매출이 얼마나 다른가요?

**시간과 변화**

- [선](https://bishop33.github.io/axp-document-design-site-public/docs/charts/line.md): 응답시간이 분기마다 어떻게 달라졌나요?
- [누적 영역](https://bishop33.github.io/axp-document-design-site-public/docs/charts/stacked-area.md): 전체 문의량과 채널별 구성이 어떻게 변했나요?

**구성비**

- [파이](https://bishop33.github.io/axp-document-design-site-public/docs/charts/pie.md): 전체 문의 중 각 유형은 얼마나 차지하나요?
- [100% 누적 막대](https://bishop33.github.io/axp-document-design-site-public/docs/charts/stacked-percent.md): 채널마다 해결 상태의 비중이 어떻게 다른가요?

**관계와 분포**

- [산점도](https://bishop33.github.io/axp-document-design-site-public/docs/charts/scatter.md): 광고비와 문의 건수는 어떤 관계인가요?
- [히트맵](https://bishop33.github.io/axp-document-design-site-public/docs/charts/heatmap.md): 어느 요일과 시간대에 문의가 몰리나요?

**증감 요인**

- [워터폴](https://bishop33.github.io/axp-document-design-site-public/docs/charts/waterfall.md): 시작 금액에서 최종 금액까지 무엇이 달라졌나요?

## 표·차트·도식에 쓰는 라이브러리

표·차트·도식은 아래 공통 라이브러리와 공통 설정으로 만듭니다. 사용자가 특정 표현을 따로 요청하지 않았다면 직접 그리지 않습니다. 문서마다 모양과 품질이 달라지지 않게 하기 위해서입니다.

| 대상 | 라이브러리 | 쓰는 방식 | 상태 |
|---|---|---|---|
| 차트 | [Apache ECharts 5.6.0](https://echarts.apache.org/) | SVG 렌더러와 공통 테마(guide/chart-theme.js). 흑백 기본, 강조색은 비교가 필요할 때만. 차트 갤러리 12종과 기본 가이드 예시가 모두 이 설정을 씁니다. 정보 표현 견본집도 같은 5.6.0을 씁니다. | 사용 중 |
| 표 | [shadcn/ui Table](https://ui.shadcn.com/docs/components/table) | 사이트 화면의 표 구조. 문서 지면의 표는 라이브러리가 아니라 공통 표 규칙(1px 중성색 선, 머리 행 면색, 숫자 오른쪽 정렬·tabular 숫자)으로 조판합니다. | 사용 중 |
| 도식 | [Mermaid 12.0.0](https://mermaid.js.org/) | 흐름도(flowchart)와 dagre 자동 배치, 공통 설정(guide/diagram-theme.js). 흑백·1px 선, 대상 기업만 짙은 면, 실선은 흐름·점선은 현금·되돌림. 한 원고에서 넓은 화면·인쇄용 가로 배치와 좁은 화면용 세로 배치를 함께 만듭니다. 자동 배치라 손으로 그린 도식보다 위치 조정 폭이 좁습니다. 공정 설명의 설비 그림은 빠졌고, 판단 흐름의 담당 구역은 단계별 담당 표기로 바꿨습니다. | 사용 중 |

## 문서 작업에서 만든 사례도 함께 기록합니다

현재는 표현 방식을 설명하는 가상 데이터 예시입니다. 실제 문서 사례를 추가할 때는 문서의 목적, 선택한 이유, 데이터 출처와 공개 가능 범위를 함께 기록합니다.
