import { TestBed } from '@angular/core/testing';
import { CoursesService } from 'src/app/courses/services/sites.service';



describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});