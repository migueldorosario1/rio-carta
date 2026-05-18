import { c as createComponent } from './consts_CWaf3kdj.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_Dcnb_jXB.mjs';
import { $ as $$BlogPost } from './BlogPost_JT0jLQ5u.mjs';

const $$QuemSomos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Quem Somos", "description": "O Rio Carta é um portal de notícias dedicado exclusivamente ao Estado do Rio de Janeiro, idealizado pelo jornalista Miguel do Rosário.", "pubDate": /* @__PURE__ */ new Date("2026-05-13T13:00:00Z") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
O <strong>Rio Carta</strong> é um portal de notícias dedicado exclusivamente ao Estado do
		Rio de Janeiro. Idealizado pelo jornalista <strong>Miguel do Rosário</strong>, criador e
		editor do site <a href="https://www.ocafezinho.com/" target="_blank" rel="noopener">O Cafezinho</a>,
		o projeto nasce da vontade de oferecer um jornalismo focado na nossa região.
</p> <p>
Miguel do Rosário nasceu na capital fluminense em 1975 e, há 7 anos, escolheu a cidade de
		Niterói para viver. Ao lado dele, o site conta com o talento e a dedicação de cerca de
<strong>10 outros jornalistas</strong> que trabalham diariamente para manter o portal
		atualizado.
</p> <p>
Nosso maior objetivo é contribuir, através da informação e do debate público, para o
<strong>desenvolvimento econômico, social e cultural do Rio de Janeiro</strong>.
</p> <hr> <p> <strong>Contato:</strong> <a href="mailto:migueldorosario@gmail.com">migueldorosario@gmail.com</a> </p> ` })}`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/quem-somos.astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/quem-somos.astro";
const $$url = "/quem-somos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$QuemSomos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
