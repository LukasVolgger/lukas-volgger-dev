import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    // this.handleNavLinks();
  }

  ngOnInit(): void {
  }

  /**
   * Displays the current position in the navigation
   */
  handleNavLinks() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url;

        switch (url) {
          case '/':
            document.getElementById('nav-link-home')?.classList.add('nav-link-active');

            document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-projects')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
            break;

          case '/#about-me-section':
            document.getElementById('nav-link-about-me')?.classList.add('nav-link-active');

            document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-projects')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
            break;

          case '/#projects':
            document.getElementById('nav-link-projects')?.classList.add('nav-link-active');

            document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
            break;

          case '/#contact':
            document.getElementById('nav-link-contact')?.classList.add('nav-link-active');

            document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-projects')?.classList.remove('nav-link-active');
            break;

          case '/legal-information':
            document.getElementById('nav-link-contact')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-home')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-about-me')?.classList.remove('nav-link-active');
            document.getElementById('nav-link-projects')?.classList.remove('nav-link-active');
            break;

        }
      }
    });
  }
}
