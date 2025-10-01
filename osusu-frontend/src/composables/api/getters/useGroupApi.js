import { generalApi } from '../api'

export function useGroupApi() {
  async function getGroupsApi(accessToken) {
    const { data } = await generalApi.get('/groups', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return data
  }
  async function createGroupApi(access_token, group_details = {}) {
    const response = await generalApi.post(
      '/groups',
      {
        paymentCycle: group_details.paymentCycle,
        groupImg: group_details.groupImg,
        groupname: group_details.groupname,
        paymentAmount: group_details.paymentAmount,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    )
    return response.data
  }

  return { getGroupsApi, createGroupApi }
}
