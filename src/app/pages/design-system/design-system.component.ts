import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ColorToken {
  name: string;
  variable: string;
  hex: string;
  description: string;
}

@Component({
  selector: 'app-design-system',
  imports: [RouterLink],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.scss'
})
export class DesignSystemComponent {
  readonly clickCount = signal(0);
  readonly copiedToken = signal<string | null>(null);

  readonly colorTokens: ColorToken[] = [
    { name: 'Figma Blue (Primary)', variable: '--color-primary', hex: '#0D99FF', description: 'Main brand and interactive highlight' },
    { name: 'Angular Red (Accent)', variable: '--color-angular', hex: '#E23237', description: 'Secondary accent and framework identity' },
    { name: 'Deep Slate (Text)', variable: '--color-text-main', hex: '#0F172A', description: 'Primary headings and high-contrast typography' },
    { name: 'Slate Gray (Muted)', variable: '--color-text-muted', hex: '#64748B', description: 'Secondary copy, captions, and metadata' },
    { name: 'Emerald (Success)', variable: '--color-success', hex: '#10B981', description: 'Positive feedback, badges, and confirmations' },
    { name: 'Amber (Warning)', variable: '--color-warning', hex: '#F59E0B', description: 'Attention banners and caution badges' },
  ];

  incrementCounter(): void {
    this.clickCount.update(c => c + 1);
  }

  resetCounter(): void {
    this.clickCount.set(0);
  }
}

