import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesListComponent } from './sites-list.component';

describe('SitesListComponent', () => {
  let component: SitesListComponent;
  let fixture: ComponentFixture<SitesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
