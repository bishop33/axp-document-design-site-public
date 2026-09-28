# 발표 핵심 차트

하나의 결론과 이를 뒷받침하는 큰 차트를 중심으로 설명하는 발표용 시스템입니다.

- 구조: 발표 집중 · 발표용 · 가로
- 용도: 의사결정 발표, 성과 보고
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/layout/grids/slide-chart-focus/

## 치수

| 항목 | 값 |
|---|---|
| 판형 | 960 × 540pt |
| 바탕 그리드 | 6열 × 6행 |
| 거터 | 12pt |
| 좌우 여백 | 42pt |
| 본문 영역 | 위 30pt, 높이 480pt |

## 대표 배치

- 결론 제목: 1열부터 6열 × 1행부터 1행
- 핵심 차트: 1열부터 4열 × 2행부터 4행
- 핵심 값: 5열부터 2열 × 2행부터 2행
- 해석·예외: 5열부터 2열 × 4행부터 2행
- 출처·조건: 1열부터 6열 × 6행부터 1행

## 구성 원리

- 상단은 결론 제목, 중앙은 네 열 폭 차트, 오른쪽 두 열은 핵심 값과 예외로 구분합니다.
- 차트 축·단위·범례는 차트 영역에 포함하고 해설을 위해 plot 안의 라벨을 지우지 않습니다.
- 하단은 짧은 출처와 조건에 사용하며 상세 표는 별도 배포 지면으로 연결합니다.

## 적합한 내용

발표자의 설명과 함께 한 가지 변화·비교·구성을 파악할 때 사용합니다.

## 다른 구조가 필요한 때

긴 원문·다기간 재무표·다수의 동등한 차트를 한 화면에 압축하는 용도로 사용하지 않습니다.

## 적용 예시

- IR (의사결정 발표, 3쪽): https://bishop33.github.io/axp-document-design-site-public/docs/layout/examples/slide-compare/

## 관찰 근거와 자체 설정

원문확인: Kelman HTML과 NAVER PDF 선택 지면. 자체구성: 960×540pt, 병합·regions는 대표배치 제안이며 원거리 투사는 미검증입니다.

- [Kelman Highlight Presentation 공개 설명](https://stephenkelman.co.uk/highlight-presentation-grid-system-for-indesign): 간결한 발표용 콘텐츠를 longer-form Insight와 구분합니다. 48/36-field 명시는 우리 치수의 근거가 아닙니다.
- [NAVER 4Q24 Earnings Results](https://www.navercorp.com/api/article/download/8c766af7-6185-4eb1-aab6-373f659d0948): 사업별 차트·해설 관계 참고. 기존 발표 자료의 글자 크기를 원거리 가독성 기준으로 채택하지 않습니다.
