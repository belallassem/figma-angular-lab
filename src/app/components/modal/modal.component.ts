import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnChanges, OnDestroy {
  @Input() isOpen = false;
  @Input() title = 'Welcome!';
  @Input() message = 'This is made by Belal';
  @Input() triggerElement?: HTMLElement;

  @Output() close = new EventEmitter<void>();
  @Output() accept = new EventEmitter<void>();

  @ViewChild('modalDialog') modalDialog?: ElementRef<HTMLDivElement>;
  @ViewChild('acceptBtn') acceptBtn?: ElementRef<HTMLButtonElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          this.focusInitialElement();
        }, 50);
      } else {
        document.body.style.overflow = '';
        this.restoreTriggerFocus();
      }
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: Event): void {
    if (this.isOpen) {
      event.preventDefault();
      this.handleClose();
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: Event): void {
    if (!this.isOpen || !(event instanceof KeyboardEvent) || event.key !== 'Tab') {
      return;
    }

    const focusable = this.getFocusableElements();
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.handleClose();
    }
  }

  handleAccept(): void {
    this.accept.emit();
    this.handleClose();
  }

  handleClose(): void {
    this.close.emit();
  }

  private focusInitialElement(): void {
    if (this.acceptBtn?.nativeElement) {
      this.acceptBtn.nativeElement.focus();
      return;
    }
    const focusable = this.getFocusableElements();
    if (focusable.length > 0) {
      focusable[0].focus();
    }
  }

  private restoreTriggerFocus(): void {
    if (this.triggerElement) {
      this.triggerElement.focus();
    }
  }

  private getFocusableElements(): HTMLElement[] {
    if (!this.modalDialog?.nativeElement) {
      return [];
    }
    const selector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(
      this.modalDialog.nativeElement.querySelectorAll<HTMLElement>(selector)
    );
  }
}
