<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <div v-if="loading" class="has-text-centered">
          <h2 class="title">Recherche de votre match...</h2>
          <div class="loader-container">
            <div class="heart-loader"></div>
          </div>
        </div>

        <div v-else-if="matchFound" class="match-result">
          <h2 class="title">Félicitations ! Vous avez un match !</h2>
          <div class="columns">
            <div class="column is-6">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img :src="currentUser.photo" alt="Votre photo" />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title is-4">
                    {{ currentUser.first_name }} {{ currentUser.last_name }}
                  </p>
                  <p class="subtitle is-6">{{ currentUser.quartier }}</p>
                  <p>
                    Votre choix : {{ currentUser.user_drinks[0].drink_choice }}
                  </p>
                </div>
              </div>
            </div>

            <div class="column is-6">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img :src="matchedUser.photo" alt="Photo de votre match" />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title is-4">
                    {{ matchedUser.first_name }} {{ matchedUser.last_name }}
                  </p>
                  <p class="subtitle is-6">{{ matchedUser.quartier }}</p>
                  <p>Email: {{ matchedUser.email }}</p>
                  <p>Téléphone: {{ matchedUser.phone }}</p>
                  <p>
                    Son choix : {{ matchedUser.user_drinks[0].drink_choice }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="notification is-success mt-4">
            <p>Contactez votre match et organisez votre rencontre !</p>
          </div>
        </div>

        <div v-else class="no-match-container">
          <h2 class="title">Pas de match pour le moment</h2>
          <p class="subtitle">Nous continuons à chercher votre âme sœur...</p>
          <div class="actions mt-4">
            <button class="button" @click="findMatch">Réessayer</button>
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

const loading = ref(true);
const matchFound = ref(false);
const currentUser = ref(null);
const matchedUser = ref(null);

const findMatch = async () => {
  loading.value = true;
  matchFound.value = false;

  const { data: userData } = await supabase
    .from("users")
    .select("*, user_drinks!inner(*)")
    .eq("id", route.params.id)
    .single();

  if (userData) {
    currentUser.value = userData;
    const drinkChoice = userData.user_drinks[0].drink_choice;

    const { data: matchData } = await supabase
      .from("users")
      .select("*, user_drinks!inner(*)")
      .eq("user_drinks.drink_choice", drinkChoice)
      .neq("id", userData.id)
      .neq("gender", userData.gender)
      .is("matched_email", null)
      .single();

    if (matchData) {
      matchedUser.value = matchData;
      matchFound.value = true;

      await Promise.all([
        supabase
          .from("users")
          .update({ matched_email: matchData.email })
          .eq("id", userData.id),
        supabase
          .from("users")
          .update({ matched_email: userData.email })
          .eq("id", matchData.id),
      ]);
    }
  }

  loading.value = false;
};

onMounted(() => {
  findMatch();
});
</script>

<style scoped>
.match-result {
  text-align: center;
}

.card {
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image {
  max-width: 300px;
  margin: 0 auto;
}

.image img {
  border-radius: 8px;
  object-fit: cover;
  height: 300px;
  width: 100%;
}

.title {
  color: #c40e0e;
  margin-bottom: 2rem;
}

.card-content {
  padding: 1.5rem;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.heart-loader {
  width: 50px;
  height: 50px;
  background-color: #c40e0e;
  position: relative;
  transform: rotate(45deg);
  animation: heartbeat 1.2s infinite;
}

.heart-loader:before,
.heart-loader:after {
  content: "";
  width: 50px;
  height: 50px;
  background-color: #c40e0e;
  border-radius: 50%;
  position: absolute;
}

.heart-loader:before {
  left: -25px;
}

.heart-loader:after {
  top: -25px;
}

@keyframes heartbeat {
  0% {
    transform: rotate(45deg) scale(1);
  }
  25% {
    transform: rotate(45deg) scale(1.1);
  }
  50% {
    transform: rotate(45deg) scale(1);
  }
  75% {
    transform: rotate(45deg) scale(1.1);
  }
  100% {
    transform: rotate(45deg) scale(1);
  }
}

.no-match-container {
  text-align: center;
  padding: 3rem;
}

.button.is-primary {
  background-color: #c40e0e;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.button.is-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(196, 14, 14, 0.2);
}
</style>
