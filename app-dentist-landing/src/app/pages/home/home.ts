import { Component } from '@angular/core';
import { ServicesComponent } from "./sections/services/services";
import { AboutComponent } from "./sections/about/about";
import { Location } from "./sections/location/location";
import { BeforeAfter } from "./sections/before-after/before-after";
import { HeroComponent } from './sections/hero/hero';

@Component({
  selector: 'app-home',
  imports: [ServicesComponent, AboutComponent, Location, BeforeAfter, HeroComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
