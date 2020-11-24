import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassworduserComponent } from './passworduser.component';

describe('PassworduserComponent', () => {
  let component: PassworduserComponent;
  let fixture: ComponentFixture<PassworduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassworduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassworduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
