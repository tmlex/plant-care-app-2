import type { Auth } from '@/types/auth'

export const useAuth = () => {
  return inject(authInjectKey) as Auth
}
