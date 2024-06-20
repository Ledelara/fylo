import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-intro-component',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './intro-component.component.html',
  styleUrl: './intro-component.component.scss'
})
export class IntroComponentComponent {

}
