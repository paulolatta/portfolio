import { Component, Input } from '@angular/core';

import { card } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})



export class CardComponent {
  @Input() card: card = {
    title: '',
    text: '',
    update: '',
    src: '',
    link: ''
  };
}
