# 재무표 중심

행 항목과 다기간 수치를 전폭 표로 조회하고 정의·예외를 이어 읽는 시스템입니다.

- 구조: 조회와 검증 · 인쇄용 · 세로
- 용도: 현황 파악, 투자 검토, 성과 보고
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/financial-table/

## 치수

| 항목 | 값 |
|---|---|
| 판형 | 595.28 × 841.89pt |
| 바탕 그리드 | 6열 × 9행 |
| 거터 | 10pt |
| 좌우 여백 | 38pt |
| 본문 영역 | 위 44pt, 높이 752pt |

## 대표 배치

- 제목·기간·단위: 1열부터 6열 × 1행부터 1행
- 재무표·소계·합계: 1열부터 6열 × 2행부터 6행
- 정의·재분류·주석: 1열부터 6열 × 8행부터 2행

## 구성 원리

- 제목 아래의 대부분을 전폭 표에 할당하고 표의 행은 데이터 행에 맞춰 연속 배치합니다.
- 그리드의 여섯 바탕 열은 표의 여섯 데이터 열을 강제하지 않습니다. 항목 열·수치 열 폭은 실제 값으로 정합니다.
- 여러 쪽에 이어지는 표는 헤더·단위·계속 표시를 반복하고 소계와 관련 행을 함께 유지합니다.
- 표 하단의 정의·주석은 표와 같은 정렬선을 사용하며 장문 서술의 주흐름과 구별합니다.

## 적합한 내용

여러 기간의 정확한 금액·합계·정의를 대조해야 할 때 사용합니다.

## 다른 구조가 필요한 때

표의 폭을 맞추려고 숫자·주석을 무리하게 축소하지 않으며 필요한 경우 가로 판형이나 별도 표로 나눕니다.

## 적용 예시

- 투자검토 IM (투자 검토, 3쪽): https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/columns--financial-table/
- 사업보고서 분석 발췌 (성과 보고, 2쪽): https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/side-note--financial-table/

## 관찰 근거와 자체 설정

원문확인: Kelman HTML 및 NAVER PDF 선택 재무표. 자체구성: 표 중심 세로 지면, 모든 치수·regions는 대표배치 제안입니다.

- [Kelman Annual Report 공개 설명](https://stephenkelman.co.uk/a4-annual-report-grid-system-for-indesign): financial table styles와 넓은 type area의 이유를 공개 본문에서 확인했습니다.
- [NAVER 2024 Integrated Report](https://www.navercorp.com/static/NAVER_Integrated_Report_2024_KOR.pdf): PDF195·196·198의 연결재무표와 단위·항목 관계를 참고합니다. 통합보고서이며 국내 법정 사업보고서 원문과 구별합니다.
