import type { Api } from '@/types/api'

export const useApi = () => {
  return inject(apiInjectKey) as Api
}
