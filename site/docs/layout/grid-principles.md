# 그리드는 행간, 한 줄 길이, 판면 순서로 설계합니다

먼저 본문의 크기와 행간을 정하고, 그 글줄이 읽히는 폭으로 열을 나눈 뒤, 남는 공간으로 판면과 여백을 정합니다. 행 모듈은 행간의 배수로 맞춥니다.

- 상태: 검토 중
- 갱신: 2026-09-29
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grid-principles/

1. **독자가 이 쪽에서 할 일을 정합니다.** 이어 읽기, 대조하기, 찾아보기, 한눈에 보기.
2. **본문 크기와 행간을 정합니다.** 인쇄 9–10pt, 행간은 모듈에 맞는 12pt 또는 14pt.
3. **한 줄 길이로 열 폭을 정합니다.** 한글 본문 한 줄 32–54자.
4. **행 모듈을 행간의 배수로 맞춥니다.** 표·차트 블록의 위아래가 본문 줄과 같은 선에 섭니다.
5. **남은 공간으로 판면과 여백을 정합니다.** 제본 쪽은 좁게, 아래는 위보다 같거나 넓게.

## 행간과 행 모듈

행 모듈에 본문 줄이 딱 맞아야 표·차트 블록의 위아래가 본문 줄과 같은 선에 섭니다. 모듈 윗선이 기준선에 놓이면 검은 선, 어긋나면 빨간 선입니다.

(그림) 대칭 2단 그리드의 모듈 세 칸을 행간 14·12·13.5·15pt 기준선 위에 겹친 비교. 14·12pt는 모듈 윗선이 기준선에 맞고 13.5·15pt는 어긋난다.

행 모듈 높이는 ‘행간 × 줄 수 − 거터’로 계산합니다. 예를 들어 행간 14pt, 거터 10pt면 모듈 74pt(6줄)입니다.

## 한 줄 길이

본문이 흐르는 영역을 실제 폭 비율로 그렸습니다. 막대 하나가 한 줄입니다.

(그림) 본문이 흐르는 영역의 폭과 한 줄 글자 수. 아래 표와 같은 값이다.

1단 전폭은 9–10pt에서 한 줄이 70자 안팎으로 깁니다. 본문을 4열에 두고 남는 2열을 주석에 쓰면 45–50자가 됩니다.

## 판면과 여백

책의 고전 작도와 이 가이드의 A4 판면을 같은 크기로 놓았습니다.

(그림) 2:3 책의 9등분 작도 판면(쪽의 약 44%)과 A4 연속 본문 그리드 판면(약 71%) 비교.

보고서는 표와 차트 때문에 판면이 넓습니다. 작도에서 가져올 것은 비율이 아니라 원칙입니다. 양면 제본이면 안쪽 여백을 바깥보다 좁히고, 아래 여백은 위보다 같거나 넓게 둡니다.

<details>
<summary>계산 방법과 근거</summary>

- 한 줄 길이: Bringhurst는 라틴 문자 1단 본문에 45–75자를 권합니다. Pretendard 한글 문장은 한 글자 평균 0.69em(실측)이라 같은 눈의 이동 폭은 약 32–54자입니다. 자체 환산값이며 W3C 한글 조판 요구사항(klreq)에도 한글 권장 글자 수는 없습니다.
- 행간과 모듈: Bringhurst는 제목·도판이 끼어든 뒤에도 본문 줄의 박자에 다시 맞아야 한다고 씁니다(§2.2.2). ±0.08줄 이내를 ‘맞음’으로 봅니다.
- 판면: 9등분 작도(Rosarivo)와 대각선 작도(Van de Graaf)는 같은 판면을 냅니다(Tschichold). 여백 비율 2:3:4:6은 원문을 확인하지 못해 적지 않았습니다.
- Stephen Kelman, *Margins are not an afterthought* — 글이 많은 문서는 행간을 먼저, 여백을 그다음에 정합니다.

| 시스템 | 본문 영역 | 폭 | 한 줄 글자 수(10–9pt) | 판단 |
|---|---|---|---|---|
| [연속 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/continuous-text.md) | 연속 본문·삽입 자료 | 166.3mm | 약 68–75자 | 긺 |
| [대칭 2단 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/symmetric-columns.md) | 본문 전반 | 86.7mm | 약 35–39자 | 적정 |
| [대칭 2단 본문](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/symmetric-columns.md) | 본문 후반 | 86.7mm | 약 35–39자 | 적정 |
| [본문과 옆주석](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/text-with-notes.md) | 연속 본문 | 117mm | 약 48–53자 | 적정 |

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
| [결론과 근거 셋](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-claim-three-proofs.md) | 70pt + 거터 12pt | 20.5pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.1줄), 21pt(3.9줄), 22pt(3.73줄), 24pt(3.42줄) |
| [지표 넷과 추이](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-kpi-dashboard.md) | 70pt + 거터 12pt | 20.5pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.1줄), 21pt(3.9줄), 22pt(3.73줄), 24pt(3.42줄) |
| [단계와 일정](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-timeline.md) | 70pt + 거터 12pt | 20.5pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.1줄), 21pt(3.9줄), 22pt(3.73줄), 24pt(3.42줄) |
| [표 중심 비교](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-table-focus.md) | 70pt + 거터 12pt | 20.5pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.1줄), 21pt(3.9줄), 22pt(3.73줄), 24pt(3.42줄) |
| [설명과 도판](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-text-visual.md) | 70pt + 거터 12pt | 20.5pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.1줄), 21pt(3.9줄), 22pt(3.73줄), 24pt(3.42줄) |
| [대안 셋 비교](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-three-options.md) | 70pt + 거터 12pt | 20.5pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.1줄), 21pt(3.9줄), 22pt(3.73줄), 24pt(3.42줄) |
| [섹션 표지](https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-section-divider.md) | 70pt + 거터 12pt | 20.5pt × 4줄, 27pt × 3줄, 27.5pt × 3줄, 28pt × 3줄 | 20pt(4.1줄), 21pt(3.9줄), 22pt(3.73줄), 24pt(3.42줄) |

</details>

다음: [그리드 시스템](/docs/layout/grids/) — 이 원리로 나눈 그리드 71종
