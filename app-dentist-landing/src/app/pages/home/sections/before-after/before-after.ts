import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Case {
  before: string;
  after: string;
  treatment: string;
  showAfter?: boolean;
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
      before: '/assets/images/sorriso-before.jpeg',
      after: '/assets/images/sorriso-after.jpeg',
      treatment: 'Clareamento Dental',
      showAfter: false
    },
  ];

  toggleView(item: Case) {
    item.showAfter = !item.showAfter;
  }
}