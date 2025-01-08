import { ref, computed, mergeProps, unref, useSSRContext } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/server-renderer/index.mjs';
import { u as useRoute } from './server.mjs';
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
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.id;
    const choixBoisson = ref(null);
    const userTeam = ref(null);
    const boissonsDisponibles = computed(() => {
      return userTeam.value === "biere" ? bieres : sodas;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))}><div class="container"><div class="box"><h2 class="title">Choisissez votre boisson</h2><div class="columns is-multiline"><!--[-->`);
      ssrRenderList(unref(boissonsDisponibles), (boisson) => {
        _push(`<div class="column is-3"><div class="card"><div class="card-image"><figure class="image"><img${ssrRenderAttr("src", boisson.image)}${ssrRenderAttr("alt", boisson.nom)}></figure></div><div class="card-content"><label class="radio"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(choixBoisson), boisson.id)) ? " checked" : ""}${ssrRenderAttr("value", boisson.id)}> ${ssrInterpolate(boisson.nom)}</label></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/choix-boisson/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CsZuuC8q.mjs.map
