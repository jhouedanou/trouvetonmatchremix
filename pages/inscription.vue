<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import quartiersData from "@/data/quartiers.json";
import { supabase } from "~/utils/supabase";

//envoi à supase

const handleSubmit = async () => {
  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        first_name: formData.value.firstName,
        last_name: formData.value.lastName,
        email: formData.value.email,
        phone: formData.value.phone,
        quartier: formData.value.quartier,
        gender: formData.value.gender,
        photo: formData.value.photo,
        team: formData.value.team,
      }
    ])
    .select()

  if (error?.code === '23505') {
    alert('Vous êtes déjà inscrit dans notre base de données')
    return
  }

  if (data) {
    router.push(`/choix-boisson/${data[0].id}`)
  }
}// Initialisation immédiate des refs
const router = useRouter();
const previewImage = ref(null);
const quartiers = ref(quartiersData.quartiers || []);

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  quartier: "",
  gender: "",
  photo: null,
  team1: false,
  team2: false,
});

// Gestion du rafraîchissement
onMounted(() => {
  // Récupération des données du localStorage si elles existent
  const savedData = localStorage.getItem("formData");
  if (savedData) {
    formData.value = JSON.parse(savedData);
  }
});

const userFullName = computed(() => {
  return `${formData.value.firstName} ${formData.value.lastName}`;
});

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2Mo en bytes
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

const handleImageUpload = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  // Vérification du type de fichier
  if (!ALLOWED_TYPES.includes(file.type)) {
    alert("Format invalide. Utilisez uniquement JPG ou PNG");
    event.target.value = "";
    return;
  }

  // Vérification de la taille
  if (file.size > MAX_FILE_SIZE) {
    alert("Image trop volumineuse. Maximum 2Mo");
    event.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    previewImage.value = e.target.result;
    formData.value.photo = e.target.result;
  };
  reader.readAsDataURL(file);
};
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="p-4">
            <form @submit.prevent="handleSubmit" class="box">
              <div class="columns">
                <div class="column is-4">
                  <figure class="image">
                    <img
                      id="blenheim"
                      :src="previewImage"
                      alt="Photo de profil"
                      v-if="previewImage"
                    />
                  </figure>
                  <div class="field m-2">
                    <label class="label">Photo</label>
                    <div class="file">
                      <label class="file-label">
                        <input
                          class="file-input"
                          type="file"
                          @change="handleImageUpload"
                          accept="image/*"
                          capture="user"
                        />
                        <span class="file-cta">
                          <span class="file-label">Choisir une photo</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="column is-8">
                  <div class="field m-2">
                    <label class="label">Prénom</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="formData.firstName"
                        required
                      />
                    </div>
                  </div>

                  <div class="field m-2">
                    <label class="label">Nom</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="formData.lastName"
                        required
                      />
                    </div>
                  </div>

                  <div class="field m-2">
                    <label class="label">Email</label>
                    <div class="control">
                      <input
                        class="input"
                        type="email"
                        v-model="formData.email"
                        required
                      />
                    </div>
                  </div>

                  <div class="field m-2">
                    <label class="label">Genre</label>
                    <div class="control gender-group">
                      <label class="radio mr-4">
                        <input
                          type="radio"
                          v-model="formData.gender"
                          value="homme"
                        />
                        Homme
                      </label>
                      <label class="radio mr-4">
                        <input
                          type="radio"
                          v-model="formData.gender"
                          value="femme"
                        />
                        Femme
                      </label>
                    </div>
                  </div>

                  <div class="field m-2">
                    <label class="label">Téléphone</label>
                    <div class="control">
                      <input
                        class="input"
                        type="tel"
                        v-model="formData.phone"
                        required
                        pattern="[0-9]{10}"
                        placeholder="XX XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div class="field m-2">
                    <label class="label">Quartier d'Abidjan</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select v-model="formData.quartier" required>
                          <option value="">Sélectionnez un quartier</option>
                          <option
                            v-for="quartier in quartiers"
                            :key="quartier.id"
                            :value="quartier.nom"
                          >
                            {{ quartier.nom }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="field m-2">
                    <label class="label">Équipe</label>
                    <div class="control">
                      <label class="radio mr-4">
                        <input
                          type="radio"
                          v-model="formData.team"
                          value="biere"
                        />
                        <img src="/img/logobiere.png" alt="" />
                      </label>
                      <label class="radio">
                        <input
                          type="radio"
                          v-model="formData.team"
                          value="soda"
                        />
                        <img src="/img/logosoda.png" alt="" />
                      </label>
                    </div>
                  </div>

                  <div class="field m-2 mt-5">
                    <div class="control">
                      <button class="button is-fullwidth" type="submit">
                        S'inscrire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image {
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 1rem;
}

.image img {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.file {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.box {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  padding: 2rem;
}

.field {
  margin-bottom: 1.5rem;
}

.label {
  color: #c40e0e !important;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input,
.select select {
  border-radius: 8px;
  border: 1px solid #dbdbdb;
}

.gender-group {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.radio,
.checkbox {
  color: #c40e0e !important;
  font-weight: bold;
  cursor: pointer;
}

.button.is-primary {
  background-color: #c40e0e !important;
  border-radius: 25px;
  padding: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.button.is-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(196, 14, 14, 0.2);
}
</style>
