import { Component, afterNextRender } from '@angular/core';
import { ScrollSpyModule, ScrollSpyService } from '@avtest/ng-spy';
import { NavbarDesktopComponent } from '../navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from '../navbar-mobile/navbar-mobile.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ScrollSpyModule, NavbarDesktopComponent, NavbarMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private scrollSpyService: ScrollSpyService, private router: Router,) {
    afterNextRender(() => this.handleNavLinks());
  }

  ngAfterViewInit() {
    this.scrollSpyService.spy({ thresholdBottom: 50 });
    this.scrollSpyService.activeSpyTarget.subscribe(
      (activeTargetName: string) => activeTargetName !== null ? this.setActiveNavigationTarget(activeTargetName) : ''
    );
  }

  /**
   * Subscribes to the end of an navigation event
   * Individual actions per route
   */
  handleNavLinks() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url;

        // Reset active nav links on legal information page
        if (url.includes('legal-information')) {
          document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
          document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
          document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
          document.getElementById('nav-link-my-work')?.classList.remove('nav-link-active');
        }
      }
    });
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
