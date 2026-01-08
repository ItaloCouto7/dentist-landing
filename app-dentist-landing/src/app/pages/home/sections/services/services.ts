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
      description: 'Orientação de higiene personalizada, raspagem gengival, profilaxia e orientações para manter seu sorriso saudável.'
    },
    {
      icon: 'sparkles',
      title: 'Clareamento Dental',
      description: 'Técnicas combinadas caseiras e de consultórios individualizadas a cada paciente.'
    },
    {
      icon: 'wrench',
      title: 'Implantes dentários',
      description: 'Solução moderna e segura devolvendo autoestima e segurança.'
    },
    {
      icon: 'diamond',
      title: 'Atendimento infantil',
      description: 'Atendimento com carinho, atenção e paciência para os pequenos hérois. Orientando e devolvendo saúde.'
    },
    {
      icon: 'zap',
      title: 'Atendimento clínico',
      description: 'Restaurações estéticas e funcionais. Utilizando técnicas modernas e materiais de alta qualidade para garantir durabilidade e conforto. '
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