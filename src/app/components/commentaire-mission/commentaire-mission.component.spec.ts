import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireMissionComponent } from './commentaire-mission.component';

describe('CommentaireMissionComponent', () => {
  let component: CommentaireMissionComponent;
  let fixture: ComponentFixture<CommentaireMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
