import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  icon: string;
  title: string;
  info: string;
  subinfo: string;
}

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.html',
  styleUrls: ['./location.scss']
})
export class LocationComponent {
  contactInfo: ContactInfo[] = [
    {
      icon: 'phone',
      title: 'Telefone / WhatsApp',
      info: '(81) 99999-9999',
      subinfo: 'Segunda a Sexta: 8h às 18h'
    },
    {
      icon: 'clock',
      title: 'Horário de Atendimento',
      info: 'Segunda a Sexta: 8h às 18h',
      subinfo: 'Sábado: 9h às 13h'
    },
    {
      icon: 'mail',
      title: 'E-mail',
      info: 'contato@carolinichaves.com.br',
      subinfo: 'Respondemos em até 24h'
    },
    {
      icon: 'map',
      title: 'Atendimento',
      info: 'Atendimento domiciliar em Recife',
      subinfo: 'Consulte disponibilidade na sua região'
    }
  ];
}