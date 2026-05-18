import { c as createComponent } from './consts_uJ-yawyY.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, a as renderTemplate, u as unescapeHTML, r as renderComponent, e as renderSlot, b as renderHead } from './prerender_8xY5cOPk.mjs';
import { a as $$Footer, $ as $$BaseHead } from './logo-transparent_DSE2ZYdT.mjs';
import { $ as $$FormattedDate } from './FormattedDate_B9Q68TxN.mjs';
import { $ as $$Header } from './Header_CFZGNN9G.mjs';
import 'clsx';
import { g as getCollection } from './_astro_content_DSfkW6gs.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const $$Interlinks = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<div class="interlinks-container" data-astro-cid-qeq62yiw> <h3 data-astro-cid-qeq62yiw>Leia também no Rio Carta:</h3> <ul data-astro-cid-qeq62yiw> ${posts.map((post) => renderTemplate`<li data-astro-cid-qeq62yiw> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-qeq62yiw> ${post.data.title} </a> </li>`)} </ul> </div>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/Interlinks.astro", void 0);

const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SocialShare;
  const { title, url } = Astro2.props;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const socialLinks = [
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20-%20${encodedUrl}`,
      icon: `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
      color: "#25D366"
    },
    {
      name: "X / Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
      color: "#000000"
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
      color: "#1877F2"
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      icon: `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
      color: "#26A5E4"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="social-share" data-astro-cid-luj3ckct> <span class="share-text" data-astro-cid-luj3ckct>Compartilhe:</span> <div class="share-buttons" data-astro-cid-luj3ckct> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="share-btn"${addAttribute(`Compartilhar no ${link.name}`, "aria-label")}${addAttribute(`Compartilhar no ${link.name}`, "title")}${addAttribute(`--btn-color: ${link.color};`, "style")} data-astro-cid-luj3ckct> <span class="icon" data-astro-cid-luj3ckct>${unescapeHTML(link.icon)}</span> </a>`)} </div> </div>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/SocialShare.astro", void 0);

