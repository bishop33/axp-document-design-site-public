# 설계 원리로 만든 그리드를 지면 역할별로 모았습니다

그리드 시스템 17종과 페이지 패턴 54종을 쪽의 역할에 맞춰 다섯 묶음으로 나눴습니다. 먼저 내용에 맞는 그리드를 고르고, 탭에서 묶음별로 봅니다.

- 상태: 검토 중
- 갱신: 2026-10-01
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/

## 내용에 맞는 그리드

| 내용 | 먼저 쓸 그리드 | 대안 | 쓰지 않을 그리드 |
|---|---|---|---|
| 서술(논증·설명) | [1단 본문 + 여백 주석](/docs/layout/grids/kp-text-single-notes/), [2단 보고서 본문](/docs/layout/grids/kp-text-two-column/) | [큰 제목 + 다단 본문](/docs/layout/grids/kp-text-title-multicolumn/) | 검은 지면의 긴 본문 |
| 수치 요약 | [큰 숫자 KPI](/docs/layout/grids/kp-slide-kpi-number/)(지표 1개), [수치 블록 + 해설](/docs/layout/grids/kp-kpi-blocks/)(3–4개) | [핵심 진술 + 목차면](/docs/layout/grids/kp-section-statement-contents/) | 이미지 모자이크 |
| 시계열·구성비 | [차트 + 해설](/docs/layout/grids/kp-chart-commentary/) | [수치·재무표 쪽](/docs/layout/grids/kp-financial-table/) | 항목 많은 도넛 |
| 비교 | [대칭 표 비교](/docs/layout/grids/kp-slide-paired-tables/) | [수치·재무표 쪽](/docs/layout/grids/kp-financial-table/) | 인용 + 이미지 |
| 절차·사례 | [본문 + 캡션 이미지 열](/docs/layout/grids/kp-text-caption-row/), [상단 이미지 + 2단 본문](/docs/layout/grids/kp-image-top-text/) | [이미지 격자 + 진술](/docs/layout/grids/kp-image-grid-statement/) | 분석 없는 카드 나열 |
| 조직·사람 | [인물 카드](/docs/layout/grids/kp-profile-cards/) | [큰 제목 + 다단 본문](/docs/layout/grids/kp-text-title-multicolumn/) | 명암 분할 |
| 인용·증언 | [본문 속 큰 인용](/docs/layout/grids/kp-pullquote-inline/), [인용 + 이미지](/docs/layout/grids/kp-slide-quote-image/) | [검은 면 전면 인용](/docs/layout/grids/kp-pullquote-dark/)(문서당 1–2회) | 수치 블록 |
| 목차·탐색 | [번호 목록형 목차](/docs/layout/grids/kp-contents-numbered/), [검은 면 + 목차](/docs/layout/grids/kp-contents-dark-split/) | [핵심 진술 + 목차면](/docs/layout/grids/kp-section-statement-contents/) | 이미지 섹션면 안의 목차 |

## 이어 붙일 때 지킬 것

- 강조 쪽(검은 면 인용, 큰 숫자, 짧은 진술, 이미지 섹션면)을 연달아 두지 않습니다. 사이에 본문이나 표 쪽을 둡니다.
- 섹션면은 한 문서에서 한 종류만 씁니다. 띠 높이와 번호 위치를 고정해야 탐색 표지가 됩니다.
- 수치는 큰 숫자 → 수치 블록 → 차트 → 표 순서로 자세해집니다. 요약 쪽에 큰 표를, 부록에 큰 숫자를 두지 않습니다.
- 이미지가 적은 보고서는 이미지 대신 여백·번호·검은 면으로 강약을 만듭니다.
- 검은 지면은 표지·섹션면·마감면에만 쓰고, 본문과 표는 흰 지면에 둡니다.

> **출처와 범위** 그리드 가운데 30종은 Stephen Kelman의 공개 그리드 상품 68종의 견본 설명(이미지 대체 텍스트)을 분석해 다시 그린 것입니다. 원본 치수·필드 수·여백 값과 빨간 강조의 스위스 양식은 가져오지 않았습니다.
