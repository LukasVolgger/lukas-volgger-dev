import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      caption: 'C#',
      imageSrc: './../../assets/img/icons/skills/csharp.svg',
      imageAlt: 'C# Logo'
    },
    {
      caption: '.NET',
      imageSrc: './../../assets/img/icons/skills/dotnet.svg',
      imageAlt: '.NET Logo'
    },
    {
      caption: 'Java',
      imageSrc: './../../assets/img/icons/skills/java.svg',
      imageAlt: 'Java Logo'
    },
    {
      caption: 'TypeScript',
      imageSrc: './../../assets/img/icons/skills/typescript.svg',
      imageAlt: 'TypeScript Logo'
    },
    {
      caption: 'JavaScript',
      imageSrc: './../../assets/img/icons/skills/javascript.svg',
      imageAlt: 'JavaScript Logo'
    },
    {
      caption: 'Angular',
      imageSrc: './../../assets/img/icons/skills/angular.svg',
      imageAlt: 'Angular Logo'
    },
    {
      caption: 'HTML5',
      imageSrc: './../../assets/img/icons/skills/html5.svg',
      imageAlt: 'HTML5 Logo'
    },
    {
      caption: 'CSS3',
      imageSrc: './../../assets/img/icons/skills/css3.svg',
      imageAlt: 'CSS3 Logo'
    },
    {
      caption: 'SQL',
      imageSrc: './../../assets/img/icons/skills/sql.svg',
      imageAlt: 'SQL Logo'
    },
    {
      caption: 'AWS',
      imageSrc: './../../assets/img/icons/skills/aws.svg',
      imageAlt: 'AWS Logo'
    },
    {
      caption: 'Docker',
      imageSrc: './../../assets/img/icons/skills/docker.svg',
      imageAlt: 'Docker Logo'
    },
    {
      caption: 'Git',
      imageSrc: './../../assets/img/icons/skills/git.svg',
      imageAlt: 'Git Logo'
    },
    {
      caption: 'REST-API',
      imageSrc: './../../assets/img/icons/skills/api.svg',
      imageAlt: 'REST-API Logo'
    },
    {
      caption: 'SCRUM',
      imageSrc: './../../assets/img/icons/skills/scrum.svg',
      imageAlt: 'SCRUM Logo'
    },
    {
      caption: 'Material Design',
      imageSrc: './../../assets/img/icons/skills/material_design.svg',
      imageAlt: 'Material Design Logo'
    },
    {
      caption: 'Bootstrap',
      imageSrc: './../../assets/img/icons/skills/bootstrap.svg',
      imageAlt: 'Bootstrap Logo'
    },
  ]
}
