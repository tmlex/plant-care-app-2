import type { AxiosResponse } from 'axios'

export interface Api {
  get<T>(url: string): Promise<AxiosResponse<T, any>>
  post<T>(url: string): Promise<AxiosResponse<T, any>>
  put<T>(url: string): Promise<AxiosResponse<T, any>>
  delete<T>(url: string): Promise<AxiosResponse<T, any>>
}
