import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, MyWorkComponent, ContactMeComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
