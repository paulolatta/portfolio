import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-about',
  templateUrl: './area-about.component.html',
  styleUrls: ['./area-about.component.scss'],
})
export class AreaAboutComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
}
