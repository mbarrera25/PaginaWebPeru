import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iProduct } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ){

  }
  products: iProduct[] = [
    {
      id: '1',
      name: 'Redmi 9AT 32gb',
      description: '32gb de almacenamiento interno, Pantalla LCD de 6,53 pulgadas ',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/Xiaomi-Mi-Note-10-Mobile-Store-Ecuador.jpg.360x360_q85_box-0%2C0%2C800%2C800_crop_detail.jpg',
      price:'USD 0.00',
      category:{ name: 'TELEFONOS', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Iphone 14 Pro 1TB',
      description: 'Ram: 16GB Memoria: 256GB, pantalla OLED de 6.1',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/iphone-14-pro-max-U15734012277cRO-1200x1200abc.jpg.360x360_q85_box-0%2C0%2C1200%2C1200_crop_detail.jpg',
      price:'USD 0.00',
      category:{ name: 'TELEFONOS', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Iphone 13 128 Gb',
      description: 'Pantalla de 6.1, 128GB o 256GB de almacenamiento interno',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/iPhone-13-Azul.webp.360x360_q85_box-0%2C0%2C800%2C800_crop_detail.jpg',
      price:'USD 0.00',
      category:{ name: 'TELEFONOS', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Audífonos Apple EarPods Lightning Connector',
      description: 'EarPods Lightning Connector',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/appleearpods_3.png.360x360_q85_box-0%2C0%2C1308%2C1308_crop_detail.png',
      price:'USD 0.00',
      category:{ name: 'ACCESSORIOS', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Cargador Samsung Fast Charge Type C',
      description: 'Carga Rápida Tipo C',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/61FqJyuSQNL._SX425_.jpg.360x360_q85_box-0%2C0%2C425%2C425_crop_detail.jpg',
      price:'USD 0.00',
      category:{ name: 'ACCESSORIOS', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Cargador Cable Iphone11 Pro USB-C to Lightning (1m)',
      description: 'USB-C to Lightning Cable (1m)',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/apple-usb-c-to-lightning-cable-1m-cables-accessories-personal-digital-data-358.jpg.360x360_q85_box-0%2C0%2C1000%2C1000_crop_detail.jpg',
      price:'USD 0.00',
      category:{ name: 'ACCESSORIOS', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Apple Watch Serie 3 38mm Negro',
      description: 'Caja de aluminio gris espacial con correa deportiva negra',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/38-alu-space-sport-black-nc-1up_GEO_MX.png.360x360_q85_box-74%2C178%2C896%2C1001_crop_detail.png',
      price:'USD 0.00',
      category:{ name: 'IWATCH', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Reloj Xiaomi Mi Band 4',
      description: 'Pantalla AMOLED de 0,95 pulgadas y táctil.',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/band4800.png.360x360_q85_box-0%2C0%2C800%2C800_crop_detail.png',
      price:'USD 0.00',
      category:{ name: 'IWATCH', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Smart Watch 5 1009 Rosado',
      description: 'Smart Watch 5 1009 Rosado',
      imageUrl: 'https://www.smartphonetechnology.com.ec/media/uploaded_images/W75-IWO-13-reloj-inteligente-1-1-44MM-40MM-reloj-5-impermeable-IP68-Smar_kwnZw13.jpg.360x360_q85_box-0%2C85%2C613%2C699_crop_detail.jpg',
      price:'USD 0.00',
      category:{ name: 'IWATCH', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Apple MacBook Pro 11,1 13″ i5-4258U 2.4GHz 128GB SSD 8GB Late-2013 Retina A1502',
      description: 'Processor Intel Core i5-4258U 2.4GHz, RAM 8GB DDR3 RAM',
      imageUrl: 'https://i0.wp.com/store.rpc.global/wp-content/uploads/2019/01/ab578716-6019-5eac-800b-1508b59b760e.jpg?fit=1600%2C1514&ssl=1',
      price:'USD 0.00',
      category:{ name: 'MACBOOK', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Processor Intel Core i5-4258U 2.4GHz RAM 8GB DDR3 RAM',
      description: 'Processor : Core i5-7267U 3.1GHz RAM 8 GB RAM',
      imageUrl: 'https://i0.wp.com/store.rpc.global/wp-content/uploads/2021/12/ff2d70c4-a68a-56cd-804c-740982cbeb78.jpg?fit=1600%2C1380&ssl=1',
      price:'USD 0.00',
      category:{ name: 'MACBOOK', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    {
      id: '2',
      name: 'Microsoft Surface Pro 4 1724 Core i7-6650U 2.2GHz 8GB 256GB SSD Win10 Pro',
      description: 'Processor Intel Core i7-6650u 2.20GHz RAM 8 GB RAM',
      imageUrl: 'https://i0.wp.com/store.rpc.global/wp-content/uploads/2021/12/b8a559c7-ce54-5f5a-8d61-b04e72ce1aa4.jpg?fit=1381%2C1600&ssl=1',
      price:'USD 0.00',
      category:{ name: 'MACBOOK', description: ''},
      price_ofert: 'string', /**precio oferta */
      offers: false, /** oferta */
      outstanding: false
    },
    // Agrega más productos aquí
  ];
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('category');
      console.log(params);

      if (id) {

       this.products = this.products.filter((p,i) => p.category.name == id)
       console.log(this.products);

      }
    });
  }



  // Función para obtener más detalles del producto
  getDetails(productId: string) {
    // Lógica para obtener detalles del producto con el ID proporcionado
    console.log('Obteniendo detalles del producto con ID:', productId);
  }
}
