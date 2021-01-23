import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmissionComponent } from './editmission.component';

describe('EditmissionComponent', () => {
  let component: EditmissionComponent;
  let fixture: ComponentFixture<EditmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
