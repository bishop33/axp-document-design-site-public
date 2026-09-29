# 연혁

회사는 언제 어떤 일을 거쳐 지금에 이르렀나요?

- 분류: 시간과 일정
- 쓰는 문서: 기업현황, 투자검토 IM, 발표
- 주소: https://bishop33.github.io/axp-document-design-site-public/docs/diagrams/history/

## 이럴 때 사용합니다

설립부터 현재까지 주요 사건을 시간 순서로 보여줄 때. 사건은 연도마다 두 개 이하로 줄입니다.

## 다른 표현이 나을 때

사건이 열 개를 넘으면 표(연도 · 내용)로 바꿉니다. 간격이 불규칙해도 같은 폭으로 그린다는 점을 기억합니다.

## 표현할 때 지킬 기준

- 연도는 굵게, 사건은 둘째 줄에 적습니다.
- 현재 또는 설명하려는 시점만 짙게 둡니다.
- 투자·매출 같은 수치 사건은 금액을 함께 적습니다.

## Mermaid 원고

공통 설정 [diagram-theme.js](https://bishop33.github.io/axp-document-design-site-public/guide/diagram-theme.js)로 그린다(Mermaid 12.0.0, dagre 배치, classDef focus·soft·note). 예시는 가상 기업·가상 수치다.

```mermaid
flowchart LR
  y1["`**2016**
법인 설립`"]
  y2["`**2018**
시리즈 A 60억원
첫 기업 고객`"]
  y3["`**2021**
해외 법인 설립`"]
  y4["`**2024**
매출 100억원 돌파`"]
  y5["`**2025**
상장 예비심사 청구`"]:::focus
  y1 --> y2 --> y3 --> y4 --> y5
```
