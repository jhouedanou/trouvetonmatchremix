import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import { u as useRoute } from "../server.mjs";
import "./supabase-CQfqlzyf.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "destr";
import "klona";
import "@supabase/supabase-js";
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
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CsZuuC8q.js.map
