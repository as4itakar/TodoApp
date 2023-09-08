/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskSubjectService } from './task-subject.service';

describe('Service: TaskSubject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskSubjectService]
    });
  });

  it('should ...', inject([TaskSubjectService], (service: TaskSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
