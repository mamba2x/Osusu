import axios from 'axios'

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API, // from .env
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const generalApi = axios.create({
  baseURL: import.meta.env.VITE_GENERAL_API, // from .env
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
