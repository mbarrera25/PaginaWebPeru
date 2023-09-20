import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesInstagramComponent } from './images-instagram.component';

describe('ImagesInstagramComponent', () => {
  let component: ImagesInstagramComponent;
  let fixture: ComponentFixture<ImagesInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesInstagramComponent]
    });
    fixture = TestBed.createComponent(ImagesInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
