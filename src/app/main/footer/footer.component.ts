import { Component } from '@angular/core';
import { iImage } from 'src/app/models/products.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  imageRRSS: iImage[] = [
    {
      src: '../../../assets/images/Free Facebook.png',
      permalink: ''
    },
    {
      src: '../../../assets/images/instragram.png',
      permalink: ''
    }
  ]
}
