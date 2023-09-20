export interface iProduct {
    name: string
    description: string
    price: string
    category:iCategory
    price_ofert: string
    image: string
    offers: Boolean

}

export interface iCategory {
name: string
description: string
}

export interface iImage{
  src:string,
  permalink: string
}
