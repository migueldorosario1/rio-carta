import { c as createComponent } from './consts_uJ-yawyY.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_8xY5cOPk.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DSfkW6gs.mjs';
import { $ as $$BlogPost } from './BlogPost_Ca6R2dg3.mjs';

async function getStaticPaths() {
  const drafts = (await getCollection("blog")).filter((post) => post.data.draft);
  return drafts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data, "noindex": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/preview/rascunhos/[...slug].astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/preview/rascunhos/[...slug].astro";
const $$url = "/preview/rascunhos/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
