import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectsTabService } from '../../services/projects-tab.service';
import { ScrollSpyModule } from '@avtest/ng-spy';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, ProjectCardComponent, MatTabsModule, ScrollSpyModule],
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

  // ################################################################################ Business Apps

  businessApps = [
    {
      title: 'Slack-Clone',
      description: "Clone of the well-known chat app Slack.<br>This web app was developed as a learning project in a groupeffort to practice the chat features and to practice the Git workflow with multiple collaborators and branches.",
      imageArray: [
        './../../assets/img/projects/slack-clone/get_started-min.png',
        './../../assets/img/projects/slack-clone/sign_up-min.png',
        './../../assets/img/projects/slack-clone/chat_channel-min.png'
      ],
      tags: ['HTML', 'SCSS', 'TypeScript', 'Angular 14', 'Angular Material', 'Firebase', 'Authentication'],
      githubLink: 'https://github.com/LukasVolgger/slack-clone',
      tryOutLink: '',
      isReversed: false,
    },
    {
      title: 'Simple-CRM',
      description: "Simple customer management.<br>A simple CRM (Customer Relationship Management) tool with features like user registration, authentication and data storage in the backend (Firebase).",
      imageArray: [
        './../../assets/img/projects/simple-crm/login-min.png',
        './../../assets/img/projects/simple-crm/dashboard-min.png',
        './../../assets/img/projects/simple-crm/customer-min.png'
      ],
      tags: ['HTML', 'SCSS', 'TypeScript', 'Angular 14', 'Angular Material', 'Firebase', 'Authentication'],
      githubLink: 'https://github.com/LukasVolgger/simple-crm',
      tryOutLink: '',
      isReversed: true,
    },
    {
      title: 'Join',
      description: "Join is a Kanbanboard web app written with HTML, CSS and JavaScript as a team project. In this project, the client - server functionality was simulated with small JSON-based backend.",
      imageArray: [
        './../../assets/img/projects/join/login-min.png',
        './../../assets/img/projects/join/add_task-min.png',
        './../../assets/img/projects/join/backlog-min.png'
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/join',
      tryOutLink: '',
      isReversed: false,
    },
  ];

  // ################################################################################ Multimedia Apps

  multimediaApps = [
    {
      title: 'My Portfolio',
      description: "My own portfolio website. This is an Angular project and written in HTML, SCSS and TypeScript.",
      imageArray: [
        './../../assets/img/projects/portfolio/home-min.png',
        './../../assets/img/projects/portfolio/about_me-min.png',
        './../../assets/img/projects/portfolio/projects-min.png'
      ],
      tags: ['HTML', 'SCSS', 'TypeScript', 'Angular 17', 'Angular Material', 'Bootstrap', 'Firebase'],
      githubLink: 'https://github.com/LukasVolgger/lukas-volgger-at',
      tryOutLink: '',
      isReversed: false,
    },
    {
      title: 'Pokédex',
      description: "I wan't them all!<br> With Pokédex I can get a perfect overview of all Pokémons, search for them with autocomplete and save them as favorites! The project was created with HTML, CSS and JavaScript and all data is fetched from a REST API.",
      imageArray: [
        './../../assets/img/projects/pokedex/cover-min.png',
        './../../assets/img/projects/pokedex/main-min.png',
        './../../assets/img/projects/pokedex/details-min.png'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'REST-API', 'Bootstrap'],
      githubLink: 'https://github.com/LukasVolgger/pokedex',
      tryOutLink: '',
      isReversed: true
    },
    {
      title: 'Delivery Service',
      description: "Copy? I can!<br> This delivery service website was created with HTML, CSS and JavaScript inspired by Lieferando. The main focus of this project is the simulation of the simple online shopping process as well as the design. For this reason not all functionalities were implemented.",
      imageArray: [
        './../../assets/img/projects/delivery-service/main-min.png',
        './../../assets/img/projects/delivery-service/basket-min.png',
        './../../assets/img/projects/delivery-service/info-min.png'
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/delivery-service',
      tryOutLink: '',
      isReversed: false,
    },
    {
      title: 'Photo Gallery',
      description: "Simple and beautiful.<br> This photo gallery contains a collection of images to my taste. It was written with HTML, CSS and JavaScript. A search function and tags make browsing easier. Keyboard and touch controls make it easy to use.",
      imageArray: [
        './../../assets/img/projects/photo-gallery/home-min.png',
        './../../assets/img/projects/photo-gallery/details-min.png',
        './../../assets/img/projects/photo-gallery/details_2-min.png'
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/photo-gallery',
      tryOutLink: '',
      isReversed: true,
    }
  ];

  // ################################################################################ Games

  games = [
    {
      title: 'Ring of Fire',
      description: "Go out and meet friends? You don't have to! Ring of Fire also known as Circle of Death is a drinking game with cards. By connecting to Google Firebase, the game is shared with others and up to 4 players can participate per game.",
      imageArray: [
        './../../assets/img/projects/ring-of-fire/start-min.png',
        './../../assets/img/projects/ring-of-fire/game-min.png',
        './../../assets/img/projects/ring-of-fire/game_2-min.png'
      ],
      tags: ['HTML', 'SCSS', 'TypeScript', 'Angular 14', 'Angular Material', 'Firebase'],
      githubLink: 'https://github.com/LukasVolgger/ring-of-fire',
      tryOutLink: '',
      isReversed: false,
    },
    {
      title: 'Sharkie',
      description: "Sharkie is a small browser game written with HTML, CSS and JavaScript. The focus is on object-oriented programming with JavaScript.",
      imageArray: [
        './../../assets/img/projects/sharkie/cover-min.png',
        './../../assets/img/projects/sharkie/level_1-min.png',
        './../../assets/img/projects/sharkie/help-min.png',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/sharkie',
      tryOutLink: '',
      isReversed: true,
    },
    {
      title: 'Tic Tac Toe',
      description: "Beautiful crystals combined with a classic game.<br> This Tic Tac Toe game was programmed only with HTML, CSS and JavaScript. The unique design clearly stands out from the other games of this type.",
      imageArray: [
        './../../assets/img/projects/tic-tac-toe/cover-min.png',
        './../../assets/img/projects/tic-tac-toe/game-min.png',
        './../../assets/img/projects/tic-tac-toe/end_screen-min.png',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/LukasVolgger/tic-tac-toe',
      tryOutLink: '',
      isReversed: false,
    },
  ];
}
