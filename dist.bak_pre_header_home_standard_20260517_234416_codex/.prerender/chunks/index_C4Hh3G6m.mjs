import { c as createComponent, a as SITE_TITLE } from './consts_CWaf3kdj.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, c as addAttribute, a as renderTemplate } from './prerender_Dcnb_jXB.mjs';
import { $ as $$Header, r as renderScript } from './Header_kq6MJP3m.mjs';
import { $ as $$BaseHead, a as $$Footer } from './logo-transparent_KzITVDBx.mjs';
import { g as getCollection } from './_astro_content_BN_2x3wu.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const postsByMonth = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    const date = post.data.pubDate;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthKey = `${year}-${month.toString().padStart(2, "0")}`;
    const monthName = date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
    if (!postsByMonth.has(monthKey)) {
      postsByMonth.set(monthKey, {
        key: monthKey,
        name: monthName.charAt(0).toUpperCase() + monthName.slice(1),
        year,
        month: month.toString().padStart(2, "0"),
        firstPost: post,
        count: 1
      });
    } else {
      const entry = postsByMonth.get(monthKey);
      entry.count++;
    }
  });
  const months = Array.from(postsByMonth.values());
  return renderTemplate`<html lang="pt-BR" data-astro-cid-v35xuirk> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Arquivo Histórico - ${SITE_TITLE}`, "description": "Arquivo histórico de notícias do Rio Carta", "data-astro-cid-v35xuirk": true })}${renderHead()}</head> <body data-astro-cid-v35xuirk> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-v35xuirk": true })} <main data-astro-cid-v35xuirk> <h1 data-astro-cid-v35xuirk>Arquivo Histórico</h1> <ul class="month-grid" id="month-list" data-astro-cid-v35xuirk> ${months.map((month, index) => renderTemplate`<li class="month-item"${addAttribute(index >= 50 ? "display: none;" : "", "style")} data-astro-cid-v35xuirk> <a${addAttribute(`/historico/${month.year}/${month.month}`, "href")} data-astro-cid-v35xuirk> <div class="month-card" data-astro-cid-v35xuirk> <div class="thumb-container" data-astro-cid-v35xuirk> ${month.firstPost.data.heroImage ? renderTemplate`<img${addAttribute(month.firstPost.data.heroImage, "src")} alt="" loading="lazy" data-astro-cid-v35xuirk>` : renderTemplate`<div style="width:100%; height:100%; background:#ccc; display:flex; align-items:center; justify-content:center;" data-astro-cid-v35xuirk>Sem Imagem</div>`} </div> <div class="month-info" data-astro-cid-v35xuirk> <h3 class="month-name" data-astro-cid-v35xuirk>${month.name}</h3> <p class="post-count" data-astro-cid-v35xuirk>${month.count} notícias</p> </div> </div> </a> </li>`)} </ul> <div style="text-align: center; margin-top: 3rem; margin-bottom: 2rem;" data-astro-cid-v35xuirk> <button id="ver-mais-btn" style="padding: 0.8rem 2rem; background: #333; color: white; border: none; cursor: pointer; border-radius: 8px; font-weight: bold; margin-bottom: 1rem; transition: background 0.2s;" data-astro-cid-v35xuirk>Carregar mais meses</button> </div> ${renderScript($$result, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/historico/index.astro?astro&type=script&index=0&lang.ts")} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-v35xuirk": true })} </body></html>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/historico/index.astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/historico/index.astro";
const $$url = "/historico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
