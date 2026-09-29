# 그리드를 짜는 기준

판면과 여백, 열과 거터, 행 모듈과 행간, 한 줄 길이. 그리드 10종의 치수로 직접 계산해 무엇이 맞고 무엇이 어긋나는지 확인합니다.

- 상태: 검토 중
- 갱신: 2026-09-29
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grid-principles/

> **읽는 법** 이 문서의 숫자는 두 종류입니다. 원문을 열어 확인한 기준(Bringhurst, W3C 한글 조판 요구사항)과, 이 가이드의 그리드 치수와 Pretendard 실측으로 계산한 값입니다. 계산값은 기준을 대신하지 않으며 실제 출력으로 검증해야 합니다. 각 절 끝에 근거의 수준을 적었습니다.

## 그리드를 이루는 것

그리드는 판면을 나누는 선의 모음입니다. 이 가이드는 W3C 한글 조판 요구사항(klreq)이 판면을 설명할 때 쓰는 말을 기본 용어로 씁니다.

| 용어 | 뜻 | 이 가이드에서 |
|---|---|---|
| 판면(기본 판면) | 페이지 크기에서 상·하·좌·우 여백을 뺀 나머지 영역 | 그리드 도면의 회색 테두리 안 |
| 여백 | 판면 바깥. 제본 쪽(안쪽)과 바깥쪽을 따로 정할 수 있다 | 현재 10종은 좌우가 같다 |
| 단(열)과 단 간격 | 판면을 세로로 나눈 열과 열 사이 거리(거터) | 6열 또는 8열, 거터 10–16pt |
| 행·흐름선 | 판면을 가로로 나눈 띠. 블록의 위쪽을 맞추는 선 | 인쇄 세로 9행, 가로 6행 |
| 모듈 | 열과 행이 만나 생기는 칸 | 모듈을 병합해 영역을 만든다 |
| 영역 | 역할이 정해진 모듈 묶음(제목, 본문, 주석 등) | 도면의 ‘대표 배치’ |
| 글줄 너비 | 한 줄의 길이. 판면 폭이 아니라 본문이 흐르는 영역의 폭 | 아래 ‘한 줄 길이’ |
| 글줄 보내기(행간) | 한 줄의 기준선에서 다음 줄 기준선까지 거리 | 아래 ‘행간과 행 모듈’ |
| 면주·쪽번호 | 판면 바깥에서 반복되는 표지 요소 | 보고서 머리글·바닥글 |

klreq는 판면을 이루는 요소로 글자 크기와 서체, 단의 수와 간격, 글줄 너비, 쪽당 글줄 수, 글줄 보내기 수치를 듭니다. 이 가이드의 그리드 상세 쪽은 이 다섯 가지를 함께 보여 주는 것을 목표로 합니다.

근거: klreq 편집자 초안에서 판면·면주·판면 명세 항목을 확인했습니다. ‘흐름선·모듈·영역’은 디자인 교육에서 널리 쓰는 용어를 이 가이드가 정리한 것입니다.

## 그리드의 네 가지 유형

디자인 교육에서는 그리드를 보통 원고형·칼럼형·모듈형·계층형 네 가지로 나눕니다. 이 가이드의 10종이 어느 유형에 속하는지 함께 적었습니다.

| 유형 | 구조 | 알맞은 내용 | 주의 | 이 가이드의 시스템 |
|---|---|---|---|---|
| 원고형(manuscript) | 판면 하나에 글이 이어지는 구조. 열을 나누지 않고 여백과 판면 비례가 지면을 정한다. | 긴 해설, 폭이 넓은 재무표처럼 한 덩어리로 읽는 내용 | 폭이 넓으면 글줄이 길어진다. 표가 아닌 본문은 글줄 길이를 먼저 확인한다. | [연속 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/continuous-text.md), [재무표 중심](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/financial-table.md) |
| 칼럼형(column) | 세로 열 여러 개로 나누고 열을 묶어 본문·주석·도판 폭을 정한다. | 본문과 보조 정보(옆주석, 해석)가 나란히 가는 페이지 | 열마다 다른 내용이 흐르면 읽는 순서가 흐려진다. 주 흐름이 되는 열을 하나 정한다. | [대칭 2단 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/symmetric-columns.md), [본문과 옆주석](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/text-with-notes.md), [근거와 해설 비대칭](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/asymmetric-analysis.md), [발표 대등 비교](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-paired-evidence.md) |
| 모듈형(modular) | 열에 가로 흐름선(행)을 더해 모듈을 만들고, 모듈을 묶은 영역마다 역할을 준다. | 차트·지표·표·짧은 설명이 섞인 대시보드형 페이지, 발표 화면 | 모듈 경계가 본문 줄과 어긋나면 블록 위아래가 들쭉날쭉해진다. 행 모듈을 행간의 배수로 맞춘다. | [병합 모듈](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/modular-evidence.md), [가로 항목 대조](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/landscape-comparison.md), [절차와 검증 대응](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/process-and-evidence.md), [발표 핵심 차트](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-chart-focus.md) |
| 계층형(hierarchical) | 반복 모듈 대신 내용의 크기와 중요도에 맞춰 영역을 직접 나눈다. | 표지, 한 장 요약, 섹션 도입처럼 한 번 쓰는 지면 | 반복 페이지에 쓰면 쪽마다 위치가 달라진다. 이 가이드의 10종에는 아직 없다. | 없음 |

