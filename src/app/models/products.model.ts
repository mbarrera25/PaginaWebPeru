export interface iProduct {
    id:string
    name: string
    description: string
    price: string
    category:iCategory
    price_ofert: string /**precio oferta */
    imageUrl: string
    offers: Boolean /** oferta */
    outstanding: Boolean /** destacado */

}


export interface iCategory {
name: string
description: string
}

export interface iImage{
  src:string,
  permalink: string
}
