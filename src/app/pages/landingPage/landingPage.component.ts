import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { iImage } from 'src/app/models/products.model';

@Component({
  selector: 'app-landingPage',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss']
})
export class landingPageComponent implements OnInit {
  public imageUrls: iImage[] =
  [
    {
      src: 'https://scontent.cdninstagram.com/v/t39.30808-6/375987881_355909743427008_2705531814487550696_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=T2ppcxu3m60AX9gP9h_&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCPyGggxd6CmpaZ8RCt8C1HZeWO-h_Rn5JMY5M70AH0cg&oe=650DFD74',
      permalink: 'https://www.instagram.com/p/CqVbwWouh6-'
    },
    {
      src: 'https://scontent.cdninstagram.com/v/t39.30808-6/376238049_357960946555221_9078721789709093682_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=TSe13OvG1fUAX-dlPsw&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBKMKAiX9YWPnAkKV-4eG55Ex2oWoETopcEp0L2ew9qkQ&oe=650D9419',
      permalink: 'https://www.instagram.com/p/Cp-frAVu9bY'
    },
    {
      src: 'https://scontent.cdninstagram.com/v/t51.29350-15/375385078_279324288379929_1070439195426721906_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=NGH4bWyOVFAAX8dV8vC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDPOPeiSfEvEcPL3MzKkEFta_ykyd4LynQLT4Ou1nEOjQ&oe=650D11A6',
      permalink: 'https://www.instagram.com/p/Cp-d2nCOrRf'
    },
    {
      src: 'https://scontent.cdninstagram.com/v/t39.30808-6/377274616_360112536340062_8445063482985194622_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=XUiTZDjs7fcAX9xdgjF&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA2dP-pIL67GDQpKELKI3YTe2nGl5KuUUcSQa_bTf3kaw&oe=650CDB40',
      permalink: 'https://www.instagram.com/p/Cp-ciErOkgs'
    }
  ];
  constructor(
    private pagesService: PagesService
  ){

  }
  ngOnInit(): void {

   /* this.pagesService.getImagesInstagram().subscribe(
      (urls: iImage[]) => {
        this.imageUrls = urls.filter( (u,i) => i>1 && i<6)
        console.log('URLs de imágenes:', this.imageUrls);
      },
      error => {
        console.error('Error al obtener las URLs de las imágenes:', error);
      }
    );*/

    console.log( this.imageUrls);
  }



}
