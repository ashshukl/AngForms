import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebclientComponent } from './webclient.component';

describe('WebclientComponent', () => {
  let component: WebclientComponent;
  let fixture: ComponentFixture<WebclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebclientComponent]
    });
    fixture = TestBed.createComponent(WebclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
