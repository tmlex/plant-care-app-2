import type { Plant } from '@/types/plant'

export const usePlants = () => {
  const api = useApi()
  const plants = ref<Plant[]>([])

  const getPlants = () => {
    return api.get<Plant[]>('/plants').then(({ data }) => {
      plants.value = data
      return data
    })
  }

  return {
    plants,
    getPlants
  }
}
