import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    addUser(userData) {
      this.users.push(userData)
    },
    getAllUsers() {
      return this.users
    }
  }
})
