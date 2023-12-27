import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  myBirthday: string = '1993-09-19';
  myBirthdayTimestamp: number = new Date(this.myBirthday).getTime();
  timestampNow: number = new Date().getTime();
  myAgeInYears: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.myAgeInYears = Math.floor((this.timestampNow - this.myBirthdayTimestamp) / 31556926000);
  }

}
