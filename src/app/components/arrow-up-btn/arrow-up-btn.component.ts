import { ChangeDetectorRef, Component, afterNextRender } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-arrow-up-btn',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './arrow-up-btn.component.html',
  styleUrl: './arrow-up-btn.component.scss'
})
export class ArrowUpBtnComponent {
  buttonVisible: boolean = false;

  constructor(private location: Location, private changeDetectorRef: ChangeDetectorRef) {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        this.buttonVisible = window.scrollY >= 100;
        this.changeDetectorRef.detectChanges();
      })
    });
  }

  /**
   * Scroll to the top
   */
  scrollToTop() {
    this.resetSiteUrl();

    // The timeout is needed to prevent scrolling from stopping immediately after a few pixels
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 250);
  }

  /**
   * Resets the URL if previously navigated to any anchors
   */
  resetSiteUrl() {
    this.location.replaceState("/");
  }
}