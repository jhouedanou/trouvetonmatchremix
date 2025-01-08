<script setup>
const userEmail = ref("");
const userFirstName = ref("");
const userLastName = ref("");
const userPicture = ref("");
const useGender = ref("");

const userFullName = computed(() => {
  return `${userFirstName.value} ${userLastName.value}`;
});
</script>

<template>
  <section id="accueil" class="section">
    <div class="container">
      <p id="deba">Du 10 au 14 Février</p>
      <div id="groupecentral">
        <img src="/img/logosplash.png" alt="Logo Splash" />
        <p>Le jeu de la saint valentin</p>
        <NuxtLink to="/inscription" class="button is-light">
          Trouve ton match !
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style></style>
