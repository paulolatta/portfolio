import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
}
