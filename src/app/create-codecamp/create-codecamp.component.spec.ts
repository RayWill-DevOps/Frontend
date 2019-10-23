import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCodecampComponent } from './create-codecamp.component';

describe('CreateCodecampComponent', () => {
  let component: CreateCodecampComponent;
  let fixture: ComponentFixture<CreateCodecampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCodecampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCodecampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
