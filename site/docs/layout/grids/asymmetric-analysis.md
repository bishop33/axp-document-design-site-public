# 근거와 해설 비대칭

넓은 근거 영역과 짧은 해석 영역을 대응시켜 수치와 판단을 함께 읽는 시스템입니다.

- 구조: 근거와 해설 · 인쇄용 · 세로
- 용도: 현황 파악, 투자 검토, 대안 비교
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/asymmetric-analysis/

## 치수

| 항목 | 값 |
|---|---|
| 판형 | 595.28 × 841.89pt |
| 바탕 그리드 | 6열 × 9행 |
| 거터 | 12pt |
| 좌우 여백 | 46pt |
| 본문 영역 | 위 44pt, 높이 752pt |

## 대표 배치

- 제목·주장: 1열부터 6열 × 1행부터 1행
- 주요 차트: 1열부터 4열 × 2행부터 4행
- 해석·예외: 5열부터 2열 × 2행부터 4행
- 근거 표: 1열부터 4열 × 6행부터 3행
- 판단 조건: 5열부터 2열 × 6행부터 3행
- 자료·주석: 1열부터 6열 × 9행부터 1행

## 구성 원리

- 열 0~3을 근거 자료, 4~5를 해설로 병합하며 좌우를 독립된 본문 흐름으로 만들지 않습니다.
- 위아래 근거 묶음마다 해설의 시작 높이를 맞추고 해당 자료의 기간·출처를 유지합니다.
- 본문과 옆주석 시스템과 달리 넓은 영역의 주역은 도표이며 좁은 영역에는 판단 문장을 둡니다.

## 적합한 내용

차트·표가 핵심 근거이며 결론과 예외를 같은 위치에서 확인해야 할 때 사용합니다.

## 다른 구조가 필요한 때

오른쪽 해설이 장문이거나 차트의 축·라벨이 네 열 폭에 들어가지 않으면 전폭 자료로 전환합니다.

## 적용 예시

- 기업현황 (현황 파악, 3쪽): https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/single--asymmetric-analysis/

## 관찰 근거와 자체 설정

원문확인: NAVER PDF의 내용 관계 및 Kelman HTML. 자체구성: A4에서 4+2 역할 분담, 치수·regions는 대표배치 제안입니다.

- [NAVER 4Q24 Earnings Results](https://www.navercorp.com/api/article/download/8c766af7-6185-4eb1-aab6-373f659d0948): PDF4–7의 사업별 차트와 설명 관계를 참고합니다. 원본 숨은 열 수를 측정한 것은 아니며 A4 세로 적용은 자체 제안입니다.
- [Kelman Swiss 공개 설명](https://stephenkelman.co.uk/a4-swiss-grid-system-for-indesign): 36-field와 여러 sample layouts 확인. 비대칭 분석 전용 제품이라는 뜻이 아닙니다.
