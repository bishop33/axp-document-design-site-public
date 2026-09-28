(() => {
  const base = new URL('.', document.currentScript.src);
  const root = new URL('library.html', base).href;
  const nav = document.createElement('nav');
  nav.className = 'library-breadcrumbs';
  nav.setAttribute('aria-label', '현재 위치');
  const host = document.querySelector('body > header, main > header');
  if (!host) return;
  // Keep navigation outside the short header so sticky positioning spans the page.
  document.body.prepend(nav);
  const style = document.createElement('link');
  style.rel = 'stylesheet'; style.href = new URL('breadcrumbs.css', base).href;
  document.head.append(style);
  const hash = () => decodeURIComponent(location.hash.slice(1));
  const currentPath = location.pathname;
  const categories = {all:'전체',text:'텍스트·에디터',table:'테이블',chart:'차트',layout:'그룹핑',structure:'구조·관계·플로우',review:'체크리스트·Q&A',summary:'한 장 요약'};
  function render() {
    const items = [{label:'라이브러리',url:root}];
    const section = hash();
    if (currentPath.endsWith('/library.html')) {
      const name = {representatives:'대표 도식',catalog:'콘텐츠 카탈로그',rules:'공통 기준',experiments:'실험·보류'}[section];
      if (name) items.push({label:name});
    } else if (currentPath.includes('/diagram-lab/')) {
      if (currentPath.endsWith('/explanation-samples.html')) {
        items.push({label:'대표 도식',url:root+'#representatives'});
        items.push({label:({business:'사업 구조',industry:'산업 구조',process:'공정 설명',flow:'Flowchart'})[section] || '도식 4종'});
      } else {
        items.push({label:'실험·보류',url:root+'#experiments'});
        items.push({label:currentPath.endsWith('/design-study.html')?'이전 디자인 스터디':'도식 구현 비교'});
      }
    } else {
      items.push({label:'콘텐츠 카탈로그',url:root+'#catalog'});
      items.push({label:categories[section] || '전체'});
    }
    const list=document.createElement('ol');
    items.forEach((item,index)=>{
      const li=document.createElement('li');
      const last=index===items.length-1;
      const el=document.createElement(last?'span':'a');
      el.textContent=item.label;
      if(last)el.setAttribute('aria-current','page'); else el.href=item.url;
      li.append(el);list.append(li);
    });
    nav.replaceChildren(list);
  }
  render();
  window.addEventListener('hashchange',render);
  window.addEventListener('popstate',render);
  // Category buttons use history.replaceState, which does not emit hashchange.
  document.addEventListener('click',event=>{
    if(event.target.closest('[data-filter]'))queueMicrotask(render);
  });
})();
