import { c as createComponent, a as SITE_TITLE } from './consts_uJ-yawyY.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, c as addAttribute, a as renderTemplate } from './prerender_8xY5cOPk.mjs';
import { g as getCollection } from './_astro_content_DSfkW6gs.mjs';
import { $ as $$BaseHead, a as $$Footer } from './logo-transparent_DSE2ZYdT.mjs';
import { $ as $$Header } from './Header_CFZGNN9G.mjs';
import { $ as $$FormattedDate } from './FormattedDate_B9Q68TxN.mjs';

async function getStaticPaths() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);
  const monthsSet = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    const date = post.data.pubDate;
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    monthsSet.add(`${year}-${month}`);
  });
  return Array.from(monthsSet).map((key) => {
    const [year, month] = key.split("-");
    return {
      params: { year, month }
    };
  });
}
const $$month = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$month;
  const { year, month } = Astro2.params;
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).filter((post) => {
    const date = post.data.pubDate;
    return date.getFullYear().toString() === year && (date.getMonth() + 1).toString().padStart(2, "0") === month;
  }).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const monthName = new Date(parseInt(year), parseInt(month) - 1, 1).toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  const displayTitle = `Arquivo: ${monthName.charAt(0).toUpperCase() + monthName.slice(1)}`;
  return renderTemplate`<html lang="pt-BR" data-astro-cid-2yddak7e> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${displayTitle} - ${SITE_TITLE}`, "description": `Arquivo de notícias de ${monthName}`, "data-astro-cid-2yddak7e": true })}${renderHead()}</head> <body data-astro-cid-2yddak7e> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-2yddak7e": true })} <main data-astro-cid-2yddak7e> <h1 style="text-align: center; margin-bottom: 2rem;" data-astro-cid-2yddak7e>${displayTitle}</h1> <ul data-astro-cid-2yddak7e> ${posts.map((post) => renderTemplate`<li data-astro-cid-2yddak7e> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-2yddak7e> ${post.data.heroImage && renderTemplate`<img width="720" height="360"${addAttribute(post.data.heroImage, "src")} alt="" loading="lazy" data-astro-cid-2yddak7e>`} <h4 class="title" data-astro-cid-2yddak7e>${post.data.title}</h4> <p class="date" data-astro-cid-2yddak7e> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-2yddak7e": true })} </p> </a> </li>`)} </ul> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-2yddak7e": true })} </body></html>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/historico/[year]/[month].astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/historico/[year]/[month].astro";
const $$url = "/historico/[year]/[month]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$month,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
