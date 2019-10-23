import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCodecampComponent } from './update-codecamp.component';

describe('UpdateCodecampComponent', () => {
  let component: UpdateCodecampComponent;
  let fixture: ComponentFixture<UpdateCodecampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCodecampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCodecampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
