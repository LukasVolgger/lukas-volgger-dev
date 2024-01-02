import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ArrowUpBtnComponent } from './components/arrow-up-btn/arrow-up-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollSpyModule, ScrollSpyService } from '@avtest/ng-spy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ArrowUpBtnComponent, FooterComponent, ScrollSpyModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lukas-volgger-dev';

  constructor(viewport: ViewportScroller, private scrollSpyService: ScrollSpyService) {
    viewport.setOffset([0, 110])
  }

  ngAfterViewInit() {
    this.scrollSpyService.spy({ thresholdBottom: 50 });

    // this.scrollSpyService.activeSpyTarget.subscribe(
    //   (activeTargetName: string) => activeTargetName !== null ? console.log('visible:', activeTargetName) : ''
    // );
  }
}
