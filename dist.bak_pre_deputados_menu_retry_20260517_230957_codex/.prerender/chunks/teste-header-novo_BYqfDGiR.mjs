import { c as createComponent, a as SITE_TITLE } from './consts_D-FzWZZ2.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, c as addAttribute, a as renderTemplate, b as renderHead } from './prerender_B9NVetgR.mjs';
import { b as $$Image, l as logoImg, $ as $$BaseHead, a as $$Footer } from './logo-transparent_CXlXanSv.mjs';

const $$HeaderTesteMacro = createComponent(($$result, $$props, $$slots) => {
  const macroItems = [
    { label: "Geral", slug: "geral" },
    { label: "Política", slug: "politica" },
    { label: "Lazer", slug: "lazer" },
    { label: "Segurança", slug: "seguranca" },
    { label: "Economia", slug: "economia" },
    { label: "Serviços", slug: "servicos" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="test-header" data-astro-cid-of5hnsog> <div class="test-header__inner" data-astro-cid-of5hnsog> <a href="/" class="test-header__logo" aria-label="Rio Carta" data-astro-cid-of5hnsog> ${renderComponent($$result, "Image", $$Image, { "src": logoImg, "alt": SITE_TITLE, "width": 280, "height": 120, "class": "test-header__logo-img", "data-astro-cid-of5hnsog": true })} </a> <div class="test-header__content" data-astro-cid-of5hnsog> <div class="test-header__topline" data-astro-cid-of5hnsog> <span data-astro-cid-of5hnsog>Portal de notícias do Rio de Janeiro</span> <span data-astro-cid-of5hnsog>por Miguel do Rosário</span> </div> <nav class="test-header__macros" aria-label="Macroeditorias em teste" data-astro-cid-of5hnsog> ${macroItems.map((item) => renderTemplate`<a${addAttribute(`/macro/${item.slug}`, "href")}${addAttribute(`macro-${item.slug}`, "data-testid")} data-astro-cid-of5hnsog>${item.label}</a>`)} </nav> <nav class="test-header__links" aria-label="Menu secundário em teste" data-astro-cid-of5hnsog> <a href="/" data-astro-cid-of5hnsog>Início</a> <a href="/tags/rio-de-janeiro" data-astro-cid-of5hnsog>Geonotícias</a> <a href="/tags/politica-rj" data-astro-cid-of5hnsog>Política RJ</a> <a href="/tags/seguranca-publica" data-astro-cid-of5hnsog>Segurança Pública</a> <a href="/tags/cultura-carnaval" data-astro-cid-of5hnsog>Cultura</a> <a href="/tags/economia-rj" data-astro-cid-of5hnsog>Economia RJ</a> </nav> </div> </div> </header>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/HeaderTesteMacro.astro", void 0);

const $$TesteHeaderNovo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TesteHeaderNovo;
  const title = `Teste de header - ${SITE_TITLE}`;
  const description = "Página isolada para validar o novo header do Rio Carta antes de qualquer mudança na produção.";
  return renderTemplate`<html lang="pt-BR" data-astro-cid-r2g6owwd> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-r2g6owwd": true })}<meta name="robots" content="noindex,nofollow">${renderHead()}</head> <body data-astro-cid-r2g6owwd> ${renderComponent($$result, "HeaderTesteMacro", $$HeaderTesteMacro, { "data-astro-cid-r2g6owwd": true })} <main data-astro-cid-r2g6owwd> <div class="test-note" data-astro-cid-r2g6owwd>
Página de teste isolada. Este header não substitui o header de produção e os botões ainda são apenas validação visual.
</div> <section class="preview-grid" aria-label="Prévia da página com novo header" data-astro-cid-r2g6owwd> <article class="preview-block" data-astro-cid-r2g6owwd> <h1 data-astro-cid-r2g6owwd>Rio Carta testa novo cabeçalho com macroeditorias visíveis</h1> <p data-astro-cid-r2g6owwd>
A proposta organiza a navegação principal em seis portas de entrada: Geral, Política, Lazer, Segurança,
						Economia e Serviços.
</p> <p data-astro-cid-r2g6owwd>
Depois da validação visual, o filtro real deve ser implementado em outro sprint usando metadados do Astro.
</p> </article> <aside class="preview-block" data-astro-cid-r2g6owwd> <h2 data-astro-cid-r2g6owwd>Critérios do teste</h2> <ul class="sample-list" data-astro-cid-r2g6owwd> <li data-astro-cid-r2g6owwd>Logo com boa presença no primeiro olhar</li> <li data-astro-cid-r2g6owwd>Botões cabem em desktop e mobile</li> <li data-astro-cid-r2g6owwd>Hierarquia clara entre macroeditorias e menu secundário</li> <li data-astro-cid-r2g6owwd>Nenhuma mudança no header vivo</li> </ul> </aside> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-r2g6owwd": true })} </body></html>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/teste-header-novo.astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/teste-header-novo.astro";
const $$url = "/teste-header-novo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TesteHeaderNovo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
