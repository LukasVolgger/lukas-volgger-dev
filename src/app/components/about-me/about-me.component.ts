import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollSpyModule } from '@avtest/ng-spy';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule, ScrollSpyModule, SkillsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  myAgeInYears: number = 0;
  headerText: string = '" I am a software developer based in Austria with a fervent passion for gaming and a deep interest in PC technology.<br> I look forward to translating my enthusiasm into the development of software solutions and continuously enhancing my skills. "';

  constructor() { }

  ngOnInit(): void {
    this.myAgeInYears = this.calcMyAge();
  }

  /**
   * Calculates my age for the description text
   * @returns Int my age
   */
  calcMyAge() {
    const myBirthday: string = '1993-09-19';
    const myBirthdayTimestamp: number = new Date(myBirthday).getTime();
    const timestampNow: number = new Date().getTime();

    return Math.floor((timestampNow - myBirthdayTimestamp) / 31556926000);
  }

}
