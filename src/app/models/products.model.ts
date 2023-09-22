export interface iProduct {
    id:string
    name: string
    description: string
    price: number
    category:iCategory
    price_ofert: string /**precio oferta */
    imageUrl: string
    offers: Boolean /** oferta */
    outstanding: Boolean /** destacado */
   // stock: number

}


export interface iCategory {
name: string
description: string
}

export interface iImage{
  src:string,
  permalink: string
}
