import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationMissionComponent } from './creation-mission.component';

describe('CreationMissionComponent', () => {
  let component: CreationMissionComponent;
  let fixture: ComponentFixture<CreationMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
