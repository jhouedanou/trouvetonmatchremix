import { ref, mergeProps, useSSRContext } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/server-renderer/index.mjs';
import { useRoute, useRouter } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/h3/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/devalue/index.js';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/destr/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/hookable/dist/index.mjs';
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

const _sfc_main = {
  __name: "match",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const loading = ref(true);
    const matchFound = ref(false);
    const currentUser = ref(null);
    const matchedUser = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-b0288b72><div class="container" data-v-b0288b72><div class="box" data-v-b0288b72>`);
      if (loading.value) {
        _push(`<div class="has-text-centered" data-v-b0288b72><h2 class="title" data-v-b0288b72>Recherche de votre match...</h2><div class="loader-container" data-v-b0288b72><div class="heart-loader" data-v-b0288b72></div></div></div>`);
      } else if (matchFound.value) {
        _push(`<div class="match-result" data-v-b0288b72><h2 class="title" data-v-b0288b72>F\xE9licitations ! Vous avez un match !</h2><div class="columns" data-v-b0288b72><div class="column is-6" data-v-b0288b72><div class="card" data-v-b0288b72><div class="card-image" data-v-b0288b72><figure class="image" data-v-b0288b72><img${ssrRenderAttr("src", currentUser.value.photo)} alt="Votre photo" data-v-b0288b72></figure></div><div class="card-content" data-v-b0288b72><p class="title is-4" data-v-b0288b72>${ssrInterpolate(currentUser.value.first_name)} ${ssrInterpolate(currentUser.value.last_name)}</p><p class="subtitle is-6" data-v-b0288b72>${ssrInterpolate(currentUser.value.quartier)}</p><p data-v-b0288b72> Votre choix : ${ssrInterpolate(currentUser.value.user_drinks[0].drink_choice)}</p></div></div></div><div class="column is-6" data-v-b0288b72><div class="card" data-v-b0288b72><div class="card-image" data-v-b0288b72><figure class="image" data-v-b0288b72><img${ssrRenderAttr("src", matchedUser.value.photo)} alt="Photo de votre match" data-v-b0288b72></figure></div><div class="card-content" data-v-b0288b72><p class="title is-4" data-v-b0288b72>${ssrInterpolate(matchedUser.value.first_name)} ${ssrInterpolate(matchedUser.value.last_name)}</p><p class="subtitle is-6" data-v-b0288b72>${ssrInterpolate(matchedUser.value.quartier)}</p><p data-v-b0288b72>Email: ${ssrInterpolate(matchedUser.value.email)}</p><p data-v-b0288b72>T\xE9l\xE9phone: ${ssrInterpolate(matchedUser.value.phone)}</p><p data-v-b0288b72> Son choix : ${ssrInterpolate(matchedUser.value.user_drinks[0].drink_choice)}</p></div></div></div></div><div class="notification is-success mt-4" data-v-b0288b72><p data-v-b0288b72>Contactez votre match et organisez votre rencontre !</p></div></div>`);
      } else {
        _push(`<div class="no-match-container" data-v-b0288b72><h2 class="title" data-v-b0288b72>Pas de match pour le moment</h2><p class="subtitle" data-v-b0288b72>Nous continuons \xE0 chercher votre \xE2me s\u0153ur...</p><div class="actions mt-4" data-v-b0288b72><button class="button" data-v-b0288b72>R\xE9essayer</button></div></div>`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/match.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const match = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0288b72"]]);

export { match as default };
//# sourceMappingURL=match-D6nchs6G.mjs.map
