<template>
  <section class="section">
    <div class="container">
      <h2 class="title">
        Choisissez votre {{ userTeam === "biere" ? "bière" : "soda" }}
      </h2>

      <div class="columns is-flex is-multiline">
        <div
          v-for="boisson in boissonsDisponibles"
          :key="boisson.id"
          class="column is-6 is-6-mobile"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="boisson.image" :alt="boisson.nom" />
              </figure>
            </div>
            <div class="card-content">
              <label class="radio">
                <input
                  type="radio"
                  v-model="choixBoisson"
                  :value="boisson.id"
                  @change="sauvegarderChoix"
                />
                {{ boisson.nom }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { supabase } from "~/utils/supabase";

const route = useRoute();
const router = useRouter();
const choixBoisson = ref(null);
const userTeam = ref(null);

const bieres = [
  { id: "b1", nom: "Brune", image: "/img/symboles/bieres/01.png" },
  { id: "b2", nom: "Blonde", image: "/img/symboles/bieres/02.png" },
  { id: "b3", nom: "Ambrée", image: "/img/symboles/bieres/03.png" },
  { id: "b4", nom: "Alcoomix", image: "/img/symboles/bieres/04.png" },
];

const sodas = [
  { id: "s1", nom: "World Cola", image: "/img/symboles/soda/01.png" },
  { id: "s2", nom: "XXL Malt", image: "/img/symboles/soda/02.png" },
  { id: "s3", nom: "TOp", image: "/img/symboles/soda/03.png" },
  { id: "s4", nom: "Youzou", image: "/img/symboles/soda/04.png" },
];

const boissonsDisponibles = computed(() => {
  return userTeam.value === "biere" ? bieres : sodas;
});

onMounted(async () => {
  const { data } = await supabase
    .from("users")
    .select("team")
    .eq("id", route.params.id)
    .single();

  if (data) {
    userTeam.value = data.team;
  }
});

const sauvegarderChoix = async () => {
  const { data } = await supabase
    .from("user_drinks")
    .insert([
      {
        user_id: route.params.id,
        drink_choice: choixBoisson.value,
      },
    ])
    .select();

  if (data) {
    router.push("/match");
  }
};
</script>
<style>
.card {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  color: #c40e0e !important;
}
</style>
