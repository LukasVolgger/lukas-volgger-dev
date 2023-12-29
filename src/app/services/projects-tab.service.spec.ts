import { TestBed } from '@angular/core/testing';

import { ProjectsTabService } from './projects-tab.service';

describe('ProjectsTabService', () => {
  let service: ProjectsTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
