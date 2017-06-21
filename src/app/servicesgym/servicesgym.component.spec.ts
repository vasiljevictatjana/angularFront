import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesgymComponent } from './servicesgym.component';

describe('ServicesgymComponent', () => {
  let component: ServicesgymComponent;
  let fixture: ComponentFixture<ServicesgymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesgymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesgymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
