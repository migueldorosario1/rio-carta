import { d as defineStyleVars, c as addAttribute, r as renderComponent, b as renderHead, a as renderTemplate } from './prerender_Dcnb_jXB.mjs';
import { g as getCollection } from './_astro_content_BN_2x3wu.mjs';
import { $ as $$BaseHead, a as $$Footer } from './logo-transparent_KzITVDBx.mjs';
import { $ as $$FormattedDate } from './FormattedDate_Dg9c7vNg.mjs';
import { $ as $$Header } from './Header_kq6MJP3m.mjs';
import { s as sortPostsWithSticky } from './stickyPosts_HMWcwDgj.mjs';
import { c as createComponent } from './consts_CWaf3kdj.mjs';

async function getStaticPaths() {
  return [
    { params: { slug: "geral" } },
    { params: { slug: "politica" } },
    { params: { slug: "economia" } },
    { params: { slug: "seguranca" } },
    { params: { slug: "lazer" } },
    { params: { slug: "servicos" } }
  ];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const MACRO_LABELS = {
    geral: {
      titulo: "Geral",
      subtitulo: "Notícias gerais do Rio",
      cor: "linear-gradient(135deg, #0052D4, #4364F7)",
      icon: "📰"
    },
    politica: {
      titulo: "Política",
      subtitulo: "Política e poder no estado do Rio",
      cor: "linear-gradient(135deg, #141e30, #d32f2f)",
      icon: "🏛️"
    },
    economia: {
      titulo: "Economia",
      subtitulo: "Finanças, mercado, negócios e indicadores",
      cor: "linear-gradient(135deg, #11998e, #38ef7d)",
      icon: "💼"
    },
    seguranca: {
      titulo: "Segurança",
      subtitulo: "Polícia, defesa e segurança pública no Rio",
      cor: "linear-gradient(135deg, #232526, #414345)",
      icon: "🚓"
    },
    lazer: {
      titulo: "Lazer",
      subtitulo: "Cultura, esporte, gastronomia e vida no Rio",
      cor: "linear-gradient(135deg, #ff5f6d, #ffc371)",
      icon: "🎉"
    },
    servicos: {
      titulo: "Serviços",
      subtitulo: "Utilidade pública, avisos e editais",
      cor: "linear-gradient(135deg, #4b6cb7, #182848)",
      icon: "🗂️"
    }
  };
  const { slug } = Astro2.params;
  const meta = MACRO_LABELS[slug ?? "geral"] ?? MACRO_LABELS.geral;
  const allPosts = (await getCollection("blog")).filter((post) => !post.data.draft);
  const filteredPosts = allPosts.filter((post) => post.data.categoria_macro === slug);
  const sortedPosts = sortPostsWithSticky(filteredPosts);
  const $$definedVars = defineStyleVars([{ accentColor: meta.cor }]);
  return renderTemplate`<html lang="pt-br" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${meta.titulo} - Rio Carta`, "description": meta.subtitulo, "data-astro-cid-5ozsm7yi": true })}${renderHead()}</head> <body data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5ozsm7yi": true })} <main data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> <div class="macro-hero" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> <div class="macro-icon" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}>${meta.icon}</div> <h3 class="macro-title" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}>Editoria</h3> <h1 class="macro-subtitle" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}>${meta.titulo}</h1> <p class="macro-counter" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}>${sortedPosts.length} ${sortedPosts.length === 1 ? "matéria publicada" : "matérias publicadas"}</p> </div> <section data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> ${sortedPosts.length ? renderTemplate`<ul data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> ${sortedPosts.map((post) => renderTemplate`<li data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> ${post.data.heroImage && renderTemplate`<img width="720" height="360"${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}>`} <h4 class="post-title" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}>${post.data.title}</h4> <p class="date" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5ozsm7yi": true })} </p> </a> </li>`)} </ul>` : renderTemplate`<p class="empty-state" data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}>
A editoria está pronta. Em breve, matérias com a categoria <strong data-astro-cid-5ozsm7yi${addAttribute($$definedVars, "style")}>${meta.titulo}</strong> aparecerão aqui automaticamente.
</p>`} </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5ozsm7yi": true })} </body></html>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/macro/[slug].astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/macro/[slug].astro";
const $$url = "/macro/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
