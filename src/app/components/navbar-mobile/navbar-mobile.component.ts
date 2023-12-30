import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsTabService } from '../../services/projects-tab.service';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [MatIconModule, LogoComponent, RouterModule],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
  constructor(private tabService: ProjectsTabService) { }

  /**
   * Sets the active projects tab
   * @param tab The name of the tab
   */
  setActiveTab(tab: string) {
    this.tabService.setActiveTab(tab);
  }
}
