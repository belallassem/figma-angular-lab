import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  it('should render Click Me button in hero section', () => {
    const clickMeBtn = fixture.nativeElement.querySelector('.btn-click-me');
    expect(clickMeBtn).toBeTruthy();
    expect(clickMeBtn.textContent).toContain('Click Me');
  });

  it('should open modal when Click Me is clicked', () => {
    expect(component.isModalOpen()).toBe(false);

    const clickMeBtn = fixture.nativeElement.querySelector('.btn-click-me') as HTMLButtonElement;
    clickMeBtn.click();
    fixture.detectChanges();

    expect(component.isModalOpen()).toBe(true);
    const modalTitle = fixture.nativeElement.querySelector('.modal-title');
    expect(modalTitle?.textContent).toContain('Welcome!');
  });

  it('should close modal when closeModal is called', () => {
    component.openModal();
    fixture.detectChanges();
    expect(component.isModalOpen()).toBe(true);

    component.closeModal();
    fixture.detectChanges();
    expect(component.isModalOpen()).toBe(false);
  });
});

