import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollSpyModule, ScrollSpyService } from '@avtest/ng-spy';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ProjectsComponent, ContactComponent, CommonModule, RouterModule, ScrollSpyModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private scrollSpyService: ScrollSpyService) { }
}
