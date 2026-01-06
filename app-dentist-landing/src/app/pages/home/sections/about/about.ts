import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  stats: Stat[] = [
    { icon: 'award', label: 'Anos de Experiência', value: '10+' },
    { icon: 'users', label: 'Pacientes Atendidos', value: '1000+' },
    { icon: 'heart', label: 'Satisfação', value: '98%' }
  ];
}