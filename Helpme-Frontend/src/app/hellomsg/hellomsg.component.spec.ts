import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellomsgComponent } from './hellomsg.component';

describe('HellomsgComponent', () => {
  let component: HellomsgComponent;
  let fixture: ComponentFixture<HellomsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellomsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HellomsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
