import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: [],
  standalone: true,
  imports: [MatIconModule],
})
export class EmailComponent {
  public iconEmail = `
    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 22 22" width="22px">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
  `;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'iconEmail',
      sanitizer.bypassSecurityTrustHtml(this.iconEmail)
    );
  }
}
