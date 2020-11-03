import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:Helpme-Frontend/src/app/user/user.component.spec.ts
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
=======
import { CreationMissionComponent } from './creation-mission.component';

describe('CreationMissionComponent', () => {
  let component: CreationMissionComponent;
  let fixture: ComponentFixture<CreationMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationMissionComponent ]
>>>>>>> refs/remotes/origin/master:Helpme-Frontend/src/app/components/creation-mission/creation-mission.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:Helpme-Frontend/src/app/user/user.component.spec.ts
    fixture = TestBed.createComponent(UserComponent);
=======
    fixture = TestBed.createComponent(CreationMissionComponent);
>>>>>>> refs/remotes/origin/master:Helpme-Frontend/src/app/components/creation-mission/creation-mission.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
