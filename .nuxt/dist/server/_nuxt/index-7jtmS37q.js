import { _ as __nuxt_component_0 } from "./nuxt-link-BSmOcFS6.js";
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "destr";
import "klona";
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
      }, _attrs))}><div class="container"><p id="deba">Du 10 au 14 Février</p><div id="groupecentral"><img${ssrRenderAttr("src", _imports_0)} alt="Logo Splash"><p>Le jeu de la saint valentin</p>`);
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-7jtmS37q.js.map
