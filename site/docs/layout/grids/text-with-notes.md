# 본문과 옆주석

주된 본문과 해당 문단의 용어·근거·예외를 구분하면서 가까이 연결하는 시스템입니다.

- 구조: 본문과 보조 정보 · 인쇄용 · 세로
- 용도: 현황 파악, 성과 보고, 구축 검수
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/text-with-notes/

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
- 용어·근거: 1열부터 2열 × 2행부터 2행
- 예외·주석: 1열부터 2열 × 5행부터 2행
- 연속 본문: 3열부터 4열 × 2행부터 5행
- 근거 표: 1열부터 6열 × 7행부터 2행
- 표 주석: 1열부터 6열 × 9행부터 1행

## 구성 원리

- 바탕 열 0~1은 주석, 2~5는 본문으로 병합하고 페이지 사이에도 역할을 유지합니다.
- 옆주석의 시작 높이는 관련 문단과 대응시키며 빈 주석 영역을 억지로 채우지 않습니다.
- 전폭 표가 필요한 부분만 여섯 열을 병합하고 표 주석은 표 바로 아래에서 읽게 합니다.

## 적합한 내용

본문을 중단하지 않고 정의·근거 번호·예외 조건을 참조할 필요가 있을 때 사용합니다.

## 다른 구조가 필요한 때

보조 정보가 본문만큼 길거나 독립적인 결론이면 옆주석에 축소하지 않습니다.

## 적용 예시

- 기업현황 (현황 파악, 3쪽): https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/single--text-with-notes/
- 사업보고서 분석 발췌 (성과 보고, 2쪽): https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/side-note/

## 관찰 근거와 자체 설정

원문확인: 공개 HTML의 보조 그리드 설명. 기존 그룹의 이미지 관찰 기록은 재독했으며 이번 신규 이미지 관찰과 구분합니다. 치수·regions는 자체 대표배치 제안입니다.

- [Kelman Single Column 공개 설명](https://stephenkelman.co.uk/a4-single-column-report-grid-system-for-indesign): optional margins/captions 명시. 기존 group01-12-and22의 상품22 슬롯4·6·8에 본문과 옆주석 관찰 기록이 있습니다.
