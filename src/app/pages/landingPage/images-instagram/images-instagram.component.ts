import { Component, Input } from '@angular/core';
import { iImage } from 'src/app/models/products.model';

@Component({
  selector: 'app-images-instagram',
  templateUrl: './images-instagram.component.html',
  styleUrls: ['./images-instagram.component.scss']
})
export class ImagesInstagramComponent {
  @Input() imageUrls: iImage[] = []


}
