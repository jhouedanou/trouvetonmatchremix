import { _ as __nuxt_component_0 } from './nuxt-link-BSmOcFS6.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unctx/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/h3/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/defu/dist/defu.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unhead/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/radix3/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/devalue/index.js';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/destr/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/klona/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/scule/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/pathe/dist/index.mjs';
import 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/ohash/dist/index.mjs';

const _imports_0 = publicAssetsURL("/img/logosplash.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    const userFirstName = ref("");
    const userLastName = ref("");
    ref("");
    ref("");
    computed(() => {
      return `${userFirstName.value} ${userLastName.value}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "accueil",
        class: "section"
      }, _attrs))}><div class="container"><p id="deba">Du 10 au 14 F\xE9vrier</p><div id="groupecentral"><img${ssrRenderAttr("src", _imports_0)} alt="Logo Splash"><p>Le jeu de la saint valentin</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/inscription",
        class: "button is-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Trouve ton match ! `);
          } else {
            return [
              createTextVNode(" Trouve ton match ! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-7jtmS37q.mjs.map
