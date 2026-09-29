# 투자검토 IM은 “왜 지금 이 조건으로 투자하는가”를 설득합니다

투자 포인트를 먼저 말하고 시장·사업·재무·가치·위험 근거로 뒷받침합니다. 결정권자가 요약 두 쪽만 읽어도 판단할 수 있게 구성합니다.

- 상태: 검토 중
- 갱신: 2026-09-29
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/types/investment-memo/

1. 표지 — 페이지 패턴 [kp-cover-dark-type](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-cover-dark-type)
2. 투자 요지와 목차 — 페이지 패턴 [kp-section-statement-contents](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-section-statement-contents)
3. 투자 요약 — 페이지 패턴 [kp-kpi-blocks](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-kpi-blocks)
4. 투자 포인트 — 그리드 [text-with-notes](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/text-with-notes.md)
5. 시장 기회 — 페이지 패턴 [kp-chart-commentary](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-chart-commentary)
6. 사업 모델 — 그리드 [asymmetric-analysis](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/asymmetric-analysis.md)
7. 경쟁 비교 — 그리드 [landscape-comparison](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/landscape-comparison.md)
8. 재무 실적 — 페이지 패턴 [kp-financial-table](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-financial-table)
9. 재무 전망 — 그리드 [modular-evidence](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/modular-evidence.md)
10. 가치 평가 — 그리드 [financial-table](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/financial-table.md)
11. 투자 구조 — 그리드 [text-with-notes](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/text-with-notes.md)
12. 위험과 완화 — 그리드 [symmetric-columns](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/symmetric-columns.md)
13. 마감 — 페이지 패턴 [kp-closing-dark](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-closing-dark)

## 쪽마다 답할 질문과 표현

| 쪽 | 답할 질문 | 표현 |
|---|---|---|
| 투자 요약 | 얼마를, 어떤 조건으로, 왜? | 거래 조건 표, 투자 포인트 세 개 |
| 투자 포인트 | 이 회사가 이길 이유는? | 포인트마다 수치 하나 + 근거 두 줄 |
| 시장 기회 | 시장은 얼마나 크고 빨리 크나? | [시장 범위](/docs/data/diagrams/#market-sizing), [실적과 전망](/docs/charts/forecast/) |
| 사업 모델 | 돈은 어떻게 벌리나? | [사업 구조도](/docs/data/diagrams/#business-model), [플랫폼 생태계](/docs/data/diagrams/#ecosystem) |
| 경쟁 비교 | 경쟁사보다 무엇이 낫나? | [항목 비교표](/docs/charts/table-matrix/), [기울기](/docs/charts/slope/) |
| 재무 실적 | 지금까지의 성장과 수익성은? | [재무 요약표](/docs/charts/table-financial/), [세로 막대](/docs/charts/column/) |
| 재무 전망 | 전망의 근거와 가정은? | [막대 + 선](/docs/charts/combo/), 가정 표 |
| 가치 평가 | 가격은 합리적인가? | 유사 기업 배수 표, [양방향 막대](/docs/charts/diverging/)(민감도) |
| 투자 구조 | 돈은 어디로 가고 지분은 어떻게 되나? | [투자 구조도](/docs/data/diagrams/#deal-structure), 거래 전후 지분표 |
| 위험과 완화 | 무엇이 틀어지고 어떻게 막나? | 위험 표, [이슈 트리](/docs/data/diagrams/#issue-tree) |

## 지킬 것

- 투자 포인트는 세 개 이하로, 뒤쪽의 근거 쪽과 번호로 연결합니다.
- 전망은 실적과 구분(점선, E 표시)하고 가정을 같은 쪽에 적습니다.
- 가치 평가는 한 가지 숫자보다 범위와 민감도로 보여줍니다.
- 위험을 숨기지 않습니다. 위험마다 확인 방법과 완화 조건을 적습니다.
