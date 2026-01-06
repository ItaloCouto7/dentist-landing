import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Differential {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-diferential',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diferential.html',
  styleUrls: ['./diferential.scss']
})
export class DifferentialsComponent {
  differentials: Differential[] = [
    {
      icon: 'heart',
      title: 'Atendimento Humanizado',
      description: 'Cuidado personalizado e acolhedor para que você se sinta seguro e confortável.'
    },
    {
      icon: 'sparkles',
      title: 'Tecnologia Moderna',
      description: 'Equipamentos de última geração para tratamentos mais precisos e confortáveis.'
    },
    {
      icon: 'award',
      title: 'Profissional Qualificada',
      description: 'Mais de 10 anos de experiência e constante atualização profissional.'
    },
    {
      icon: 'clock',
      title: 'Flexibilidade de Horários',
      description: 'Horários flexíveis para se adaptar à sua rotina e necessidades.'
    }
  ];
}