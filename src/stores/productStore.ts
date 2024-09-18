import { defineStore } from 'pinia'
import type { Product } from './interface'

export const useProductStore = defineStore('data', {
  state: () => ({
    product: {
      category: '',
      name: '',
      description: '',
      price: {
        original: 0,
        discounted: 0
      }
    } as Product
  }),

  actions: {
    async fill() {
      try {
        const module = await import('@/stores/data.json')
        const data = module.default as Product

        this.product = data
      } catch (error) {
        console.error('Failed to load data:', error)
      }
    }
  }
})
