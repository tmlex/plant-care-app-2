import _axios from 'axios'
import { inject, type App } from 'vue'
import type { Router } from 'vue-router/auto'
import type { Api } from '@/types/api'

interface ApiDependencies {
  router: Router
}

const createApi = () => {
  const axios = _axios.create({
    baseURL: APP_CONFIG.apiBaseUrl,
    withCredentials: true
  })

  // Headers

  const headers = {}

  // Methods

  const get = <T>(url: string) => {
    return axios.get<T>(url, { headers })
  }

  const post = <T>(url: string) => {
    return axios.post<T>(url, { headers })
  }

  const put = <T>(url: string) => {
    return axios.put<T>(url, { headers })
  }

  const _delete = <T>(url: string) => {
    return axios.delete<T>(url, { headers })
  }

  return {
    axios,
    get,
    post,
    put,
    delete: _delete,
    install: (app: App, { router }: ApiDependencies) => {
      // Interceptors

      axios.interceptors.response.use(null, (error) => {
        if (error.response.status === 401) {
          router.push('/login')
        }
      })

      app.provide(apiInjectKey, {
        get,
        post,
        put,
        delete: _delete
      } as Api)
    }
  }
}

export default createApi()
