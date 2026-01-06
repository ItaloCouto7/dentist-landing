import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'shield',
      title: 'Limpeza e Prevenção',
      description: 'Higienização profunda, profilaxia e orientações para manter seu sorriso saudável.'
    },
    {
      icon: 'sparkles',
      title: 'Clareamento Dental',
      description: 'Técnicas modernas para deixar seus dentes mais brancos e brilhantes de forma segura.'
    },
    {
      icon: 'wrench',
      title: 'Ortodontia',
      description: 'Aparelhos fixos e móveis para corrigir o alinhamento dos dentes com eficiência.'
    },
    {
      icon: 'zap',
      title: 'Implantes Dentários',
      description: 'Reabilitação completa com implantes de alta qualidade e durabilidade.'
    },
    {
      icon: 'diamond',
      title: 'Estética Dental',
      description: 'Lentes de contato, facetas e restaurações estéticas para um sorriso perfeito.'
    },
    {
      icon: 'smile',
      title: 'Harmonização Facial',
      description: 'Procedimentos estéticos que realçam a beleza natural do seu rosto.'
    }
  ];

  openWhatsApp(): void {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os tratamentos.', '_blank');
  }
}