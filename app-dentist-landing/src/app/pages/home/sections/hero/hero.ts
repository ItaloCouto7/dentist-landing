import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  logoImage = 'assets/images/carolini-logo-remove-bg.png';
  
  onWhatsAppClick(): void {
  const phone = '5581995970362';
  const message =
    'Olá, Dra. Carolini Coutinho.\n' +
    'Gostaria de agendar um atendimento odontológico. ' +
    'Poderia me passar mais informações, por favor?';

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


  scrollToServices(): void {
    document.getElementById('tratamentos')?.scrollIntoView({ behavior: 'smooth' });
  }
}