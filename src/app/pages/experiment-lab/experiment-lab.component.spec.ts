import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperimentLabComponent } from './experiment-lab.component';

describe('ExperimentLabComponent', () => {
  let component: ExperimentLabComponent;
  let fixture: ComponentFixture<ExperimentLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentLabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperimentLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the experiment lab component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero section with heading "Created by Belal"', () => {
    const heading = fixture.nativeElement.querySelector('.hero-title');
    expect(heading?.textContent).toContain('Created by Belal');

    const eyebrow = fixture.nativeElement.querySelector('.eyebrow-label');
    expect(eyebrow?.textContent).toContain('DESIGN × DEVELOPMENT EXPERIMENT');
  });

  it('should render 4 metric overview cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.metric-card');
    expect(cards.length).toBe(4);
    expect(component.metricCards.length).toBe(4);
  });

  it('should render 5 activity rows in the recent experiments table', () => {
    const rows = fixture.nativeElement.querySelectorAll('.activity-table tbody tr');
    expect(rows.length).toBe(5);
    expect(component.recentExperiments.length).toBe(5);
  });

  it('should render 6 workflow steps', () => {
    const steps = fixture.nativeElement.querySelectorAll('.workflow-step-card');
    expect(steps.length).toBe(6);
    expect(component.workflowSteps.length).toBe(6);
  });

  it('should render the About This Experiment card', () => {
    const aboutTitle = fixture.nativeElement.querySelector('.info-title');
    expect(aboutTitle?.textContent).toContain('About This Experiment');

    const footerTag = fixture.nativeElement.querySelector('.info-footer-tag');
    expect(footerTag?.textContent).toContain('Created by Belal • Angular × GitHub × Figma Make');
  });
});

