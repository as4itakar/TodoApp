/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskCrudService } from './task-crud.service';

describe('Service: TaskCrud', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskCrudService]
    });
  });

  it('should ...', inject([TaskCrudService], (service: TaskCrudService) => {
    expect(service).toBeTruthy();
  }));
});
