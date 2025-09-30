import { authApi } from './api.js'

export function useAuthApi() {
  async function loginApi(email, password) {
    const { data } = await authApi.post('/users/login', {
      email: email,
      password: password,
    })
    return data
  }
  async function registerApi(userInfo = {}) {
    const { data } = await authApi.post('/users/create', {
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email,
      phone: userInfo.phone,
      password: userInfo.password,
    })
    return data
  }
  async function logoutApi(accessToken) {
    const { data } = await authApi.post(
      '/users/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    return data
  }
  async function getUserInfo(accessToken) {
    const { data } = await authApi.get('/users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return data
  }

  return { loginApi, logoutApi, registerApi }
}
