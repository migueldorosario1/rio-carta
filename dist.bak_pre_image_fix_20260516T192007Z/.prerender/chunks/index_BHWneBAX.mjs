import { c as createComponent } from './consts_uJ-yawyY.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, c as addAttribute, a as renderTemplate } from './prerender_8xY5cOPk.mjs';
import { g as getCollection } from './_astro_content_DSfkW6gs.mjs';
import { $ as $$BaseHead, a as $$Footer } from './logo-transparent_DSE2ZYdT.mjs';
import { $ as $$FormattedDate } from './FormattedDate_B9Q68TxN.mjs';
import { $ as $$Header } from './Header_CFZGNN9G.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const drafts = (await getCollection("blog")).filter((post) => post.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`<html lang="pt-BR" data-astro-cid-t5cikg7z> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Previa de rascunhos - Rio Carta", "description": "Previa local de rascunhos do Rio Carta", "data-astro-cid-t5cikg7z": true })}<meta name="robots" content="noindex,nofollow">${renderHead()}</head> <body data-astro-cid-t5cikg7z> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-t5cikg7z": true })} <main data-astro-cid-t5cikg7z> <h1 data-astro-cid-t5cikg7z>Previa de rascunhos</h1> <p class="preview-note" data-astro-cid-t5cikg7z>Area local para revisar rascunhos antes de qualquer publicacao.</p> ${drafts.length > 0 ? renderTemplate`<ul class="drafts" data-astro-cid-t5cikg7z> ${drafts.map((post) => renderTemplate`<li class="draft" data-astro-cid-t5cikg7z> <a${addAttribute(`/preview/rascunhos/${post.id}/`, "href")} data-astro-cid-t5cikg7z> ${post.data.heroImage && renderTemplate`<img${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-t5cikg7z>`} <div class="draft-body" data-astro-cid-t5cikg7z> <h2 data-astro-cid-t5cikg7z>${post.data.title}</h2> <p data-astro-cid-t5cikg7z>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-t5cikg7z": true })}</p> <p data-astro-cid-t5cikg7z>${post.data.description}</p> ${post.data.tags && renderTemplate`<div class="tags" data-astro-cid-t5cikg7z> ${post.data.tags.slice(0, 8).map((tag) => renderTemplate`<span class="tag" data-astro-cid-t5cikg7z>${tag}</span>`)} </div>`} </div> </a> </li>`)} </ul>` : renderTemplate`<div class="empty" data-astro-cid-t5cikg7z>Nenhum rascunho encontrado.</div>`} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-t5cikg7z": true })} </body></html>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/preview/rascunhos/index.astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/preview/rascunhos/index.astro";
const $$url = "/preview/rascunhos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
