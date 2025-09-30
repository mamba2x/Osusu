// import { ref } from 'vue'
// import axios from 'axios'
import { authApi } from './api.js'

export function useAuthApi() {
  async function loginApi(email, password) {
    const { data } = await authApi.post('/users/login', {
      email: email,
      password: password,
    })
    // if (data
    return data
  }

  return { loginApi }
}
