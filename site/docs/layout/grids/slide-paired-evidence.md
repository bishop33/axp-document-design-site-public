# 발표 대등 비교

같은 질문에 대한 두 근거를 동일한 크기와 기준으로 대조하는 발표용 시스템입니다.

- 구조: 발표 비교 · 발표용 · 가로
- 용도: 의사결정 발표, 대안 비교, 투자 검토
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-paired-evidence/

## 치수

| 항목 | 값 |
|---|---|
| 판형 | 960 × 540pt |
| 바탕 그리드 | 6열 × 6행 |
| 거터 | 16pt |
| 좌우 여백 | 42pt |
| 본문 영역 | 위 30pt, 높이 480pt |

## 대표 배치

- 비교 질문: 1열부터 6열 × 1행부터 1행
- 근거 A: 1열부터 3열 × 2행부터 4행
- 근거 B: 4열부터 3열 × 2행부터 4행
- 차이·조건·출처: 1열부터 6열 × 6행부터 1행

## 치수로 본 조판

- 유형: 칼럼형 그리드
- 본문 영역: 판형의 81.1%, 폭 309mm, 한 열 46.8mm, 한 행 모듈 66.7pt
- 여백: 위 30pt, 아래 30pt, 좌우 42pt
- 행 모듈에 줄이 맞는 행간: 20.5pt(4줄), 21pt(4줄), 27pt(3줄), 27.5pt(3줄), 28pt(3줄)

| 영역 | 열 | 폭 | 한 줄 글자 수(18–16pt) | 본문 글줄 |
|---|---|---|---|---|
| 비교 질문 | 6 | 309mm | 약 70–79자 | — |
| 근거 A | 3 | 151.7mm | 약 34–38자 | — |
| 근거 B | 3 | 151.7mm | 약 34–38자 | — |
| 차이·조건·출처 | 6 | 309mm | 약 70–79자 | — |

한글 본문 한 글자 평균 0.69em(Pretendard 실측). 본문 글줄 목표 32–54자는 자체 환산값이다.

## 구성 원리

- 상단의 비교 질문 아래 두 근거를 각각 세 열×네 행으로 병합합니다.
- 두 차트는 단위·시점·축 범위를 맞추고, 다른 기준을 써야 하면 차이를 명시합니다.
- 하단 전폭 결론은 공통점·차이·의사결정 조건을 연결하며 좌우에 같은 결론을 반복하지 않습니다.

## 적합한 내용

국내·해외, 기존·변경, 기준·하방 등 두 대상의 차이를 발표 중 직접 대조할 때 사용합니다.

## 다른 구조가 필요한 때

주장과 근거처럼 위계가 다른 정보에 대등한 면적을 주거나 세 개 이상의 대상을 축소해 넣지 않습니다.

## 적용 예시

- IR (의사결정 발표, 3쪽): https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/slide-compare--slide-paired-evidence/

## 관찰 근거와 자체 설정

원문확인: 두 Kelman 공개 HTML. 자체구성: 발표의 대등 비교 규칙과 모든 치수·regions는 대표배치 제안입니다.

- [Kelman Insight Presentation 공개 설명](https://stephenkelman.co.uk/insight-presentation-grid-system-for-indesign): 16:9 business·financial·investor communications 용도와 48/36-field 명시. 대등한 두 차트라는 규칙은 자체 제안입니다.
- [Kelman Digital Presentation 공개 설명](https://stephenkelman.co.uk/digital-presentation-grid-system-for-indesign): 화면용 24-field와 caption grid 확인. 본문 크기·원거리 투사 적합성은 별도입니다.
