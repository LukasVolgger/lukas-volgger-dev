import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {

}