const supabaseUrl = "https://qznsodqyfwhaouruhsbp.supabase.co";
const supabaseKey = "sb_publishable_yLB3sZINbJc3sY8tYD9mKQ_gQt3e7BF";
const supabase = createClient(supabaseUrl, supabaseKey);
function OpenComments({ postUrl }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchComments();
  }, [postUrl]);
  async function fetchComments() {
    setLoading(true);
    if (supabaseUrl.includes("sua-url-supabase")) {
      setError("Banco de dados (Supabase) aguardando configuração. Os comentários em breve estarão ativados.");
      setLoading(false);
      return;
    }
    const { data, error: error2 } = await supabase.from("comentarios").select("*").eq("post_url", postUrl).order("created_at", { ascending: true });
    if (error2) {
      console.error("Erro ao buscar comentários:", error2);
      setError("Erro ao carregar comentários do banco de dados.");
    } else {
      setComments(data || []);
      setError(null);
    }
    setLoading(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    if (supabaseUrl.includes("sua-url-supabase")) {
      setTimeout(() => {
        setComments([...comments, { id: Date.now(), nome: name, mensagem: message, created_at: (/* @__PURE__ */ new Date()).toISOString() }]);
        setName("");
        setMessage("");
        setSubmitting(false);
      }, 500);
      return;
    }
    const { data, error: error2 } = await supabase.from("comentarios").insert([
      { post_url: postUrl, nome: name, mensagem: message }
    ]).select();
    if (error2) {
      console.error("Erro ao inserir comentário:", error2);
      alert("Houve um erro ao enviar seu comentário. Tente novamente mais tarde.");
    } else if (data) {
      setComments([...comments, data[0]]);
      setName("");
      setMessage("");
    }
    setSubmitting(false);
  }
  function formatDate(isoString) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }
  return /* @__PURE__ */ jsxs("div", { className: "open-comments-section", style: { marginTop: "3rem", paddingTop: "2rem", borderTop: "2px solid rgba(0,0,0,0.1)" }, children: [
    /* @__PURE__ */ jsx("h2", { style: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#111" }, children: "Comentários" }),
    error && /* @__PURE__ */ jsx("div", { style: { background: "#fff3cd", color: "#856404", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }, children: error }),
    /* @__PURE__ */ jsx("div", { className: "comments-list", style: { marginBottom: "2rem" }, children: loading ? /* @__PURE__ */ jsx("p", { children: "Carregando comentários..." }) : comments.length === 0 && !error ? /* @__PURE__ */ jsx("p", { style: { color: "#666", fontStyle: "italic" }, children: "Seja o primeiro a comentar nesta matéria." }) : comments.map((comment) => /* @__PURE__ */ jsxs("div", { className: "comment-card", style: { background: "#f9f9f9", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }, children: [
        /* @__PURE__ */ jsx("strong", { style: { color: "#0052D4" }, children: comment.nome }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: "0.8rem", color: "#888" }, children: formatDate(comment.created_at) })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { margin: 0, color: "#333", lineHeight: 1.5, whiteSpace: "pre-wrap", fontFamily: "system-ui, sans-serif" }, children: comment.mensagem })
    ] }, comment.id)) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, style: { background: "#f4f7fb", padding: "1.5rem", borderRadius: "12px" }, children: [
      /* @__PURE__ */ jsx("h3", { style: { marginTop: 0, marginBottom: "1rem", fontSize: "1.1rem" }, children: "Deixe seu comentário (Aberto)" }),
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "1rem" }, children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", style: { display: "block", marginBottom: "0.5rem", fontWeight: "500" }, children: "Seu Nome" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "name",
            value: name,
            onChange: (e) => setName(e.target.value),
            required: true,
            placeholder: "Ex: João da Silva",
            style: { width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "1rem" }, children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "message", style: { display: "block", marginBottom: "0.5rem", fontWeight: "500" }, children: "Mensagem" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            value: message,
            onChange: (e) => setMessage(e.target.value),
            required: true,
            placeholder: "Escreva sua opinião sobre a matéria...",
            rows: 4,
            style: { width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid #ccc", resize: "vertical", boxSizing: "border-box" }
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: submitting,
          style: {
            background: "#0052D4",
            color: "white",
            padding: "0.8rem 1.5rem",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: submitting ? "not-allowed" : "pointer",
            opacity: submitting ? 0.7 : 1
          },
          children: submitting ? "Enviando..." : "Publicar Comentário"
        }
      )
    ] })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, noindex = false, tags = [] } = Astro2.props;
  const categoryLabels = /* @__PURE__ */ new Map([
    ["politica-rj", "Política RJ"],
    ["seguranca-publica", "Segurança Pública"],
    ["seguranca-publica-rj", "Segurança Pública RJ"],
    ["seguranca", "Segurança"],
    ["rede-social", "Rede Social"],
    ["redes-sociais", "Rede Social"],
    ["nacional", "Nacional"],
    ["internacional", "Internacional"],
    ["geopolitica", "Internacional"],
    ["transporte-mobilidade", "Transporte e Mobilidade"],
    ["educacao", "Educação"],
    ["saude", "Saúde"],
    ["cultura-carnaval", "Cultura e Carnaval"],
    ["economia-rj", "Economia RJ"],
    ["rio-favelas-e-comunidades", "Favelas e Comunidades"],
    ["favelas-comunidades", "Favelas e Comunidades"],
    ["rio-capital-centro", "Rio Capital - Centro"],
    ["rio-capital-zona-sul-grande-tijuca", "Rio Capital - Zona Sul e Grande Tijuca"],
    ["rio-capital-zona-norte", "Rio Capital - Zona Norte"],
    ["rio-capital-barra-recreio-jacarepagua", "Rio Capital - Barra, Recreio e Jacarepaguá"],
    ["rio-capital-zona-oeste", "Rio Capital - Zona Oeste"],
    ["regiao-metropolitana", "Região Metropolitana"],
    ["baixada-fluminense", "Baixada Fluminense"],
    ["regiao-serrana", "Região Serrana"],
    ["regiao-dos-lagos", "Região dos Lagos"],
    ["sul-fluminense-costa-verde", "Sul Fluminense e Costa Verde"],
    ["norte-noroeste-fluminense", "Norte/Noroeste Fluminense"],
    ["noroeste-fluminense", "Noroeste Fluminense"],
    ["macae-norte-fluminense", "Macaé e Norte Fluminense"],
    ["niteroi", "Niterói"],
    ["sao-goncalo", "São Gonçalo"],
    ["duque-de-caxias", "Duque de Caxias"],
    ["nova-iguacu", "Nova Iguaçu"],
    ["sao-joao-de-meriti", "São João de Meriti"],
    ["mage", "Magé"],
    ["petropolis", "Petrópolis"],
    ["teresopolis", "Teresópolis"],
    ["nova-friburgo", "Nova Friburgo"],
    ["cabo-frio", "Cabo Frio"],
    ["armacao-dos-buzios", "Armação dos Búzios"],
    ["arraial-do-cabo", "Arraial do Cabo"],
    ["saquarema", "Saquarema"],
    ["araruama", "Araruama"],
    ["macae", "Macaé"],
    ["campos-dos-goytacazes", "Campos dos Goytacazes"],
    ["volta-redonda", "Volta Redonda"],
    ["barra-mansa", "Barra Mansa"],
    ["angra-dos-reis", "Angra dos Reis"],
    ["paraty", "Paraty"],
    ["rio-de-janeiro", "Rio de Janeiro"]
  ]);
  const categoryPriority = [
    "politica-rj",
    "seguranca-publica-rj",
    "rede-social",
    "redes-sociais",
    "nacional",
    "internacional",
    "geopolitica",
    "seguranca-publica",
    "seguranca",
    "transporte-mobilidade",
    "educacao",
    "saude",
    "cultura-carnaval",
    "economia-rj",
    "rio-favelas-e-comunidades",
    "favelas-comunidades",
    "rio-capital-centro",
    "rio-capital-zona-sul-grande-tijuca",
    "rio-capital-zona-norte",
    "rio-capital-barra-recreio-jacarepagua",
    "rio-capital-zona-oeste",
    "regiao-metropolitana",
    "baixada-fluminense",
    "regiao-serrana",
    "regiao-dos-lagos",
    "sul-fluminense-costa-verde",
    "norte-noroeste-fluminense",
    "noroeste-fluminense",
    "macae-norte-fluminense",
    "niteroi",
    "sao-goncalo",
    "duque-de-caxias",
    "nova-iguacu",
    "sao-joao-de-meriti",
    "mage",
    "petropolis",
    "teresopolis",
    "nova-friburgo",
    "cabo-frio",
    "armacao-dos-buzios",
    "arraial-do-cabo",
    "saquarema",
    "araruama",
    "macae",
    "campos-dos-goytacazes",
    "volta-redonda",
    "barra-mansa",
    "angra-dos-reis",
    "paraty",
    "rio-de-janeiro"
  ];
  function formatTagLabel(slug) {
    return slug.split("-").filter(Boolean).map((word) => word.length <= 2 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  const normalizedTitle = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const categorySlug = categoryPriority.find((slug) => tags.includes(slug)) || (normalizedTitle.includes("rede social") ? "rede-social" : void 0) || (normalizedTitle.includes("seguranca") ? "seguranca-publica" : void 0) || tags.find((tag) => categoryLabels.has(tag)) || tags.find((tag) => tag !== "rio-de-janeiro") || "rio-de-janeiro";
  const categoryLabel = categoryLabels.get(categorySlug) || formatTagLabel(categorySlug);
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR" data-astro-cid-bvzihdzo> <head>', "", '<script type="application/ld+json">', "<\/script>", "</head> <body data-astro-cid-bvzihdzo> ", ' <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ', ' </div> <div class="social-top" style="text-align: center; margin-top: 1rem;" data-astro-cid-bvzihdzo> ', ' </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <a class="category"', " data-astro-cid-bvzihdzo>", '</a> <div class="date" data-astro-cid-bvzihdzo> ', " ", " </div> <h1 data-astro-cid-bvzihdzo>", "</h1> <hr data-astro-cid-bvzihdzo> </div> ", ' <div class="category-footer" data-astro-cid-bvzihdzo> <span class="category-footer-label" data-astro-cid-bvzihdzo>Categoria:</span> <a class="category category-footer-link"', " data-astro-cid-bvzihdzo>", '</a> </div> <div class="follow-us-footer" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(var(--gray-light), 0.5); display: flex; align-items: center; gap: 1rem;" data-astro-cid-bvzihdzo> <span style="font-weight: bold; color: rgb(var(--gray)); font-size: 0.9em; text-transform: uppercase; letter-spacing: 0.5px;" data-astro-cid-bvzihdzo>Siga nossas redes:</span> <div style="display: flex; gap: 1rem; align-items: center;" data-astro-cid-bvzihdzo> <a href="https://x.com/riocartanoticia" target="_blank" title="X" style="color: #555; transition: color 0.2s;" data-astro-cid-bvzihdzo><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-bvzihdzo><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-bvzihdzo></path></svg></a> <a href="https://www.instagram.com/riocartaoficial/" target="_blank" title="Instagram" style="color: #555; transition: color 0.2s;" data-astro-cid-bvzihdzo><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bvzihdzo><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-bvzihdzo></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-astro-cid-bvzihdzo></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-astro-cid-bvzihdzo></line></svg></a> <a href="https://www.facebook.com/riocartanoticia/?locale=pt_BR" target="_blank" title="Facebook" style="color: #555; transition: color 0.2s;" data-astro-cid-bvzihdzo><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" data-astro-cid-bvzihdzo><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-astro-cid-bvzihdzo></path></svg></a> </div> </div> </div> <div class="prose" style="padding-top: 0;" data-astro-cid-bvzihdzo> ', ' </div> <div class="prose" style="padding-top: 0;" data-astro-cid-bvzihdzo> ', " ", " </div> </article> </main> ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": heroImage, "data-astro-cid-bvzihdzo": true }), noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "image": heroImage ? [new URL(heroImage, Astro2.url).href] : [],
    "datePublished": pubDate.toISOString(),
    "dateModified": updatedDate ? updatedDate.toISOString() : pubDate.toISOString(),
    "author": [{
      "@type": "Organization",
      "name": "Rio Carta",
      "url": "https://riocarta.com.br"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Rio Carta",
      "logo": {
        "@type": "ImageObject",
        "url": new URL("/favicon.png", Astro2.url).href
      }
    }
  })), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true }), heroImage && renderTemplate`<img width="1020" height="510"${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`, renderComponent($$result, "SocialShare", $$SocialShare, { "title": title, "url": Astro2.url.href, "data-astro-cid-bvzihdzo": true }), addAttribute(`/tags/${categorySlug}/`, "href"), categoryLabel, renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true }), updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`, title, renderSlot($$result, $$slots["default"]), addAttribute(`/tags/${categorySlug}/`, "href"), categoryLabel, renderComponent($$result, "Interlinks", $$Interlinks, { "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "SocialShare", $$SocialShare, { "title": title, "url": Astro2.url.href, "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "OpenComments", OpenComments, { "client:load": true, "postUrl": Astro2.url.pathname, "client:component-hydration": "load", "client:component-path": "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/OpenComments.jsx", "client:component-export": "default", "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true }));
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
