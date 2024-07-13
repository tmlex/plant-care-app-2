import _axios from 'axios'
import type { App } from 'vue'
import type { Router } from 'vue-router/auto'
import type { Api } from '@/types/api'
import type { Auth } from '@/types/auth'

interface AuthDependencies {
  router: Router
  api: Api
}

const createAuth = () => {
  const loginWithGoogle = () => {
    return window.open(`${APP_CONFIG.apiBaseUrl}/login/google`)
  }

  const loginWithPassword = () => {
    return api.post('users/login/password')
  }

  return {
    loginWithGoogle,
    loginWithPassword,
    install: (app: App, { router, api }: AuthDependencies) => {
      app.provide(authInjectKey, {
        loginWithGoogle,
        loginWithPassword
      } as Auth)
    }
  }
}

export default createAuth()
