import { c as createComponent } from './consts_D-FzWZZ2.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, a as renderTemplate } from './prerender_B9NVetgR.mjs';
import 'clsx';

const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
