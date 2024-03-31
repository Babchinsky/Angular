import { TestBed } from '@angular/core/testing';
import { AuditoriumService } from './auditorium-service.service'; // Импортируем правильный класс

describe('AuditoriumServiceService', () => {
  let service: AuditoriumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditoriumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
