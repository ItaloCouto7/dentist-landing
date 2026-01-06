import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Case {
  before: string;
  after: string;
  treatment: string;
}

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './before-after.html',
  styleUrls: ['./before-after.scss']
})
export class BeforeAfterComponent {
  cases: Case[] = [
    {
      before: 'https://images.unsplash.com/photo-1657313611583-ce19d042cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB3aGl0ZSUyMHRlZXRofGVufDF8fHx8MTc2NzcxMDM4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      after: 'https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsZXxlbnwxfHx8fDE3Njc2ODczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      treatment: 'Clareamento Dental'
    },
    {
      before: 'https://images.unsplash.com/photo-1657313611583-ce19d042cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB3aGl0ZSUyMHRlZXRofGVufDF8fHx8MTc2NzcxMDM4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      after: 'https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsZXxlbnwxfHx8fDE3Njc2ODczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      treatment: 'Lentes de Contato'
    },
    {
      before: 'https://images.unsplash.com/photo-1657313611583-ce19d042cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB3aGl0ZSUyMHRlZXRofGVufDF8fHx8MTc2NzcxMDM4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      after: 'https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsZXxlbnwxfHx8fDE3Njc2ODczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      treatment: 'Harmonização Facial'
    }
  ];
}