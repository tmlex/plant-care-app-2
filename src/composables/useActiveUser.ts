import { useUserStore } from '@/stores/user'
import type { User } from '@/types/user'

export const useActiveUser = () => {
  const api = useApi()
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const getActiveUser = () => {
    return api.get<User>('/users/active').then(({ data }) => {
      user.value = data
      return data
    })
  }

  return {
    user,
    getActiveUser
  }
}
