import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { ProjectsTabService } from '../../services/projects-tab.service';
import { ScrollSpyModule, ScrollSpyService } from '@avtest/ng-spy';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatIconModule, ScrollSpyModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router, private tabService: ProjectsTabService, private scrollSpyService: ScrollSpyService) {
    this.handleNavLinks();
  }

  setActiveTab(tab: string) {
    this.tabService.setActiveTab(tab);
  }

  ngAfterViewInit() {
    this.scrollSpyService.spy({ thresholdBottom: 50 });
    this.scrollSpyService.activeSpyTarget.subscribe(
      (activeTargetName: string) => activeTargetName !== null ? this.setActiveNavigationTarget(activeTargetName) : ''
    );
  }

  /**
   * Sets the active class to the respective nav element in the viewport
   * @param targetName String name of the scrollSpy target name
   */
  setActiveNavigationTarget(targetName: string) {
    if (targetName === 'home') {
      this.homeLinkActive();
    }

    if (targetName === 'about-me') {
      this.aboutMeLinkActive();
    }

    if (targetName === 'projects') {
      this.projectLinkActive();
    }

    if (targetName === 'contact') {
      this.contactLinkAcive();
    }
  }

  /**
   * Displays the current position in the navigation
   */
  handleNavLinks() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;

        switch (url) {
          case '/':
            this.homeLinkActive();
            break;
          case '/#about-me-section':
            this.aboutMeLinkActive();
            break;
          case '/#projects':
            this.projectLinkActive();
            break;
          case '/#contact':
            this.contactLinkAcive();
            break;
        }
      }
    });
  }

  homeLinkActive() {
    document.getElementById('nav-link-home')?.classList.add('nav-link-active');

    document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
    document.getElementById('nav-link-projects')?.classList.remove('nav-link-active');
    document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
  }

  aboutMeLinkActive() {
    document.getElementById('nav-link-about-me')?.classList.add('nav-link-active');

    document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
    document.getElementById('nav-link-projects')?.classList.remove('nav-link-active');
    document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
  }

  projectLinkActive() {
    document.getElementById('nav-link-projects')?.classList.add('nav-link-active');

    document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
    document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
    document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
  }

  contactLinkAcive() {
    document.getElementById('nav-link-contact')?.classList.add('nav-link-active');

    document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
    document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
    document.getElementById('nav-link-projects')?.classList.remove('nav-link-active');
  }
}
