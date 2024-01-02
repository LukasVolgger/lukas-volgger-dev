import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatChipsModule, ImageCarouselComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() projectData: any;
  @Input() index: any;
}
