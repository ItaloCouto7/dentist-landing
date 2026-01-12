import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  treatment: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Maria Silva',
      treatment: 'Clareamento Dental',
      text: 'A Dra. Carolini é excepcional! Além de ter um atendimento super acolhedor, o resultado do meu clareamento ficou incrível. Recomendo de olhos fechados!',
      rating: 5
    },
    {
      name: 'João Santos',
      treatment: 'Implante Dentário',
      text: 'Estava com muito medo de fazer implante, mas a Dra. Carolini me deixou tranquilo o tempo todo. O procedimento foi super tranquilo e o resultado ficou perfeito!',
      rating: 5
    },
    {
      name: 'Ana Paula',
      treatment: 'Clareamento Dental',
      text: 'Fiz clareamento e o resultado superou minhas expectativas. Meu sorriso ficou renovado e muito mais bonito. Atendimento impecável da Dra. Carolini!',
      rating: 5
    },
    {
      name: 'Carlos Eduardo',
      treatment: 'Ortodontia',
      text: 'Profissional extremamente competente e carinhosa. O consultório é lindo e moderno. Estou muito satisfeito com o tratamento ortodôntico!',
      rating: 5
    },
    {
      name: 'Juliana Costa',
      treatment: 'Implante Dentário',
      text: 'Recuperei meu sorriso e minha confiança! O implante ficou perfeito, muito natural e confortável. A Dra. Carolini me passou muita segurança do começo ao fim.',
      rating: 5
    },
    {
      name: 'Roberto Lima',
      treatment: 'Limpeza e Prevenção',
      text: 'Atendimento impecável! A Dra. Carolini é super atenciosa e dedicada. Me sinto seguro e bem cuidado em todas as consultas.',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}