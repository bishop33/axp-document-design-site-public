# 기술 제안서 · 가로 항목 대조

데이터 3종 연동과 심사 API를 고정 범위로 계약하고 성능·보안 기준으로 검수합니다.

- 매체: 인쇄용 · 가로 · 2쪽
- 그리드: 가로 항목 대조 (https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/landscape-comparison/)
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/modules--landscape-comparison/

## 이 문서의 독자와 목적

- 독자: 새봄은행 IT 구매위원회와 기업심사 실무 책임자
- 판단할 일: 15주·3억 원 구축 범위와 검수 조건 승인
- 핵심 메시지: 데이터 3종 연동과 심사 API를 고정 범위로 계약하고 성능·보안 기준으로 검수합니다.

## 페이지별 질문과 근거

1. **예산과 기간 안에 어떤 업무를 어디까지 구현합니까?** 기업 기본정보·재무·거래 데이터 3종을 연동하며 PDF 추출과 상시 운영은 제외합니다. (표·차트: 작업별 투입비 비교로 총 3억 원의 배분을 확인합니다. 일정과 비용은 별도로 제시합니다.) — 지면: https://bishop33.github.io/axp-document-design-site-public/guide/examples/modules--landscape-comparison.svg
2. **납품물이 업무·성능·보안 요구사항을 충족했는지 어떻게 판정합니까?** 정확성 99.5%, P95 2초 이하, 권한 위반 0건을 고정 시험 조건에서 확인합니다. (표·차트: 조회 API의 목표와 사전 PoC P95를 비교해 병목과 여유를 드러냅니다.) — 지면: https://bishop33.github.io/axp-document-design-site-public/guide/examples/modules-requirements--landscape-comparison.svg

## 배치에 적용한 기준

- 대표 내지에서 공통 속성별 대상 값을 대응시킵니다.
- 도입·조건 조회 표는 비교 대상과 구별해 원래 의미를 유지합니다.
- 가로 판형 변경을 포함한 적용안이며 순수 열 수 비교가 아닙니다.

## 판형과 조판 사양

| 항목 | 값 |
|---|---|
| 판형 | 인쇄 가로 |
| 크기 | 841.89 × 595.28pt |
| 본문 | 8.5pt / 12pt |
| 표 | 8.1~8.5pt |
| 차트 | 흑백 / 8pt |
| 그리드 | 8열 × 6행 / 거터 12pt |

## 적용 조건

15주·3억 원 구축 범위와 검수 조건 승인

가상 수치를 실제 판단에 사용하지 않습니다. 판형 변경 효과와 배치 효과를 구분합니다.

회사·수치·전망은 자체 가상 원장입니다. 참고 출처의 실적을 사용하지 않았습니다. 고객별 기술제안서 직접 원문은 미확보입니다. 가로 지면에서 항목 대조. 실제 병합은 페이지별로 다릅니다.
