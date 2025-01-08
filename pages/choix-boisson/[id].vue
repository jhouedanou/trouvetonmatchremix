<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2 class="title">Choisissez votre boisson</h2>
        
        <div class="columns is-multiline">
          <div v-for="boisson in boissonsDisponibles" :key="boisson.id" class="column is-3">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img :src="boisson.image" :alt="boisson.nom">
                </figure>
              </div>
              <div class="card-content">
                <label class="radio">
                  <input type="radio" 
                         v-model="choixBoisson" 
                         :value="boisson.id"
                         @change="handleDrinkChoice(boisson.id)">
                  {{ boisson.nom }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const userId = route.params.id

const choixBoisson = ref(null)
const userTeam = ref(null)

// Fetch user team preference
onMounted(async () => {
  const { data } = await supabase
    .from('users')
    .select('team')
    .eq('id', userId)
    .single()
    
  if (data) {
    userTeam.value = data.team
  }
})

const boissonsDisponibles = computed(() => {
  return userTeam.value === 'biere' ? bieres : sodas
})

const handleDrinkChoice = async (drinkId) => {
  const { data } = await supabase
    .from('user_drinks')
    .insert([{
      user_id: userId,
      drink_choice: drinkId
    }])
    .select()

  if (data) {
    router.push('/confirmation')
  }
}
</script>
