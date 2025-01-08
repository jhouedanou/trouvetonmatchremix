import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import "./supabase-CQfqlzyf.js";
import { _ as _export_sfc } from "../server.mjs";
import "@supabase/supabase-js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "radix3";
import "ufo";
import "destr";
import "klona";
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
        _push(`<div class="match-result" data-v-b0288b72><h2 class="title" data-v-b0288b72>Félicitations ! Vous avez un match !</h2><div class="columns" data-v-b0288b72><div class="column is-6" data-v-b0288b72><div class="card" data-v-b0288b72><div class="card-image" data-v-b0288b72><figure class="image" data-v-b0288b72><img${ssrRenderAttr("src", currentUser.value.photo)} alt="Votre photo" data-v-b0288b72></figure></div><div class="card-content" data-v-b0288b72><p class="title is-4" data-v-b0288b72>${ssrInterpolate(currentUser.value.first_name)} ${ssrInterpolate(currentUser.value.last_name)}</p><p class="subtitle is-6" data-v-b0288b72>${ssrInterpolate(currentUser.value.quartier)}</p><p data-v-b0288b72> Votre choix : ${ssrInterpolate(currentUser.value.user_drinks[0].drink_choice)}</p></div></div></div><div class="column is-6" data-v-b0288b72><div class="card" data-v-b0288b72><div class="card-image" data-v-b0288b72><figure class="image" data-v-b0288b72><img${ssrRenderAttr("src", matchedUser.value.photo)} alt="Photo de votre match" data-v-b0288b72></figure></div><div class="card-content" data-v-b0288b72><p class="title is-4" data-v-b0288b72>${ssrInterpolate(matchedUser.value.first_name)} ${ssrInterpolate(matchedUser.value.last_name)}</p><p class="subtitle is-6" data-v-b0288b72>${ssrInterpolate(matchedUser.value.quartier)}</p><p data-v-b0288b72>Email: ${ssrInterpolate(matchedUser.value.email)}</p><p data-v-b0288b72>Téléphone: ${ssrInterpolate(matchedUser.value.phone)}</p><p data-v-b0288b72> Son choix : ${ssrInterpolate(matchedUser.value.user_drinks[0].drink_choice)}</p></div></div></div></div><div class="notification is-success mt-4" data-v-b0288b72><p data-v-b0288b72>Contactez votre match et organisez votre rencontre !</p></div></div>`);
      } else {
        _push(`<div class="no-match-container" data-v-b0288b72><h2 class="title" data-v-b0288b72>Pas de match pour le moment</h2><p class="subtitle" data-v-b0288b72>Nous continuons à chercher votre âme sœur...</p><div class="actions mt-4" data-v-b0288b72><button class="button" data-v-b0288b72>Réessayer</button></div></div>`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/match.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const match = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0288b72"]]);
export {
  match as default
};
//# sourceMappingURL=match-D6nchs6G.js.map
