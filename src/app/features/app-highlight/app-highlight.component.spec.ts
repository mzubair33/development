import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHighLightComponent } from './app-highlight.component';

describe('CustomDirectiveComponent', () => {
  let component: AppHighLightComponent;
  let fixture: ComponentFixture<AppHighLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppHighLightComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHighLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
