import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilosofiaComponent } from './filosofia.component';

describe('FislosofiaComponent', () => {
  let component: FilosofiaComponent;
  let fixture: ComponentFixture<FilosofiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilosofiaComponent]
    });
    fixture = TestBed.createComponent(FilosofiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
