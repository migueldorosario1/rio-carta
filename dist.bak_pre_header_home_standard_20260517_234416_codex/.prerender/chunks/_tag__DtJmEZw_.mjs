import { m as maybeRenderHead, r as renderComponent, c as addAttribute, a as renderTemplate, d as defineStyleVars, b as renderHead } from './prerender_Dcnb_jXB.mjs';
import { g as getCollection } from './_astro_content_BN_2x3wu.mjs';
import { b as $$Image, l as logoImg, $ as $$BaseHead, a as $$Footer } from './logo-transparent_KzITVDBx.mjs';
import { $ as $$FormattedDate } from './FormattedDate_Dg9c7vNg.mjs';
import { v as vereadoresRj, r as renderScript, a as rjRegions, d as deputadosEstaduaisEleitosRj, p as parlamentaresRj, b as allRjTagSlugs, c as rioZones, t as topicTags, $ as $$Header } from './Header_kq6MJP3m.mjs';
import { c as createComponent, a as SITE_TITLE } from './consts_CWaf3kdj.mjs';
import 'piccolore';
import { s as sortPostsWithSticky } from './stickyPosts_HMWcwDgj.mjs';

const $$HeaderCidade = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeaderCidade;
  const { cityName, citySlug } = Astro2.props;
  const cidadeVereadores = (vereadoresRj.cidades ?? []).find(
    (c) => c.cidadeSlug === citySlug
  );
  const vereadores = cidadeVereadores?.vereadores ?? [];
  return renderTemplate`${maybeRenderHead()}<header class="premium-header header-article" data-astro-cid-bku5yd4j> <nav class="navbar" data-astro-cid-bku5yd4j> <div class="header-left" data-astro-cid-bku5yd4j> <a href="/" class="logo-link" data-astro-cid-bku5yd4j> ${renderComponent($$result, "Image", $$Image, { "src": logoImg, "alt": SITE_TITLE, "width": 525, "height": 225, "class": "logo-img", "data-astro-cid-bku5yd4j": true })} </a> </div> <div class="header-right" data-astro-cid-bku5yd4j> <div class="row-slogan" data-astro-cid-bku5yd4j> <span class="slogan-main" data-astro-cid-bku5yd4j>${cityName}</span> <span class="slogan-sub" data-astro-cid-bku5yd4j>Portal da Cidade • Rio Carta</span> </div> <div class="row-menu" data-astro-cid-bku5yd4j> <div class="nav-links" data-astro-cid-bku5yd4j> <div class="nav-item dropdown" data-astro-cid-bku5yd4j> <button class="dropbtn" data-astro-cid-bku5yd4j>Geografia <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bku5yd4j><path d="M6 9l6 6 6-6" data-astro-cid-bku5yd4j></path></svg></button> <div class="dropdown-content" data-astro-cid-bku5yd4j> <a${addAttribute(`/tags/historia-${citySlug}`, "href")} class="submenu-title" style="text-decoration: none; display: block;" data-astro-cid-bku5yd4j>História</a> <a${addAttribute(`/tags/economia-${citySlug}`, "href")} class="submenu-title" style="text-decoration: none; display: block;" data-astro-cid-bku5yd4j>Economia</a> <a${addAttribute(`/tags/mapa-${citySlug}`, "href")} class="submenu-title" style="text-decoration: none; display: block;" data-astro-cid-bku5yd4j>Mapa</a> <a${addAttribute(`/tags/populacao-${citySlug}`, "href")} class="submenu-title" style="text-decoration: none; display: block;" data-astro-cid-bku5yd4j>População</a> </div> </div> <div class="nav-item dropdown" data-astro-cid-bku5yd4j> <button class="dropbtn" data-astro-cid-bku5yd4j>Eleições <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bku5yd4j><path d="M6 9l6 6 6-6" data-astro-cid-bku5yd4j></path></svg></button> <div class="dropdown-content" data-astro-cid-bku5yd4j> <a${addAttribute(`/tags/prefeitura-${citySlug}`, "href")} class="submenu-title" style="text-decoration: none; display: block;" data-astro-cid-bku5yd4j>Prefeito Atual</a> <div class="dropdown-submenu" data-astro-cid-bku5yd4j> <span class="submenu-title" data-astro-cid-bku5yd4j>Vereadores <span data-astro-cid-bku5yd4j>▶</span></span> <div class="submenu-content" style="min-width:280px;" data-astro-cid-bku5yd4j> <a${addAttribute(`/tags/camara-${citySlug}`, "href")} style="font-weight:700;border-bottom:1px solid #eee;margin-bottom:0.25rem;color:#0052D4;" data-astro-cid-bku5yd4j>Ver todos os vereadores →</a> ${vereadores.map((v) => renderTemplate`<span style="display:block;padding:0.4rem 0.6rem;border-radius:6px;transition:background 0.15s;" onmouseover="this.style.background='#f0f2f5'" onmouseout="this.style.background='transparent'" data-astro-cid-bku5yd4j> ${v.nome} <span style="background:#e6eaf0;color:#2c3e50;padding:0.1rem 0.4rem;border-radius:4px;font-size:0.75rem;font-weight:700;margin-left:0.25rem;" data-astro-cid-bku5yd4j>${v.partido}</span> <small style="display:block;font-size:0.75rem;color:#888;margin-top:0.15rem;" data-astro-cid-bku5yd4j>${v.votosNominaisValidos?.toLocaleString("pt-BR")} votos · ${v.percentualMunicipio?.toFixed(1)}%</small> </span>`)} </div> </div> </div> </div> <div class="nav-item dropdown" data-astro-cid-bku5yd4j> <button class="dropbtn" data-astro-cid-bku5yd4j>Serviços <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bku5yd4j><path d="M6 9l6 6 6-6" data-astro-cid-bku5yd4j></path></svg></button> <div class="dropdown-content" data-astro-cid-bku5yd4j> <div class="dropdown-submenu" data-astro-cid-bku5yd4j> <span class="submenu-title" data-astro-cid-bku5yd4j>Telefones Úteis <span data-astro-cid-bku5yd4j>▶</span></span> <div class="submenu-content" data-astro-cid-bku5yd4j> <a${addAttribute(`/tags/saude-${citySlug}`, "href")} data-astro-cid-bku5yd4j>Posto de Saúde</a> <a${addAttribute(`/tags/eletrica-${citySlug}`, "href")} data-astro-cid-bku5yd4j>Companhia Elétrica</a> <a${addAttribute(`/tags/assistencia-${citySlug}`, "href")} data-astro-cid-bku5yd4j>Assistência Social</a> <a${addAttribute(`/tags/imprensa-${citySlug}`, "href")} data-astro-cid-bku5yd4j>Assessoria de Imprensa</a> <a${addAttribute(`/tags/delegacia-${citySlug}`, "href")} data-astro-cid-bku5yd4j>Delegacia de Polícia</a> </div> </div> <div class="dropdown-submenu" data-astro-cid-bku5yd4j> <span class="submenu-title" data-astro-cid-bku5yd4j>Lazer <span data-astro-cid-bku5yd4j>▶</span></span> <div class="submenu-content" data-astro-cid-bku5yd4j> <a${addAttribute(`/tags/bares-${citySlug}`, "href")} data-astro-cid-bku5yd4j>Bares da Cidade</a> </div> </div> </div> </div> </div> </div> <div class="row-social" data-astro-cid-bku5yd4j> <div class="social-links-header" data-astro-cid-bku5yd4j> <a href="/" title="Voltar ao Rio Carta" style="display: flex; align-items: center; gap: 0.5rem; font-weight: 600; text-decoration: none; font-size: 0.95rem; background: #f0f2f5; padding: 0.5rem 1rem; border-radius: 20px;" data-astro-cid-bku5yd4j> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bku5yd4j><line x1="19" y1="12" x2="5" y2="12" data-astro-cid-bku5yd4j></line><polyline points="12 19 5 12 12 5" data-astro-cid-bku5yd4j></polyline></svg>
Voltar ao portal principal
</a> </div> </div> </div> </nav> </header>  ${renderScript($$result, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/HeaderCidade.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/HeaderCidade.astro", void 0);

async function getStaticPaths() {
  const cityPoliticalSlugs = rjRegions.flatMap(
    (region) => region.items.flatMap((city) => [
      `camara-${city.slug}`,
      `prefeitura-${city.slug}`,
      `turismo-${city.slug}`,
      `bares-${city.slug}`
    ])
  );
  const regionTurismoSlugs = rjRegions.map((region) => `turismo-${region.slug}`);
  const culturaSlugs = ["cultura-shows", "cultura-teatro", "cultura-cinema", "cultura-exposicoes"];
  const parlamentaresSlugs = [
    "deputados-estaduais",
    "parlamentares-federais-rj",
    "deputados-federais-rj",
    "senadores-rj",
    ...(deputadosEstaduaisEleitosRj.deputados ?? []).map((p) => p.slug),
    ...(parlamentaresRj.deputadosFederais ?? []).map((p) => p.slug),
    ...(parlamentaresRj.senadores ?? []).map((p) => p.slug)
  ];
  const opiniaoSlugs = [
    "opiniao-diaria",
    "colunista-heitor-vasques",
    "colunista-marilia-caleffi",
    "colunista-padre-nicodemo-esperanca",
    "colunista-renato-bisneto",
    "colunista-joana-castro-ribeiro",
    "colunista-marco-aurelio-mansur",
    "colunista-gisele-tamayo",
    "colunista-ronaldo-quirino",
    "colunista-sandra-lessa-bittencourt",
    "colunista-diogo-caminha",
    "colunista-beatriz-setubal-andrade",
    "colunista-edmilson-cabral"
  ];
  const staticNavTags = [
    "baixada",
    "buzios",
    "campos",
    "nacional",
    "geopolitica",
    ...allRjTagSlugs,
    ...cityPoliticalSlugs,
    ...regionTurismoSlugs,
    ...culturaSlugs,
    ...parlamentaresSlugs,
    ...opiniaoSlugs
  ];
  const allPosts = (await getCollection("blog")).filter((post) => !post.data.draft);
  const uniqueTags = [.../* @__PURE__ */ new Set([...allPosts.map((post) => post.data.tags || []).flat(), ...staticNavTags])];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags?.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$tag;
  const cidadesComVereadores = vereadoresRj.cidades ?? [];
  const cidadeVereadoresMap = new Map(cidadesComVereadores.map((c) => [c.cidadeSlug, c]));
  const deputadosEstaduaisEleitos = deputadosEstaduaisEleitosRj.deputados ?? [];
  const deputadosFederais = parlamentaresRj.deputadosFederais ?? [];
  const senadores = parlamentaresRj.senadores ?? [];
  const parlamentaresMap = new Map(
    [
      ...deputadosEstaduaisEleitos.map((p) => [p.slug, { title: p.partido ? `Deputado estadual · ${p.partido}` : "Deputado estadual", subtitle: p.nome, icon: "🏛️", color: "linear-gradient(135deg, #141e30, #d32f2f)" }]),
      ...deputadosFederais.map((p) => [p.slug, { title: p.partido ? `Deputado federal · ${p.partido}` : "Deputado federal", subtitle: p.nome, icon: "🏛️", color: "linear-gradient(135deg, #141e30, #2c3e50)" }]),
      ...senadores.map((p) => [p.slug, { title: p.partido ? `Senador · ${p.partido}` : "Senador", subtitle: p.nome, icon: "🏛️", color: "linear-gradient(135deg, #2c3e50, #3498db)" }])
    ]
  );
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const sortedPosts = sortPostsWithSticky(posts);
  const taxonomyMeta = new Map([
    ...rioZones.flatMap((group) => [
      [group.slug, { title: "Rio Capital", subtitle: group.label, icon: "📍", color: "linear-gradient(135deg, #0052D4, #4364F7)" }],
      ...group.items.map((item) => [item.slug, { title: group.label, subtitle: item.label, icon: "📍", color: "linear-gradient(135deg, #0052D4, #4364F7)" }])
    ]),
    ...rjRegions.flatMap((group) => [
      [group.slug, { title: "Estado do Rio", subtitle: group.label, icon: "📍", color: "linear-gradient(135deg, #2c3e50, #3498db)" }],
      ...group.items.map((item) => [item.slug, { title: group.label, subtitle: item.label, icon: "📍", color: "linear-gradient(135deg, #2c3e50, #3498db)" }])
    ]),
    ...topicTags.map((item) => [item.slug, { title: "Rio Carta", subtitle: item.label, icon: "🗞️", color: "linear-gradient(135deg, #141e30, #d32f2f)" }])
  ]);
  const regionMap = {
    "rio-de-janeiro": { title: "Região Metropolitana", subtitle: "Rio de Janeiro", icon: "🏙️", color: "linear-gradient(135deg, #0052D4, #4364F7)" },
    "niteroi": { title: "Região Metropolitana", subtitle: "Niterói", icon: "🌉", color: "linear-gradient(135deg, #0052D4, #4364F7)" },
    "sao-goncalo": { title: "Região Metropolitana", subtitle: "São Gonçalo", icon: "🏭", color: "linear-gradient(135deg, #0052D4, #4364F7)" },
    "baixada": { title: "Região Metropolitana", subtitle: "Baixada Fluminense", icon: "🚆", color: "linear-gradient(135deg, #f7971e, #ffd200)" },
    "cabo-frio": { title: "Região dos Lagos", subtitle: "Cabo Frio", icon: "🏖️", color: "linear-gradient(135deg, #1cb5e0, #000046)" },
    "buzios": { title: "Região dos Lagos", subtitle: "Búzios", icon: "🍹", color: "linear-gradient(135deg, #1cb5e0, #000046)" },
    "arraial-do-cabo": { title: "Região dos Lagos", subtitle: "Arraial do Cabo", icon: "🤿", color: "linear-gradient(135deg, #1cb5e0, #000046)" },
    "campos": { title: "Norte Fluminense", subtitle: "Campos dos Goytacazes", icon: "🌾", color: "linear-gradient(135deg, #56ab2f, #a8e063)" },
    "macae": { title: "Norte Fluminense", subtitle: "Macaé", icon: "🛢️", color: "linear-gradient(135deg, #56ab2f, #a8e063)" },
    "volta-redonda": { title: "Sul Fluminense", subtitle: "Volta Redonda", icon: "⚙️", color: "linear-gradient(135deg, #cb2d3e, #ef473a)" },
    "resende": { title: "Sul Fluminense", subtitle: "Resende", icon: "⛰️", color: "linear-gradient(135deg, #cb2d3e, #ef473a)" },
    "petropolis": { title: "Região Serrana", subtitle: "Petrópolis", icon: "👑", color: "linear-gradient(135deg, #11998e, #38ef7d)" },
    "teresopolis": { title: "Região Serrana", subtitle: "Teresópolis", icon: "🏔️", color: "linear-gradient(135deg, #11998e, #38ef7d)" },
    "nova-friburgo": { title: "Região Serrana", subtitle: "Nova Friburgo", icon: "❄️", color: "linear-gradient(135deg, #11998e, #38ef7d)" },
    "angra-dos-reis": { title: "Costa Verde", subtitle: "Angra dos Reis", icon: "🛥️", color: "linear-gradient(135deg, #00b4db, #0083b0)" },
    "paraty": { title: "Costa Verde", subtitle: "Paraty", icon: "🏘️", color: "linear-gradient(135deg, #00b4db, #0083b0)" },
    "nacional": { title: "Brasil", subtitle: "Nacional", icon: "🇧🇷", color: "linear-gradient(135deg, #009c3b, #ffdf00)" },
    "geopolitica": { title: "Mundo", subtitle: "Internacional", icon: "🌍", color: "linear-gradient(135deg, #2c3e50, #3498db)" },
    "eleicoes-2026": { title: "Política", subtitle: "Eleições 2026", icon: "🗳️", color: "linear-gradient(135deg, #141e30, #d32f2f)" },
    "deputados-estaduais": { title: "Política RJ", subtitle: "Deputados Estaduais", icon: "🏛️", color: "linear-gradient(135deg, #141e30, #d32f2f)" },
    "parlamentares-federais-rj": { title: "Política RJ", subtitle: "Parlamentares Federais", icon: "🏛️", color: "linear-gradient(135deg, #141e30, #2c3e50)" },
    "deputados-federais-rj": { title: "Política RJ", subtitle: "Deputados Federais", icon: "🏛️", color: "linear-gradient(135deg, #141e30, #2c3e50)" },
    "senadores-rj": { title: "Política RJ", subtitle: "Senadores", icon: "🏛️", color: "linear-gradient(135deg, #2c3e50, #3498db)" }
  };
  const citySlugToLabel = new Map(rjRegions.flatMap((region) => region.items.map((city) => [city.slug, city.label])));
  const regionSlugToLabel = new Map(rjRegions.map((region) => [region.slug, region.label]));
  const colunistasNomes = {
    "colunista-heitor-vasques": "Heitor Vasques",
    "colunista-marilia-caleffi": "Marília Caleffi",
    "colunista-padre-nicodemo-esperanca": "Padre Nicodemo Esperança",
    "colunista-renato-bisneto": "Renato Bisneto",
    "colunista-joana-castro-ribeiro": "Joana Castro Ribeiro",
    "colunista-marco-aurelio-mansur": "Marco Aurélio Mansur",
    "colunista-gisele-tamayo": "Gisele Tamayo",
    "colunista-ronaldo-quirino": "Ronaldo Quirino",
    "colunista-sandra-lessa-bittencourt": "Sandra Lessa Bittencourt",
    "colunista-diogo-caminha": "Diogo Caminha",
    "colunista-beatriz-setubal-andrade": "Beatriz Setúbal Andrade",
    "colunista-edmilson-cabral": "Edmilson Cabral"
  };
  const culturaLabels = {
    "cultura-shows": "Shows",
    "cultura-teatro": "Teatro",
    "cultura-cinema": "Cinema",
    "cultura-exposicoes": "Exposições"
  };
  function buildCouncilMeta(tag2) {
    if (tag2.startsWith("camara-")) {
      const citySlug = tag2.replace(/^camara-/, "");
      const cityLabel = citySlugToLabel.get(citySlug);
      if (cityLabel) {
        return { title: "Câmara de Vereadores", subtitle: cityLabel, icon: "🏛️", color: "linear-gradient(135deg, #141e30, #2c3e50)" };
      }
    }
    if (tag2.startsWith("prefeitura-")) {
      const citySlug = tag2.replace(/^prefeitura-/, "");
      const cityLabel = citySlugToLabel.get(citySlug);
      if (cityLabel) {
        return { title: "Prefeitura", subtitle: cityLabel, icon: "🏢", color: "linear-gradient(135deg, #2c3e50, #3498db)" };
      }
    }
    if (tag2.startsWith("turismo-")) {
      const subSlug = tag2.replace(/^turismo-/, "");
      const cityLabel = citySlugToLabel.get(subSlug) || regionSlugToLabel.get(subSlug);
      if (cityLabel) {
        return { title: "Turismo", subtitle: cityLabel, icon: "🏝️", color: "linear-gradient(135deg, #11998e, #38ef7d)" };
      }
    }
    if (tag2.startsWith("bares-")) {
      const citySlug = tag2.replace(/^bares-/, "");
      const cityLabel = citySlugToLabel.get(citySlug);
      if (cityLabel) {
        return { title: "Bares", subtitle: cityLabel, icon: "🍻", color: "linear-gradient(135deg, #b06ab3, #4568dc)" };
      }
    }
    if (culturaLabels[tag2]) {
      return { title: "Cultura", subtitle: culturaLabels[tag2], icon: "🎭", color: "linear-gradient(135deg, #ff5f6d, #ffc371)" };
    }
    if (tag2 === "opiniao-diaria") {
      return { title: "Opinião diária do portal", subtitle: "Miguel do Rosário", icon: "✍️", color: "linear-gradient(135deg, #232526, #414345)" };
    }
    if (colunistasNomes[tag2]) {
      return { title: "Coluna", subtitle: colunistasNomes[tag2], icon: "🖋️", color: "linear-gradient(135deg, #4b6cb7, #182848)" };
    }
    return null;
  }
  const meta = taxonomyMeta.get(tag) || regionMap[tag] || buildCouncilMeta(tag) || parlamentaresMap.get(tag) || { title: "Região do Estado", subtitle: tag.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "), icon: "📍", color: "linear-gradient(135deg, #2c3e50, #3498db)" };
  let cidadeCouncil;
  if (tag.startsWith("camara-")) {
    cidadeCouncil = cidadeVereadoresMap.get(tag.replace(/^camara-/, ""));
  }
  const deputadosEstaduaisRoster = tag === "deputados-estaduais" ? deputadosEstaduaisEleitos : [];
  const isCidade = citySlugToLabel.has(tag) || cidadeVereadoresMap.has(tag.replace(/^camara-/, ""));
  const $$definedVars = defineStyleVars([{ accentColor: meta.color }]);
  return renderTemplate`<html lang="pt-br" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${meta.subtitle} - Rio Carta`, "description": `Notícias sobre ${meta.subtitle}`, "data-astro-cid-tge3q7ae": true })}${renderHead()}</head> <body data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${isCidade ? renderTemplate`${renderComponent($$result, "HeaderCidade", $$HeaderCidade, { "cityName": meta.subtitle, "citySlug": tag, "data-astro-cid-tge3q7ae": true })}` : renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-tge3q7ae": true })}`} <main data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> <div class="tag-hero" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> <div class="tag-icon" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${meta.icon}</div> <h3 class="tag-title" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${meta.title}</h3> <h1 class="tag-subtitle" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${meta.subtitle}</h1> ${cidadeCouncil && renderTemplate`<p class="tag-counter" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${cidadeCouncil.total} vereadores eleitos em 2024</p>`} ${deputadosEstaduaisRoster.length > 0 && renderTemplate`<p class="tag-counter" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${deputadosEstaduaisRoster.length} deputados estaduais eleitos em 2022</p>`} </div> ${cidadeCouncil && renderTemplate`<section class="council-roster" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> <h2 class="roster-title" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>Vereadores eleitos — ${cidadeCouncil.cidade}</h2> <ul class="roster-list" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${cidadeCouncil.vereadores.map((v) => renderTemplate`<li class="roster-item" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> <span class="roster-name" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${v.nome} ${v.votosNominaisValidos != null && renderTemplate`<small class="roster-votes" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${v.votosNominaisValidos.toLocaleString("pt-BR")} votos${v.percentualMunicipio != null ? ` · ${v.percentualMunicipio.toFixed(2)}%` : ""}</small>`} </span> ${v.partido && renderTemplate`<span class="roster-party" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${v.partido}</span>`} </li>`)} </ul> </section>`} ${deputadosEstaduaisRoster.length > 0 && renderTemplate`<section class="council-roster" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> <h2 class="roster-title" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>Deputados estaduais eleitos — Rio de Janeiro</h2> <ul class="roster-list" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${deputadosEstaduaisRoster.map((deputado) => renderTemplate`<li class="roster-item" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> <span class="roster-name" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${deputado.nome} <small class="roster-votes" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${deputado.votos.toLocaleString("pt-BR")} votos · ${deputado.percentualEstado.toFixed(2)}% do total nominal estadual · nº ${deputado.numero} </small> </span> <span class="roster-party" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${deputado.partido}</span> </li>`)} </ul> </section>`} <section data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${sortedPosts.length ? renderTemplate`<ul data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${sortedPosts.map((post) => renderTemplate`<li data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${post.data.heroImage && renderTemplate`<img width="720" height="360"${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>`} <h4 class="post-title" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}>${post.data.title}</h4> <p class="date" data-astro-cid-tge3q7ae${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-tge3q7ae": true })} </p> </a> </li>`)} </ul>` : renderTemplate`<p${addAttribute(`${"text-align: center; font-size: 1.1rem; color: rgb(var(--gray));"}; ${$$definedVars}`, "style")} data-astro-cid-tge3q7ae>
A editoria está pronta. As próximas publicações aparecerão aqui automaticamente.
</p>`} </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-tge3q7ae": true })} </body></html>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
