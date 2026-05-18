import { c as createComponent, a as SITE_TITLE } from './consts_CWaf3kdj.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, c as addAttribute, a as renderTemplate } from './prerender_Dcnb_jXB.mjs';
import { g as getCollection } from './_astro_content_BN_2x3wu.mjs';
import { $ as $$BaseHead, a as $$Footer } from './logo-transparent_KzITVDBx.mjs';
import { $ as $$Header } from './Header_kq6MJP3m.mjs';

async function getStaticPaths() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);
  const years = [...new Set(posts.map((post) => post.data.pubDate.getFullYear().toString()))];
  return years.map((year) => ({
    params: { year }
  }));
}
const $$year = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$year;
  const { year } = Astro2.params;
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).filter((post) => post.data.pubDate.getFullYear().toString() === year).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const postsByMonth = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    const date = post.data.pubDate;
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const key = `${year}-${month}`;
    const name = date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
    if (!postsByMonth.has(key)) {
      postsByMonth.set(key, {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        month,
        firstPost: post,
        count: 1
      });
    } else {
      postsByMonth.get(key).count += 1;
    }
  });
  const months = Array.from(postsByMonth.values());
  return renderTemplate`<html lang="pt-BR" data-astro-cid-bjmnchyj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Histórico ${year} - ${SITE_TITLE}`, "description": `Arquivo histórico do Rio Carta em ${year}`, "data-astro-cid-bjmnchyj": true })}${renderHead()}</head> <body data-astro-cid-bjmnchyj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bjmnchyj": true })} <main data-astro-cid-bjmnchyj> <h1 data-astro-cid-bjmnchyj>Histórico de ${year}</h1> <p class="archive-intro" data-astro-cid-bjmnchyj>${posts.length} notícias publicadas no ano.</p> <ul class="month-grid" data-astro-cid-bjmnchyj> ${months.map((month) => renderTemplate`<li class="month-card" data-astro-cid-bjmnchyj> <a${addAttribute(`/historico/${year}/${month.month}`, "href")} data-astro-cid-bjmnchyj> <div class="thumb-container" data-astro-cid-bjmnchyj> ${month.firstPost.data.heroImage ? renderTemplate`<img${addAttribute(month.firstPost.data.heroImage, "src")} alt="" loading="lazy" data-astro-cid-bjmnchyj>` : null} </div> <div class="month-info" data-astro-cid-bjmnchyj> <h2 class="month-name" data-astro-cid-bjmnchyj>${month.name}</h2> <p class="post-count" data-astro-cid-bjmnchyj>${month.count} notícias</p> </div> </a> </li>`)} </ul> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bjmnchyj": true })} </body></html>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/historico/[year].astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/historico/[year].astro";
const $$url = "/historico/[year]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$year,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
