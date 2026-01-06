import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-cta.html',
  styleUrls: ['./whatsapp-cta.scss']
})
export class WhatsappCtaComponent {
  @Output() whatsAppClick = new EventEmitter<void>();

  onWhatsAppClick(): void {
    this.whatsAppClick.emit();
  }
}