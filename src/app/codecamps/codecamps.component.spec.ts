import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecampsComponent } from './codecamps.component';

describe('CodecampsComponent', () => {
  let component: CodecampsComponent;
  let fixture: ComponentFixture<CodecampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodecampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
