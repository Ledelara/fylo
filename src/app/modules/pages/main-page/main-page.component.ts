import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponentComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
