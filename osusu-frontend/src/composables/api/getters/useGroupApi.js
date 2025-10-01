import { generalApi } from '../api'

export function useGroupApi() {
  async function getGroups(accessToken) {
    const { data } = await generalApi.get('/groups', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return data
  }

  return { getGroups }
}
