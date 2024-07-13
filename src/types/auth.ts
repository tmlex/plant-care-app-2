import type { AxiosResponse } from 'axios'

export interface Auth {
  loginWithGoogle(url: string): void
  loginWithPassword(url: string): Promise<any>
}
