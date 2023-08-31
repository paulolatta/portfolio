import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class ContactComponent {
  public icon: string = 'contact_mail';
  public title: string = 'Contato';

  form: UntypedFormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    message: [null, Validators.required],
  });

  constructor(private formBuilder: UntypedFormBuilder) {}

  enviar(): void {
    const values = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      message: this.form.get('message')?.value,
    };
  }
}
