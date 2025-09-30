import { authApi } from '../api/api'

export function tokenRefresher() {
  async function refresh(refreshToken) {
    const data = await authApi.post(
      '/users/status-refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    )
    return data
  }

  return { refresh }
}
