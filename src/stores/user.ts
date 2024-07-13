import type { User } from '@/types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    email: '',
    username: ''
  })

  return {
    user
  }
})
