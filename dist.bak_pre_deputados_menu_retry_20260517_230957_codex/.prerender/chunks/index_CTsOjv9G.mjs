import { c as createComponent, S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_D-FzWZZ2.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, c as addAttribute, a as renderTemplate } from './prerender_B9NVetgR.mjs';
import { $ as $$Header, r as renderScript } from './Header_CrvR_G_8.mjs';
import { g as getCollection } from './_astro_content_8LBAQ898.mjs';
import { $ as $$BaseHead, a as $$Footer } from './logo-transparent_CXlXanSv.mjs';
import { $ as $$FormattedDate } from './FormattedDate_zH_krPew.mjs';
import { s as sortPostsWithSticky } from './stickyPosts_HMWcwDgj.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = sortPostsWithSticky((await getCollection("blog")).filter((post) => !post.data.draft));
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <section data-astro-cid-j7pv25f6> <ul id="news-list" data-astro-cid-j7pv25f6> ${posts.slice(0, 100).map((post, index) => renderTemplate`<li class="news-item"${addAttribute(index >= 20 ? "display: none;" : "", "style")} data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-j7pv25f6> ${post.data.heroImage && renderTemplate`<img width="720" height="360"${addAttribute(post.data.heroImage, "src")} alt=""${addAttribute(index >= 20 ? "lazy" : "eager", "loading")} data-astro-cid-j7pv25f6>`} <h4 class="title" data-astro-cid-j7pv25f6>${post.data.title}</h4> <p class="date" data-astro-cid-j7pv25f6> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-j7pv25f6": true })} </p> </a> </li>`)} </ul> <div style="text-align: center; margin-top: 3rem; margin-bottom: 2rem;" data-astro-cid-j7pv25f6> <button id="ver-mais-btn" style="padding: 0.8rem 2rem; background: #333; color: white; border: none; cursor: pointer; border-radius: 8px; font-weight: bold; margin-bottom: 1rem; transition: background 0.2s;" data-astro-cid-j7pv25f6>Ver mais notícias</button> <br data-astro-cid-j7pv25f6> <a id="ver-historico-btn" href="/historico" style="display: none; padding: 0.8rem 2rem; background: #0052D4; color: white; border-radius: 8px; font-weight: bold; text-decoration: none; transition: background 0.2s;" data-astro-cid-j7pv25f6>Ir para o Arquivo Histórico</a> </div> ${renderScript($$result, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/index.astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
