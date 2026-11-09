import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly status = signal<'Ready' | 'Configured'>('Ready');
  readonly isModalOpen = signal(false);
  modalTrigger: HTMLElement | undefined;

  openModal(trigger?: HTMLElement): void {
    this.modalTrigger = trigger;
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  handleModalAccept(): void {
    this.isModalOpen.set(false);
  }
}
