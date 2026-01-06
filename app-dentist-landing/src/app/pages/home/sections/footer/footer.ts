import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  @Input() logoImage: string = '';
  @Output() whatsAppClick = new EventEmitter<void>();

  currentYear = new Date().getFullYear();

  onWhatsAppClick(): void {
    this.whatsAppClick.emit();
  }

  onSocialClick(platform: string): void {
    const urls: { [key: string]: string } = {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  }
}