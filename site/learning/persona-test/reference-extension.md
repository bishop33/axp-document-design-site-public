# NBIM 2025 추가 내지 관찰

2026-09-22. 리서처가 기존 로컬 원본에서 콘텐츠 지면 2쪽을 추가 추출했다. 신규 문서 0종, 추가 미리보기 2쪽이다. 기존 15·16쪽과 중복되지 않는다. catalog·TEAM.md·STATE.md는 수정하지 않았으며 이 기록을 총괄 인계 자료로 남긴다. Bishop 검토 대기다.

## 원본과 검증

- 문서: Government Pension Fund Global Annual Report 2025, Norges Bank Investment Management, 영어, 투자기관 연차보고서. 투자 성과와 운용 판단을 정독하는 독자 대상.
- 실제 읽고 렌더한 원본: `/Users/bishop/Documents/AXP/axp-document-design-site/public/references/documents/nbim-annual-2025.pdf`.
- SHA-256: `7046f4f631f03051c7c9ab13686a4b8f96791c69a03f4c925e77536c448deba4`.
- 기존 보관 원본 `/Users/bishop/Documents/AXP/deepsearch-report-library/research/document-design-references/files/01_nbim_annual_report_2025.pdf`와 hash가 동일하다. `pdfinfo`로 139쪽·A4 및 문서 제목을 확인했다.
- 공식 출처 URL은 기존 `2026-09-22-document-previews/documents.json`의 `https://www.nbim.no/en/news-and-insights/reports/2025/annual-report-2025/` 기록과 대조했다. 이번 실시간 접속·다운로드는 없으며 네트워크 재시도·우회·dependency 설치도 없다.
- 기존 설치된 `pdftotext`로 페이지 내용을 확인한 뒤 `pdftoppm -f N -l N -singlefile -scale-to-x 1600 -scale-to-y -1 -png`로 추출했다. 두 최종 PNG를 직접 열어 관찰했으며 `sips`로 모두 1600x2263임을 확인했다. 원본 비율을 유지하고 크롭·합성·분석선 추가를 하지 않았다.

## 13쪽: CEO letter

PDF 13쪽, 인쇄 13쪽. 원본 텍스트와 렌더 꼬리말을 모두 확인했다. 에셋은 `axp-document-design-site/public/references/assets/persona-nbim-13.png`다.

왼쪽의 큰 인용문은 수익률 15.1%와 국제 주식시장 상승이라는 핵심 설명을 제시한다. 왼쪽 아래에는 날짜·서명·이름·직함이 있다. 오른쪽 긴 본문은 전망의 불확실성에서 출발해 자산별 성과, 부동산 전략 변경, 향후 전략으로 이어진다. 서로 다른 내용 역할을 좌우에 배치하며 인용문과 본문 끝을 같은 높이에 맞추지 않는다. 상단 탐색 영역 아래에는 넓은 여백이 있다.

페이지 단위 비교에서는 기존 16쪽의 수치 조회 지면과 나란히 놓고, 경영진의 해석을 읽는 지면에서 인용문·서명·본문의 역할이 어떻게 달라지는지 본다. 한국어 원고에 적용하려면 실제 분량과 읽기 폭을 다시 시험해야 한다. 영문 줄길이·여백을 그대로 권장값으로 복사하지 않는다.

## 17쪽: 성과표와 추이

PDF 17쪽, 인쇄 쪽수 기록 17. `pdftotext`의 원본 꼬리말에 17이 있으나 최종 렌더에서는 그 꼬리말 숫자가 보이지 않는다. 따라서 인쇄 쪽수의 시각 확인까지 완료했다고 말하지 않는다. 에셋은 `axp-document-design-site/public/references/assets/persona-nbim-17.png`다.

TABLE 4는 통화별 수익률, Chart 2는 연간 수익률 막대와 누적 연율 수익률 선, TABLE 5는 기간별 성과·위험 지표를 담는다. 표·차트·표가 전폭으로 수직 연결된다. 상단 표의 2025 열, 하단 표의 최초 기간과 최근 12개월 열은 옅은 청록색으로 강조되고 숫자는 오른쪽에 정렬된다. 제목은 각 자료 위에, 주석은 각 표 아래에 배치된다. 하단 표는 성과 지표와 상대수익률·위험 지표 사이에 빈 행을 둔다.

기존 16쪽 PNG도 직접 다시 확인했다. 16쪽의 왼쪽 표·오른쪽 도넛 병렬 배열과 17쪽의 전폭 수직 배열을 비교하면, 구성 비중 조회와 장기간 변동 해석에 서로 다른 폭과 순서를 쓰는 모습을 볼 수 있다. 다만 서로 다른 내용을 담은 페이지이므로 동일 원고 A/B 비교가 아니다. Chart 2의 축 문자는 표 문자보다 거칠게 보이며 하단 표·주석은 조밀하다. 이를 그대로 모범 규칙으로 채택하지 않는다.

## 인계와 한계

두 항목의 상태는 `previewed`다. 실제 내지 이미지 확인을 뜻하며 독립 QC, 원문 전체의 디자인 승인, Bishop 채택, 실제 출력·독자 시험을 뜻하지 않는다. 서체명·정확한 글자 크기·열 수·거터·행간·색상 코드 등 제작 사양은 추정해 기록하지 않았다. 상단 여백의 적정성과 읽기 속도 향상도 판단하지 않았다.

추가 페이지는 기존 NBIM 한 문서의 비교 범위를 넓힌다. 새로운 발행기관·문서 유형을 확보한 성과로 집계하지 않으며 실제 문서 수는 늘지 않는다. 원본 수량·유형의 다양성 부족과 외부 접근 장애는 그대로 남아 있다. 사이트 통합, 배포, 독립 검토 및 Bishop의 선택은 이 작업 범위 밖이며 미수행이다.
