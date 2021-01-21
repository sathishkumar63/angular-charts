import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageChartsComponent } from './manage-charts.component';

describe('ManageChartsComponent', () => {
  let component: ManageChartsComponent;
  let fixture: ComponentFixture<ManageChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
