import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Post } from '../../../shared/interface/post';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() data!:Post[] ;
  @Input() title!:string ;

}
