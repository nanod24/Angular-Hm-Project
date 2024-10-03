import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFouundComponent } from './page-not-fouund.component';

describe('PageNotFouundComponent', () => {
  let component: PageNotFouundComponent;
  let fixture: ComponentFixture<PageNotFouundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFouundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFouundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
