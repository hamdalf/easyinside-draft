/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RobotService } from './robot.service';

describe('RobotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RobotService]
    });
  });

  it('should ...', inject([RobotService], (service: RobotService) => {
    expect(service).toBeTruthy();
  }));
});
