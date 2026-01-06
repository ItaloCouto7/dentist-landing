import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  logoImage = 'assets/logo.png';
  
  onWhatsAppClick(): void {
  }

  scrollToServices(): void {
    document.getElementById('tratamentos')?.scrollIntoView({ behavior: 'smooth' });
  }
}