유형은 문서 전체가 아니라 쪽마다 고릅니다. 기업현황 보고서 한 권에도 해설 쪽(원고형·칼럼형)과 지표 쪽(모듈형)이 섞입니다. 이때 열 수와 여백, 행간을 같게 두면 유형이 달라도 쪽을 넘길 때 정렬선이 이어집니다.

근거: 네 가지 분류는 Timothy Samara, *Making and Breaking the Grid*의 구성으로 널리 알려져 있으나, 이 작업에서는 원문을 열어 확인하지 못했습니다. 각 유형의 설명과 10종 분류는 이 가이드의 판단입니다.

## 한 줄 길이

Bringhurst는 라틴 문자 본문에 대해 이렇게 씁니다. “세리프 본문 크기로 짠 1단 페이지에서는 45–75자가 만족스러운 글줄 길이로 널리 여겨진다. 글자와 공백을 함께 센 66자가 이상적이다. 여러 단으로 짤 때는 평균 40–50자가 낫다.”

이 숫자를 한글에 그대로 쓸 수는 없습니다. 한글 한 글자는 라틴 소문자보다 넓습니다. Pretendard로 보고서 문장을 재면 한글은 0.86em, 공백은 0.25em, 숫자는 0.58em이고, 공백과 숫자가 섞인 실제 문장은 한 글자 평균 0.69em입니다. 라틴 본문 한 글자를 약 0.5em으로 보면, 같은 눈의 이동 폭은 한글로 약 32–54자입니다. 한글 본문에 대한 권장 글자 수는 klreq에도 없고, 이 작업에서 확인한 기관·학회 자료도 없습니다. 그래서 이 범위는 자체 환산값이며 출력 시험 전까지 목표로만 씁니다.

그리드 10종에서 본문이 흐르는 영역을 계산하면 다음과 같습니다.

| 시스템 | 본문 영역 | 폭 | 한 줄 글자 수(10–9pt) | 판단 |
|---|---|---|---|---|
| [연속 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/continuous-text.md) | 연속 본문·삽입 자료 | 166.3mm | 약 68–75자 | 긺 |
| [대칭 2단 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/symmetric-columns.md) | 본문 전반 | 86.7mm | 약 35–39자 | 적정 |
| [대칭 2단 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/symmetric-columns.md) | 본문 후반 | 86.7mm | 약 35–39자 | 적정 |
| [본문과 옆주석](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/text-with-notes.md) | 연속 본문 | 117mm | 약 48–53자 | 적정 |

- **연속 본문**은 1단 판면 전체가 본문이라 9–10pt에서 한 줄이 68–75자로, 환산 목표보다 깁니다. 본문을 12pt로 키워도 56자, 5열(약 138mm)로 줄여도 56–62자입니다. 본문을 4열(약 110mm, 45–50자)에 두고 남는 2열을 주석에 쓰면 범위에 들어오는데, 이것이 곧 ‘본문과 옆주석’ 구조입니다.
- **대칭 2단**(35–39자)과 **본문과 옆주석**의 본문(48–53자)은 범위 안입니다.
- 옆주석·해석처럼 2열 폭(56mm, 23–25자) 영역은 본문이 아니라 짧은 설명용입니다. 여기에 문단을 흘리면 한 줄이 너무 짧아 줄바꿈이 잦아집니다.

근거: Bringhurst 문장은 *The Elements of Typographic Style* §2.1.2를 그대로 인용한 Rutter의 웹 판에서 확인했습니다. klreq에서 권장 글자 수가 없음을 확인했습니다. 글자 폭은 이 가이드가 브라우저에서 잰 값, 32–54자와 판단은 자체 환산입니다.

## 행간과 행 모듈

Bringhurst는 제목·인용·주석·도판이 본문 사이에 끼어들어도 그 뒤에서 본문 줄의 박자에 정확히 다시 맞아야 한다고 씁니다. 그리드에서는 행 모듈이 그 박자를 정합니다. 표나 차트 블록은 모듈 경계에 맞춰 놓이므로, 행 모듈 높이와 거터를 더한 값이 행간의 정수배이면 블록의 위아래가 본문 줄과 같은 선에 섭니다.

