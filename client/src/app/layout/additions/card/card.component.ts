import { Component, Input } from '@angular/core';

import { downloadImage } from '../../../shared/utils/save-file';
import { Post } from '../../../shared/interface/post';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() post!:Post;
  downloadImg() {

    downloadImage(this.post._id, this.post.photo);

  }

}
