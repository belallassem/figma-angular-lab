import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it('should create the modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should not display dialog when isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();

    const dialog = fixture.nativeElement.querySelector('.modal-backdrop');
    expect(dialog).toBeNull();
  });

  it('should display title and message when isOpen is true', () => {
    component.isOpen = true;
    component.title = 'Welcome!';
    component.message = 'This is made by Belal';
    fixture.detectChanges();

    const titleEl = fixture.nativeElement.querySelector('.modal-title');
    const messageEl = fixture.nativeElement.querySelector('.modal-message');

    expect(titleEl?.textContent).toContain('Welcome!');
    expect(messageEl?.textContent).toContain('This is made by Belal');
  });

  it('should emit accept and close when Accept button is clicked', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const acceptSpy = vi.spyOn(component.accept, 'emit');
    const closeSpy = vi.spyOn(component.close, 'emit');

    const acceptBtn = fixture.nativeElement.querySelector('button.btn-primary');
    acceptBtn?.click();

    expect(acceptSpy).toHaveBeenCalled();
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should emit close when Close button is clicked', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const closeSpy = vi.spyOn(component.close, 'emit');

    const closeBtn = fixture.nativeElement.querySelector('button.btn-secondary');
    closeBtn?.click();

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should emit close when Escape key is pressed', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const closeSpy = vi.spyOn(component.close, 'emit');

    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    document.dispatchEvent(event);

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should emit close when backdrop is clicked', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const closeSpy = vi.spyOn(component.close, 'emit');

    const backdrop = fixture.nativeElement.querySelector('.modal-backdrop');
    backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: false }));

    expect(closeSpy).toHaveBeenCalled();
  });
});

