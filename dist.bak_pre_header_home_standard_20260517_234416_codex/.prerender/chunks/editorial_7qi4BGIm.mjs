import { c as createComponent } from './consts_CWaf3kdj.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_Dcnb_jXB.mjs';
import { $ as $$BlogPost } from './BlogPost_JT0jLQ5u.mjs';

const $$Editorial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Editorial", "description": "O Rio Carta nasce com a missão de contribuir de forma propositiva para o debate público sobre os desafios e oportunidades do Estado do Rio de Janeiro.", "pubDate": /* @__PURE__ */ new Date("2026-05-13T13:00:00Z") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
O Estado do Rio de Janeiro precisa se desenvolver e reencontrar a sua vocação de grandeza.
		Acreditamos profundamente que, para que isso aconteça, a <strong>cidadania precisa ser
		ativada</strong> e participar ativamente dos debates sobre o nosso futuro.
</p> <p>
É por isso que é fundamental termos um site especializado e focado estritamente nas
<strong>questões fluminenses</strong>. Sabemos que já existem outros veículos importantes
		cobrindo o estado, mas entendemos que é essencial termos mais uma <strong>voz independente e
		qualificada</strong> nesse cenário.
</p> <p>
O <strong>Rio Carta</strong> nasce com essa missão: queremos contribuir de forma propositiva
		para o debate público, <strong>jogar luz sobre os nossos desafios regionais</strong> e
		ajudar a construir um Rio de Janeiro melhor para todos os seus cidadãos.
</p> ` })}`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/editorial.astro", void 0);

const $$file = "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/pages/editorial.astro";
const $$url = "/editorial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Editorial,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