| 시스템 | 행 모듈 | 줄이 맞는 행간 | 어긋나는 후보 |
|---|---|---|---|
| [연속 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/continuous-text.md) | 74.7pt + 거터 10pt | 12pt × 7줄, 14pt × 6줄 | 13pt(6.51줄), 13.5pt(6.27줄), 15pt(5.64줄) |
| [대칭 2단 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/symmetric-columns.md) | 72.9pt + 거터 12pt | 12pt × 7줄, 14pt × 6줄 | 13pt(6.53줄), 13.5pt(6.29줄), 15pt(5.66줄) |
| [본문과 옆주석](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/text-with-notes.md) | 72.9pt + 거터 12pt | 12pt × 7줄, 14pt × 6줄 | 13pt(6.53줄), 13.5pt(6.29줄), 15pt(5.66줄) |
| [근거와 해설 비대칭](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/asymmetric-analysis.md) | 72.9pt + 거터 12pt | 12pt × 7줄, 14pt × 6줄 | 13pt(6.53줄), 13.5pt(6.29줄), 15pt(5.66줄) |
| [병합 모듈](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/modular-evidence.md) | 72.9pt + 거터 12pt | 12pt × 7줄, 14pt × 6줄 | 13pt(6.53줄), 13.5pt(6.29줄), 15pt(5.66줄) |
| [재무표 중심](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/financial-table.md) | 74.7pt + 거터 10pt | 12pt × 7줄, 14pt × 6줄 | 13pt(6.51줄), 13.5pt(6.27줄), 15pt(5.64줄) |
| [가로 항목 대조](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/landscape-comparison.md) | 76.7pt + 거터 12pt | 11pt × 8줄 | 12pt(7.39줄), 13pt(6.82줄), 13.5pt(6.57줄), 14pt(6.33줄), 15pt(5.91줄) |
| [절차와 검증 대응](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/process-and-evidence.md) | 76.7pt + 거터 12pt | 11pt × 8줄 | 12pt(7.39줄), 13pt(6.82줄), 13.5pt(6.57줄), 14pt(6.33줄), 15pt(5.91줄) |
| [발표 핵심 차트](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-chart-focus.md) | 70pt + 거터 12pt | 20.5pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.1줄), 21pt(3.9줄), 22pt(3.73줄), 24pt(3.42줄) |
| [발표 대등 비교](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-paired-evidence.md) | 66.7pt + 거터 16pt | 20.5pt × 4줄, 21pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.13줄), 22pt(3.76줄), 24pt(3.44줄) |

- 인쇄 세로 6종은 행 모듈 약 73–75pt에 거터 10–12pt로, **행간 12pt(7줄)와 14pt(6줄)**에 맞습니다. 적용 예시의 12pt, 기업현황 보고서 본문의 14pt는 이 모듈에 맞는 값이고, 본문 기준선 예시의 13.5pt와 기본 가이드가 시험해 보라고 한 15pt는 어긋납니다.
- 인쇄 가로 2종은 11pt(8줄)에서만 맞습니다. 가로 쪽 본문을 12–14pt 행간으로 쓰려면 행 수나 본문 높이를 다시 정해야 합니다.
- 발표 화면 2종에 함께 맞는 행간은 20.5pt(4줄)와 27–28pt(3줄)입니다. 적용 예시의 21–22pt는 한 화면에만 맞거나(21pt) 둘 다 어긋납니다(22pt).

행간을 먼저 정하고 행 모듈을 거기서 계산하는 것이 순서입니다. 행 모듈 높이 = 행간 × n − 거터로 두면, 행간을 바꿀 때 그리드도 함께 바뀝니다.

근거: Bringhurst §2.2.2(같은 웹 판). 줄 수 계산은 이 가이드의 그리드 치수에서 자동으로 합니다(±0.08줄 이내를 ‘맞음’으로 봅니다).

## 판면 비례와 여백

책 디자인에는 판면 위치를 정하는 고전적인 작도법이 있습니다. 쪽을 가로세로 9등분해 안쪽·위 여백을 1칸, 바깥·아래 여백을 2칸으로 두는 방법(Rosarivo)과, 자와 대각선만으로 같은 판면을 얻는 Van de Graaf의 작도가 대표적입니다. Tschichold는 두 방법이 같은 결과를 낸다고 보였습니다. 흔히 ‘빌라르 도형’이라 부르는 작도는, 남아 있는 빌라르 드 온쿠르의 화첩에는 실제로 들어 있지 않아 출처가 불분명합니다.

