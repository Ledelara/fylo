import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { IntroComponentComponent } from '../../components/intro-component/intro-component.component';
import { FunctionalitiesComponentComponent } from '../../components/functionalities-component/functionalities-component.component';
import { ProductiveComponent } from '../../components/productive/productive.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { RegisterCardComponent } from '../../components/register-card/register-card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponentComponent,
    IntroComponentComponent,
    FunctionalitiesComponentComponent,
    ProductiveComponent,
    TestimonialsComponent,
    RegisterCardComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
