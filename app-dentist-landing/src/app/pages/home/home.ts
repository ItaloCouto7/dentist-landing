import { Component } from '@angular/core';
import { ServicesComponent } from "./sections/services/services";
import { AboutComponent } from "./sections/about/about";
import { LocationComponent } from "./sections/location/location";
import { HeroComponent } from './sections/hero/hero';
import { TestimonialsComponent } from './sections/testimonials/testimonials';
import { DifferentialsComponent } from './sections/diferential/diferential';
import { BeforeAfterComponent } from './sections/before-after/before-after';
import { WhatsappCtaComponent } from "./sections/whatsapp-cta/whatsapp-cta";
import { FooterComponent } from "./sections/footer/footer";

@Component({
  selector: 'app-home',
  imports: [ServicesComponent, AboutComponent, LocationComponent, HeroComponent, TestimonialsComponent, DifferentialsComponent, BeforeAfterComponent, WhatsappCtaComponent, LocationComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
 