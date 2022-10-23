export interface IBook {
  ISBN: number
  title: string
  author: string
  summary: string
  image: string
  price: {
    currency: string
    value: number
    displayValue: string
  }
}