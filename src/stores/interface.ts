export interface Price {
  original: number
  discounted: number
}

export interface Product {
  category: string
  name: string
  description: string
  price: Price
}
