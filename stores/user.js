import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    firstName: '',
    lastName: '',
    picture: '',
    phone: '',
    quartier: '',
    teamBiere: false,
    teamSoda: false,
    users: []
  }),
  
  getters: {
    fullName: (state) => `${state.firstName} ${state.lastName}`
  },
  
  actions: {
    async fetchRandomUser() {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()
      const user = data.results[0]
      
      this.email = user.email
      this.firstName = user.name.first
      this.lastName = user.name.last
      this.picture = user.picture.large
      
      // Stockage dans le tableau users
      this.users.push({
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        picture: this.picture
      })
    },
    
    saveUserData(userData) {
      this.users.push({
        ...userData,
        picture: this.picture
      })
    }
  }
})
