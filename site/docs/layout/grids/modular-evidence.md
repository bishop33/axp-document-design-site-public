# 병합 모듈

서로 다른 크기의 본문·도표·보충자료를 행과 열의 병합으로 결합하는 시스템입니다.

- 구조: 모듈 조합 · 인쇄용 · 세로
- 용도: 현황 파악, 성과 보고, 구축 검수
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/modular-evidence/

## 치수

| 항목 | 값 |
|---|---|
| 판형 | 595.28 × 841.89pt |
| 바탕 그리드 | 6열 × 9행 |
| 거터 | 12pt |
| 좌우 여백 | 46pt |
| 본문 영역 | 위 44pt, 높이 752pt |

## 대표 배치

- 제목·요약: 1열부터 6열 × 1행부터 1행
- 주요 근거: 1열부터 4열 × 2행부터 4행
- 지표: 5열부터 2열 × 2행부터 2행
- 조건: 5열부터 2열 × 4행부터 2행
- 보조 자료 A: 1열부터 3열 × 6행부터 3행
- 보조 자료 B: 4열부터 3열 × 6행부터 3행
- 출처·주석: 1열부터 6열 × 9행부터 1행

## 구성 원리

- 상단 요약은 전폭, 중심 근거는 4열×4행, 보충 정보는 2열×2행씩 병합합니다.
- 하단은 서로 대등한 두 근거를 3열씩 배치하는 등 정보 관계에 맞춰 병합을 바꿉니다.
- 페이지별 병합은 바꿀 수 있지만 같은 문서의 바깥 정렬선·행 pitch·거터는 유지합니다.

## 적합한 내용

독립된 정보 묶음의 분량이 다르며 주자료와 보조자료의 크기를 달리해야 할 때 사용합니다.

## 다른 구조가 필요한 때

한 줄기 장문을 모듈마다 끊거나 모든 칸을 같은 크기의 카드로 채우는 용도로 쓰지 않습니다.

## 적용 예시

- 기술 제안서 (구축 검수, 2쪽): https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/modules/

## 관찰 근거와 자체 설정

원문확인: 두 Kelman 공개 HTML. 자체구성: 6열×9행은 원본 36-field의 재현이 아니며 모든 치수·regions는 대표배치 제안입니다.

- [Kelman Swiss 공개 설명](https://stephenkelman.co.uk/a4-swiss-grid-system-for-indesign): 36-field와 10 sample layouts 명시. 현재 54개 바탕 셀과 병합은 자체 구성입니다.
- [Kelman Annual Report 공개 설명](https://stephenkelman.co.uk/a4-annual-report-grid-system-for-indesign): 서술·재무표·차트·사진을 같은 구조에서 다룬다는 원문 설명을 확인했습니다.
