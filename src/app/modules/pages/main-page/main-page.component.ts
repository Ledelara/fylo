import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { IntroComponentComponent } from '../../components/intro-component/intro-component.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponentComponent,
    IntroComponentComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
