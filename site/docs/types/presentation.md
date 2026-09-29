# 발표 자료는 한 화면에 결론 하나를 보여줍니다

듣는 사람은 되돌아가 읽을 수 없습니다. 화면마다 결론 문장을 제목으로 두고, 그 결론을 증명하는 표현 하나를 크게 보여줍니다.

- 상태: 검토 중
- 갱신: 2026-09-29
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/types/presentation/

1. 표지 — 페이지 패턴 [kp-slide-cover-split](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-slide-cover-split)
2. 목차 — 페이지 패턴 [kp-slide-contents](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-slide-contents)
3. 섹션 표지 — 그리드 [slide-section-divider](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-section-divider.md)
4. 핵심 숫자 — 페이지 패턴 [kp-slide-kpi-number](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-slide-kpi-number)
5. 결론과 근거 셋 — 그리드 [slide-claim-three-proofs](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-claim-three-proofs.md)
6. 핵심 지표 — 그리드 [slide-kpi-dashboard](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-kpi-dashboard.md)
7. 핵심 차트 — 그리드 [slide-chart-focus](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-chart-focus.md)
8. 대등 비교 — 페이지 패턴 [kp-slide-paired-tables](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-slide-paired-tables)
9. 표 비교 — 그리드 [slide-table-focus](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-table-focus.md)
10. 대안 비교 — 그리드 [slide-three-options](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-three-options.md)
11. 일정 — 그리드 [slide-timeline](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-timeline.md)
12. 고객 증언 — 페이지 패턴 [kp-slide-quote-image](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-slide-quote-image)
13. 마무리 진술 — 페이지 패턴 [kp-slide-statement](https://bishop33.github.io/axp-document-design-site-public/docs/layout/page-patterns/#kp-slide-statement)

## 화면마다 쓰는 곳

| 화면 | 쓰는 곳 | 표현 |
|---|---|---|
| 섹션 표지 | 이야기의 장이 바뀔 때 | 섹션 번호, 답할 질문 |
| 결론과 근거 셋 | 주장을 세 수치로 증명할 때 | 큰 숫자 세 개 |
| 핵심 지표 | 현황을 한 번에 보여줄 때 | [KPI + 작은 추세](/docs/charts/sparkline/) |
| 핵심 차트 | 변화·차이 하나를 강조할 때 | [세로 막대](/docs/charts/column/), [강조 선](/docs/charts/multi-line/), [와플](/docs/charts/waffle/) |
| 대등 비교 | 두 대상을 나란히 볼 때 | [덤벨](/docs/charts/dumbbell/), [기울기](/docs/charts/slope/) |
| 표 비교 | 조건을 항목별로 대조할 때 | [항목 비교표](/docs/charts/table-matrix/) |
| 대안 비교 | 하나를 고르게 할 때 | 대안 세 열 + 권고 |
| 일정 | 단계와 시점을 약속할 때 | [추진 일정](/docs/data/diagrams/#roadmap), [연혁](/docs/data/diagrams/#history) |
| 설명과 도판 | 구조나 화면을 설명할 때 | [사업 구조도](/docs/data/diagrams/#business-model), [시스템 구성도](/docs/data/diagrams/#system-architecture) |

## 지킬 것

- 제목은 주제가 아니라 결론 문장입니다(“매출 추이” 대신 “매출이 5년 동안 두 배로 늘었습니다”).
- 제목만 이어 읽으면 발표 전체가 요약되어야 합니다.
- 본문은 24pt에서 시작하고, 뒤쪽에서 읽히지 않으면 내용을 나눕니다.
- 자세한 표와 출처는 배포용 부록으로 뺍니다.
