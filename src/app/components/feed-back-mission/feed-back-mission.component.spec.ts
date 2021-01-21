import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackMissionComponent } from './feed-back-mission.component';

describe('FeedBackMissionComponent', () => {
  let component: FeedBackMissionComponent;
  let fixture: ComponentFixture<FeedBackMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBackMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
