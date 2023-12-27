import { ChangeDetectorRef, Component, OnInit, afterNextRender } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-btt-btn',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './btt-btn.component.html',
  styleUrl: './btt-btn.component.scss'
})
export class BackToTopBtnComponent implements OnInit {
  buttonVisible: boolean = false;

  constructor(private location: Location, private cdr: ChangeDetectorRef) {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        this.buttonVisible = window.scrollY >= 100;
        this.cdr.detectChanges();
      })
    });
  }

  ngOnInit(): void { }

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