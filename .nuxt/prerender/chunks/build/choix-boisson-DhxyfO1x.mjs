import { ref, computed, mergeProps, unref, useSSRContext } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue/server-renderer/index.mjs';
import { useRoute, useRouter } from 'file:///Users/bigfiveproduction/Documents/trouvetonmatchremix/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "choix-boisson",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const choixBoisson = ref(null);
    const userTeam = ref(null);
    const bieres = [
      { id: "b1", nom: "Brune", image: "/img/symboles/bieres/01.png" },
      { id: "b2", nom: "Blonde", image: "/img/symboles/bieres/02.png" },
      { id: "b3", nom: "Ambr\xE9e", image: "/img/symboles/bieres/03.png" },
      { id: "b4", nom: "Alcoomix", image: "/img/symboles/bieres/04.png" }
    ];
    const sodas = [
      { id: "s1", nom: "World Cola", image: "/img/symboles/soda/01.png" },
      { id: "s2", nom: "XXL Malt", image: "/img/symboles/soda/02.png" },
      { id: "s3", nom: "TOp", image: "/img/symboles/soda/03.png" },
      { id: "s4", nom: "Youzou", image: "/img/symboles/soda/04.png" }
    ];
    const boissonsDisponibles = computed(() => {
      return userTeam.value === "biere" ? bieres : sodas;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))}><div class="container"><h2 class="title"> Choisissez votre ${ssrInterpolate(userTeam.value === "biere" ? "bi\xE8re" : "soda")}</h2><div class="columns is-flex is-multiline"><!--[-->`);
      ssrRenderList(unref(boissonsDisponibles), (boisson) => {
        _push(`<div class="column is-6 is-6-mobile"><div class="card"><div class="card-image"><figure class="image"><img${ssrRenderAttr("src", boisson.image)}${ssrRenderAttr("alt", boisson.nom)}></figure></div><div class="card-content"><label class="radio"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(choixBoisson.value, boisson.id)) ? " checked" : ""}${ssrRenderAttr("value", boisson.id)}> ${ssrInterpolate(boisson.nom)}</label></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/choix-boisson.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=choix-boisson-DhxyfO1x.mjs.map
