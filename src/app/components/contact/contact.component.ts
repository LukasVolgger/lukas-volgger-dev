import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ScrollSpyModule } from '@avtest/ng-spy';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, MatButtonModule, ContactFormComponent, ScrollSpyModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor() { }
}
