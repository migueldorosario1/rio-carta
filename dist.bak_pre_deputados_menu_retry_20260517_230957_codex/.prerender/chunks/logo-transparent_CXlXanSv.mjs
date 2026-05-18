import { c as createComponent, a as SITE_TITLE } from './consts_D-FzWZZ2.mjs';
import 'piccolore';
import { A as AstroError, I as ImageMissingAlt, m as maybeRenderHead, c as addAttribute, s as spreadAttributes, a as renderTemplate, F as FontFamilyNotFound, u as unescapeHTML, r as renderComponent } from './prerender_B9NVetgR.mjs';
import { r as resolveSrc, i as isESMImportedImage, g as getImage$1 } from './deterministic-string_tYHiSB14.mjs';
import 'clsx';
import * as mime from 'mrmime';

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/assets/blog-placeholder-1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/assets/blog-placeholder-1.jpg");
							return target[name];
						}
					});

const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = Number.parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = Number.parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  if (layout !== "none") {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  } else if (imageConfig.objectFit || imageConfig.objectPosition) {
    props.fit ??= imageConfig.objectFit;
    props.position ??= imageConfig.objectPosition;
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/node_modules/astro/components/Image.astro", void 0);

const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  const useResponsive = layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  } else if (imageConfig.objectFit || imageConfig.objectPosition) {
    props.fit ??= imageConfig.objectFit;
    props.position ??= imageConfig.objectPosition;
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  const clonedSrc = isESMImportedImage(originalSrc) ? (
    // @ts-expect-error - clone is a private, hidden prop
    originalSrc.clone ?? originalSrc
  ) : originalSrc;
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) {
    resultFallbackFormat = clonedSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = {
    ...imgAdditionalAttributes,
    ...fallbackImage.attributes
  };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/node_modules/astro/components/Picture.astro", void 0);

const componentDataByCssVariable = new Map([["--font-atkinson",{"preloads":[{"style":"normal","type":"woff","url":"/_astro/fonts/a586f7bee687a0d0.woff","weight":"400"},{"style":"normal","type":"woff","url":"/_astro/fonts/8f2e97d7c7d32f5e.woff","weight":"700"}],"css":"@font-face{font-family:Atkinson-c7f4c4e8b285552f;src:url(\"/_astro/fonts/a586f7bee687a0d0.woff\") format(\"woff\");font-display:swap;font-weight:400;font-style:normal;}@font-face{font-family:Atkinson-c7f4c4e8b285552f;src:url(\"/_astro/fonts/8f2e97d7c7d32f5e.woff\") format(\"woff\");font-display:swap;font-weight:700;font-style:normal;}@font-face{font-family:\"Atkinson-c7f4c4e8b285552f fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:400;font-style:normal;size-adjust:99.3717%;ascent-override:80.1033%;descent-override:25.2587%;line-gap-override:0%;}@font-face{font-family:\"Atkinson-c7f4c4e8b285552f fallback: Arial\";src:local(\"Arial\");font-display:swap;font-weight:700;font-style:normal;size-adjust:99.3717%;ascent-override:80.1033%;descent-override:25.2587%;line-gap-override:0%;}:root{--font-atkinson:Atkinson-c7f4c4e8b285552f,\"Atkinson-c7f4c4e8b285552f fallback: Arial\",sans-serif;}"}]]);

function filterPreloads(data, preload) {
  if (!preload) {
    return null;
  }
  if (preload === true) {
    return data;
  }
  return data.filter(
    ({ weight, style, subset }) => preload.some((p) => {
      if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) {
        return false;
      }
      if (p.style !== void 0 && p.style !== style) {
        return false;
      }
      if (p.subset !== void 0 && p.subset !== subset) {
        return false;
      }
      return true;
    })
  );
}
function checkWeight(input, target) {
  const trimmedInput = input.trim();
  if (trimmedInput.includes(" ")) {
    return trimmedInput === target;
  }
  if (target.includes(" ")) {
    const [a, b] = target.split(" ");
    const parsedInput = Number.parseInt(input);
    return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
  }
  return input === target;
}

const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Font;
  const { cssVariable, preload = false } = Astro2.props;
  const data = componentDataByCssVariable.get(cssVariable);
  if (!data) {
    throw new AstroError({
      ...FontFamilyNotFound,
      message: FontFamilyNotFound.message(cssVariable)
    });
  }
  const filteredPreloadData = filterPreloads(data.preloads, preload);
  return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/node_modules/astro/components/Font.astro", void 0);

class RemoteRuntimeFontFileUrlResolver {
  #urls;
  #address;
  constructor({
    urls,
    address
  }) {
    this.#urls = urls;
    this.#address = address;
  }
  resolve(url) {
    if (!this.#urls.has(url)) {
      return null;
    }
    if (!this.#address) {
      throw new Error("Server address unavailable, this should not happen. Open an issue.");
    }
    if (!url.startsWith("/")) {
      url = new URL(url).pathname;
    }
    const host = this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address;
    return `http://${host}:${this.#address.port}${url}`;
  }
}

new RemoteRuntimeFontFileUrlResolver({
								urls: new Set(["/_astro/fonts/a586f7bee687a0d0.woff","/_astro/fonts/8f2e97d7c7d32f5e.woff"]),
								address: {"address":"::","family":"IPv6","port":46749},
							});

const assetQueryParams = undefined;
					const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"dangerouslyProcessSVG":false,"domains":[],"remotePatterns":[],"responsiveStyles":false};
					Object.defineProperty(imageConfig, 'assetQueryParams', {
						value: assetQueryParams,
						enumerable: false,
						configurable: true,
					});
							const getImage = async (options) => await getImage$1(options, imageConfig);

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = FallbackImage } = Astro2.props;
  const imagePath = typeof image === "string" ? image : image.src;
  const socialImageURL = new URL(imagePath, Astro2.site ?? Astro2.url).href;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/favicon.png"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-atkinson", "preload": true })}<!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(socialImageURL, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(socialImageURL, "content")}>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Your name here. All rights reserved.
<div class="social-links" data-astro-cid-sz7xmlte> <a href="https://x.com/riocartanoticia" target="_blank" title="X" data-astro-cid-sz7xmlte><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-sz7xmlte></path></svg></a> <a href="https://www.instagram.com/riocartaoficial/" target="_blank" title="Instagram" data-astro-cid-sz7xmlte><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-sz7xmlte></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-astro-cid-sz7xmlte></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-astro-cid-sz7xmlte></line></svg></a> <a href="https://www.facebook.com/riocartanoticia/?locale=pt_BR" target="_blank" title="Facebook" data-astro-cid-sz7xmlte><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" data-astro-cid-sz7xmlte><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-astro-cid-sz7xmlte></path></svg></a> </div> </footer>`;
}, "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/components/Footer.astro", void 0);

const logoImg = new Proxy({"src":"/_astro/logo-transparent.CfSb2LFi.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/assets/logo-transparent.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/migueldorosario/Downloads/Antigravity Google/Rio Carta Agentes/rio_carta/src/assets/logo-transparent.png");
							return target[name];
						}
					});

export { $$BaseHead as $, $$Footer as a, $$Image as b, logoImg as l };
