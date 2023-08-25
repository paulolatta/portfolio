import { Component, Input } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class IconComponent {
  @Input() name: string = '';
  @Input() icon: string = '';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.iconRegistry.addSvgIconLiteral(
      this.name,
      this.sanitizer.bypassSecurityTrustHtml(this.icon)
    );
  }
}
