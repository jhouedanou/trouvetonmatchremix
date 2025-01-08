import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderList, ssrInterpolate } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { useRouter } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/h3/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/devalue/index.js';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/destr/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/klona/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/defu/dist/defu.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/scule/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/radix3/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/pathe/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/ohash/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unhead/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/pinia/dist/pinia.prod.cjs';

const _imports_0 = publicAssetsURL("/img/logobiere.png");
const _imports_1 = publicAssetsURL("/img/logosoda.png");
const quartiers = [{ "id": 1, "nom": "Abobo", "zone": "nord" }, { "id": 2, "nom": "Adjam\xE9", "zone": "centre" }, { "id": 3, "nom": "Att\xE9coub\xE9", "zone": "centre" }, { "id": 4, "nom": "Cocody", "zone": "est" }, { "id": 5, "nom": "Koumassi", "zone": "sud" }, { "id": 6, "nom": "Marcory", "zone": "sud" }, { "id": 7, "nom": "Plateau", "zone": "centre" }, { "id": 8, "nom": "Port-Bou\xEBt", "zone": "sud" }, { "id": 9, "nom": "Treichville", "zone": "centre" }, { "id": 10, "nom": "Yopougon", "zone": "ouest" }];
const quartiersData = {
  quartiers
};
const _sfc_main = {
  __name: "inscription",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const previewImage = ref(null);
    const quartiers2 = ref(quartiersData.quartiers);
    const formData = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      quartier: "",
      gender: "",
      photo: null,
      team1: false,
      team2: false
    });
    computed(() => {
      return `${formData.value.firstName} ${formData.value.lastName}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-1f819828><div class="container" data-v-1f819828><div class="columns" data-v-1f819828><div class="column" data-v-1f819828><div class="p-4" data-v-1f819828><form class="box" data-v-1f819828><div class="columns" data-v-1f819828><div class="column is-4" data-v-1f819828><figure class="image" data-v-1f819828>`);
      if (previewImage.value) {
        _push(`<img id="blenheim"${ssrRenderAttr("src", previewImage.value)} alt="Photo de profil" data-v-1f819828>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure><div class="field m-2" data-v-1f819828><label class="label" data-v-1f819828>Photo</label><div class="file" data-v-1f819828><label class="file-label" data-v-1f819828><input class="file-input" type="file" accept="image/*" capture="user" data-v-1f819828><span class="file-cta" data-v-1f819828><span class="file-label" data-v-1f819828>Choisir une photo</span></span></label></div></div></div><div class="column is-8" data-v-1f819828><div class="field m-2" data-v-1f819828><label class="label" data-v-1f819828>Pr\xE9nom</label><div class="control" data-v-1f819828><input class="input" type="text"${ssrRenderAttr("value", formData.value.firstName)} required data-v-1f819828></div></div><div class="field m-2" data-v-1f819828><label class="label" data-v-1f819828>Nom</label><div class="control" data-v-1f819828><input class="input" type="text"${ssrRenderAttr("value", formData.value.lastName)} required data-v-1f819828></div></div><div class="field m-2" data-v-1f819828><label class="label" data-v-1f819828>Email</label><div class="control" data-v-1f819828><input class="input" type="email"${ssrRenderAttr("value", formData.value.email)} required data-v-1f819828></div></div><div class="field m-2" data-v-1f819828><label class="label" data-v-1f819828>Genre</label><div class="control gender-group" data-v-1f819828><label class="radio mr-4" data-v-1f819828><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(formData.value.gender, "homme")) ? " checked" : ""} value="homme" data-v-1f819828> Homme </label><label class="radio mr-4" data-v-1f819828><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(formData.value.gender, "femme")) ? " checked" : ""} value="femme" data-v-1f819828> Femme </label></div></div><div class="field m-2" data-v-1f819828><label class="label" data-v-1f819828>T\xE9l\xE9phone</label><div class="control" data-v-1f819828><input class="input" type="tel"${ssrRenderAttr("value", formData.value.phone)} required pattern="[0-9]{10}" placeholder="XX XX XX XX XX" data-v-1f819828></div></div><div class="field m-2" data-v-1f819828><label class="label" data-v-1f819828>Quartier d&#39;Abidjan</label><div class="control" data-v-1f819828><div class="select is-fullwidth" data-v-1f819828><select required data-v-1f819828><option value="" data-v-1f819828${ssrIncludeBooleanAttr(Array.isArray(formData.value.quartier) ? ssrLooseContain(formData.value.quartier, "") : ssrLooseEqual(formData.value.quartier, "")) ? " selected" : ""}>S\xE9lectionnez un quartier</option><!--[-->`);
      ssrRenderList(quartiers2.value, (quartier) => {
        _push(`<option${ssrRenderAttr("value", quartier.nom)} data-v-1f819828${ssrIncludeBooleanAttr(Array.isArray(formData.value.quartier) ? ssrLooseContain(formData.value.quartier, quartier.nom) : ssrLooseEqual(formData.value.quartier, quartier.nom)) ? " selected" : ""}>${ssrInterpolate(quartier.nom)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="field m-2" data-v-1f819828><label class="label" data-v-1f819828>\xC9quipe</label><div class="control" data-v-1f819828><label class="radio mr-4" data-v-1f819828><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(formData.value.team, "biere")) ? " checked" : ""} value="biere" data-v-1f819828><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1f819828></label><label class="radio" data-v-1f819828><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(formData.value.team, "soda")) ? " checked" : ""} value="soda" data-v-1f819828><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-1f819828></label></div></div><div class="field m-2 mt-5" data-v-1f819828><div class="control" data-v-1f819828><button class="button is-fullwidth" type="submit" data-v-1f819828> S&#39;inscrire </button></div></div></div></div></form></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const inscription = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f819828"]]);

export { inscription as default };
//# sourceMappingURL=inscription-CxDuTd5h.mjs.map
