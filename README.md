# AXP Document Design Library - Public Site

GitHub Pages 배포 전용 저장소입니다. `site/`에는 공개용 정적 build만 포함합니다.

- 새 문서 사이트(Next.js)는 `/docs/`에 있습니다. 기존 주소(`index.html#…`)로 들어오면 새 주소로 이동합니다.
- 제3자 PDF 원본과 내부 문서(팀 역할, 학습 기록 화면, 기업현황 QC 페이지)는 새 사이트에 포함하지 않습니다. 원문 링크와 공개 내지 미리보기는 유지합니다.
- 원본 작업 저장소 `bishop33/axp-document-design-site`의 `web/`에서 아래 명령으로 생성한 결과입니다.

```bash
cd web
NEXT_PUBLIC_BASE_PATH=/axp-document-design-site-public \
NEXT_PUBLIC_SITE_URL=https://bishop33.github.io \
SITE_VISIBILITY=public npm run build   # 결과: web/out → 이 저장소의 site/
```

배포 주소: https://bishop33.github.io/axp-document-design-site-public/
