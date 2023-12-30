import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { ScrollSpyModule } from '@avtest/ng-spy';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ProjectsComponent, ContactComponent, RouterModule, ScrollSpyModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() { }
}
