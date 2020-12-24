import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgmodelComponent } from './app-ngmodel.component';

describe('AppNgmodelComponent', () => {
  let component: AppNgmodelComponent;
  let fixture: ComponentFixture<AppNgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNgmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
