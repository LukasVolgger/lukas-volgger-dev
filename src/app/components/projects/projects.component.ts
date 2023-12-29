import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectsTabService } from '../../services/projects-tab.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, ProjectCardComponent, MatTabsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  activeTabIndex = 0;

  // TODO Add tryOut links

  constructor(private tabService: ProjectsTabService) { }

  ngOnInit() {
    this.tabService.activeTab$.subscribe((activeTab) => {
      // Update the active tab index based on the received tab name
      this.activeTabIndex = this.getTabIndex(activeTab);
    });
  }

  /**
   * Returns the index based on tab names
   * @param tab string
   * @returns integer
   */
  getTabIndex(tab: string): number {
    switch (tab) {
      case 'Business Apps':
        return 0;
      case 'Multimedia Apps':
        return 1;
      case 'Games':
        return 2;
      default:
        return 0;
    }
  }

  businessApps = [
    {
      id: 'project-1',
      title: 'Slack-Clone',
      description: "Clone of the well-known chat app Slack.<br>This web app was developed as a learning project in a groupeffort to practice the chat features and to practice the Git workflow with multiple collaborators and branches.",
      coverImageUrl: './../../assets/img/project covers/slack-clone_cover.png',
      coverImageAlt: 'Slack-Clone Cover',
      tags: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'Material Design', 'Firebase', 'Authentication'],
      githubLink: 'https://github.com/LukasVolgger/slack-clone',
      tryOutLink: '',
      isReversed: false,
    },
    {
      id: 'project-2',
      title: 'Simple-CRM',
      description: "Simple customer management.<br>A simple CRM (Customer Relationship Management) tool with features like user registration, authentication and data storage in the backend (Firebase).",
      coverImageUrl: './../../assets/img/project covers/simple-crm_cover.png',
      coverImageAlt: 'Simple-CRM Cover',
      tags: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'Material Design', 'Firebase', 'Authentication'],
      githubLink: 'https://github.com/LukasVolgger/simple-crm',
      tryOutLink: '',
      isReversed: true,
    },
    {
      id: 'project-6',
      title: 'Join',
      description: "Join is a Kanbanboard web app written with HTML, CSS and JavaScript as a team project. In this project, the client - server functionality was simulated with small JSON-based backend.",
      coverImageUrl: './../../assets/img/project covers/join_cover.png',
      coverImageAlt: 'Join Cover',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/join',
      tryOutLink: '',
      isReversed: false,
    },
  ];

  multimediaApps = [
    {
      id: 'project-4',
      title: 'My Portfolio',
      description: "My own portfolio website. This is an Angular project and written in HTML, SCSS and TypeScript.",
      coverImageUrl: './../../assets/img/project covers/portfolio_cover.png',
      coverImageAlt: 'Portfolio Cover',
      tags: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'Bootstrap', 'Firebase'],
      githubLink: 'https://github.com/LukasVolgger/lukas-volgger-at',
      tryOutLink: '',
      isReversed: false,
    },
    {
      id: 'project-7',
      title: 'Pokédex',
      description: "I wan't them all!<br> With Pokédex I can get a perfect overview of all Pokémons, search for them with autocomplete and save them as favorites! The project was created with HTML, CSS and JavaScript and all data is fetched from a REST API.",
      coverImageUrl: './../../assets/img/project covers/pokedex_cover.png',
      coverImageAlt: 'Pokédex Cover',
      tags: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Bootstrap'],
      githubLink: 'https://github.com/LukasVolgger/pokedex',
      tryOutLink: '',
      isReversed: true
    },
    {
      id: 'project-9',
      title: 'Delivery Service',
      description: "Copy? I can!<br> This delivery service website was created with HTML, CSS and JavaScript inspired by Lieferando. The main focus of this project is the simulation of the simple online shopping process as well as the design. For this reason not all functionalities were implemented.",
      coverImageUrl: './../../assets/img/project covers/delivery_service_cover.png',
      coverImageAlt: 'Delivery Service Cover',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/delivery-service',
      tryOutLink: '',
      isReversed: false,
    },
    {
      id: 'project-10',
      title: 'Photo Gallery',
      description: "Simple and beautiful.<br> This photo gallery contains a collection of images to my taste. It was written with HTML, CSS and JavaScript. A search function and tags make browsing easier. Keyboard and touch controls make it easy to use.",
      coverImageUrl: './../../assets/img/project covers/photo_gallery_cover.png',
      coverImageAlt: 'Photo Gallery Cover',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/photo-gallery',
      tryOutLink: '',
      isReversed: true,
    }
  ];

  games = [
    {
      id: 'project-3',
      title: 'Ring of Fire',
      description: "Go out and meet friends? You don't have to! Ring of Fire also known as Circle of Death is a drinking game with cards. By connecting to Google Firebase, the game is shared with others and up to 4 players can participate per game.",
      coverImageUrl: './../../assets/img/project covers/ring_of_fire_cover.png',
      coverImageAlt: 'Ring of Fire Cover',
      tags: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'Material Design', 'Firebase'],
      githubLink: 'https://github.com/LukasVolgger/ring-of-fire',
      tryOutLink: '',
      isReversed: false,
    },
    {
      id: 'project-5',
      title: 'Sharkie',
      description: "Sharkie is a small browser game written with HTML, CSS and JavaScript. The focus is on object-oriented programming with JavaScript.",
      coverImageUrl: './../../assets/img/project covers/sharkie_cover.png',
      coverImageAlt: 'Sharkie Cover',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/sharkie',
      tryOutLink: '',
      isReversed: true,
    },
    {
      id: 'project-8',
      title: 'Tic Tac Toe',
      description: "Beautiful crystals combined with a classic game.<br> This Tic Tac Toe game was programmed only with HTML, CSS and JavaScript. The unique design clearly stands out from the other games of this type.",
      coverImageUrl: './../../assets/img/project covers/tic_tac_toe_cover.png',
      coverImageAlt: 'Tic Tac Toe Cover',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/tic-tac-toe',
      tryOutLink: '',
      isReversed: false,
    },
  ];
}