이 작도는 2:3 비율의 책을 위한 것이고, 판면이 쪽의 절반이 안 됩니다(9등분이면 약 44%). A4는 1:√2이고, 기업 보고서는 표와 차트를 넣어야 해서 이 가이드의 그리드는 판면이 쪽의 71–81%입니다. 가져올 것은 비율 숫자가 아니라 두 가지 원칙입니다.

- 여백은 한 값이 아니라 쪽의 위치에 따라 다르게 둘 수 있습니다. 양면으로 제본하는 인쇄본이라면 안쪽 여백을 바깥보다 좁히고, 펼침면 두 쪽의 판면이 하나의 덩어리로 보이게 합니다. 현재 10종은 화면·단면 출력을 기본으로 해 좌우가 같습니다.
- 아래 여백은 위 여백보다 같거나 넓게 둡니다. 현재 인쇄 세로 그리드는 위 44pt, 아래 45.9pt로 거의 같습니다. 바닥글과 쪽번호가 들어가는 자리를 따로 셈해야 합니다.

근거: 작도법의 역사는 공개 저장소의 해설 문서(2차 자료, 참고문헌 표기)에서 확인했습니다. 여백 비율 2:3:4:6(안쪽:위:바깥:아래)도 널리 인용되지만 원문을 열어 확인하지 못해 적지 않았습니다. 두 원칙과 현재 여백에 대한 판단은 이 가이드의 것입니다.

## 그리드를 고르는 순서

1. **독자가 이 쪽에서 무엇을 하는지 정합니다.** 이어 읽기(원고형·칼럼형), 대조하기(모듈형 가로), 찾아보기(재무표), 한눈에 보기(발표).
2. **본문 크기와 행간을 정합니다.** 인쇄 본문 9–10pt, 행간은 행 모듈에 맞는 12pt 또는 14pt.
3. **본문 영역 폭을 한 줄 길이로 확인합니다.** 1단이면 한 줄이 목표보다 길지 않은지, 좁은 열이면 문단을 흘리지 않는지 봅니다.
4. **표·차트 블록을 모듈 경계에 맞춥니다.** 블록 높이는 행 모듈 단위로 늘리고 줄입니다.
5. **여백과 면주 자리를 확인합니다.** 제본 여부, 머리글·바닥글·쪽번호 위치를 정합니다.

## 자주 생기는 어긋남

- **1단인데 판면이 넓다.** A4 전폭 본문은 9–10pt에서 한 줄이 70자 안팎입니다. 글자를 키우는 것만으로는 부족해 본문 폭을 4열 정도로 줄입니다.
- **행간과 행 모듈이 따로 논다.** 행간을 바꾸고 그리드를 그대로 두면 표·차트 위아래가 본문 줄과 어긋납니다.
- **좁은 열에 문단을 흘린다.** 2열 폭(약 56mm)은 짧은 해석·지표용입니다. 문단은 3열 이상에 둡니다.
- **쪽마다 유형과 열 수를 모두 바꾼다.** 유형을 바꾸더라도 열 수·여백·행간은 문서 전체에서 같게 둡니다.

## 확인이 더 필요한 자료

이번 조사에서는 작업 환경의 네트워크 제한으로 다음 자료를 원문으로 열지 못했습니다. 확인 전에는 숫자나 문장을 인용하지 않습니다.

- Josef Müller-Brockmann, *Grid Systems in Graphic Design*(1981): 모듈 사이 간격을 본문 줄 수로 정하는 방법, 예제의 모듈 수
- Karl Gerstner, *Designing Programmes*(1964): 하나의 단위로 2·3·4·5·6단을 모두 만드는 가변 그리드
- Jan Tschichold, *The Form of the Book*: 여백 비율의 원래 서술
- Adobe InDesign 도움말: 기준선 그리드 간격을 본문 행간과 같게 두는 설정
- 한글 본문 한 줄 글자 수에 대한 학회·기관 자료(한국타이포그라피학회 *글짜씨*, 국립국어원 등)

## 근거

- W3C, *Requirements for Hangul Text Layout and Typography*(klreq) 편집자 초안 — 판면·면주 정의, 판면 명세 항목, 줄 간격 표기 4가지, 권장 글자 수 없음. [https://www.w3.org/TR/klreq/](https://www.w3.org/TR/klreq/)
- Robert Bringhurst, *The Elements of Typographic Style* §2.1.2, §2.2.2 — Richard Rutter, *The Elements of Typographic Style Applied to the Web*에 인용된 원문. [https://webtypography.net/](https://webtypography.net/)
- 공개 저장소 해설 문서 “history”(73rhodes/phi) — Rosarivo, Van de Graaf, Tschichold, 빌라르 도형 출처 문제(2차 자료). [https://github.com/73rhodes/phi](https://github.com/73rhodes/phi)
- 이 가이드의 계산: 그리드 10종 치수(`guide/grid-systems.json`), Pretendard 400 글자 폭 실측
