import { Component } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})

export class ProductCategoryComponent {
products_outstanding = [ /** productos destacados / ofertas / mas vendidos */
  {
    src:'https://www.smartphonetechnology.com.ec/media/uploaded_images/iphone-14-pro-max-U15734012277cRO-1200x1200abc.jpg.360x360_q85_box-0%2C0%2C1200%2C1200_crop_detail.jpg',
    title:'Iphone 14 Pro 1TB',
    price:'USD 350.00',
    offert: true,
    price_ofert:'USD 290.00'
  },
  {
    src:'https://www.smartphonetechnology.com.ec/media/uploaded_images/infinix_HOT_30i.png.360x360_q85_box-0%2C0%2C800%2C800_crop_detail.jpg',
    title:'INFINIX HOT 30i 8ram 128GB',
    price:'USD 100.00',
    offert: true,
    price_ofert:'USD 80.00'
  },
  {
    src:'https://www.smartphonetechnology.com.ec/media/uploaded_images/13359737l.jpg.360x360_q85_box-0%2C0%2C800%2C800_crop_detail.jpg',
    title:'Apple Watch Serie 5 40mm',
    price:'USD 650.00',
    offert: true,
    price_ofert:'USD 600.00'
  },
  {
    src:'https://www.smartphonetechnology.com.ec/media/uploaded_images/appleearpods_3.png.360x360_q85_box-0%2C0%2C1308%2C1308_crop_detail.png',
    title:'Audífonos Apple EarPods Lightning Connector',
    price:'USD 50.00',
    offert: true,
    price_ofert:'USD 35.00'
  }
]
products_category = [
  {
    src:'https://th.bing.com/th/id/OIP.kHm9rofhm3uHiXiZIgn0kQHaG9?pid=ImgDet&w=170.99999999999997&h=170.99999999999997&c=7',
    title: 'Teléfonos'
  },
  {
    src:'https://th.bing.com/th/id/OIP.9KOazyUqpG25-udqKlEm1wAAAA?pid=ImgDet&rs=1',
    title: 'MacBook'
  },
  {
    src:'https://www.smartphonetechnology.com.ec/media/uploaded_images/Accesorios_para_celulares.png.720x720_q85_box-90%2C0%2C405%2C315_crop_detail.png',
    title: 'Accesorios'
  },
  {
    src:'https://www.smartphonetechnology.com.ec/media/uploaded_images/Smart_watch.png.720x720_q85_box-46%2C0%2C715%2C668_crop_detail.png',
    title: 'iWatch'
  }

]
}
