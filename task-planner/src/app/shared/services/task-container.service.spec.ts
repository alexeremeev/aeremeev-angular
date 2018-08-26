import { TestBed, inject } from '@angular/core/testing';

import { TaskContainerService } from './task-container.service';

describe('TaskContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskContainerService]
    });
  });

  it('should be created', inject([TaskContainerService], (service: TaskContainerService) => {
    expect(service).toBeTruthy();
  }));
});
