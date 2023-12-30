import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-desktop',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './navbar-desktop.component.html',
  styleUrl: './navbar-desktop.component.scss'
})
export class NavbarDesktopComponent {

}
