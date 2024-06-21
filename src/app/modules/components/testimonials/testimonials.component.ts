import { Component, signal } from '@angular/core';
import { ITestimonials } from '../../interface/testimonials.interface';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  public testimonials = signal<ITestimonials[]>([
    {
      comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      userName: 'Satish Patel',
      office: 'Founder & CEO',
      img: 'assets/images/profile-1.jpg'
    },
    {
      comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      userName: 'Bruce McKenzie',
      office: 'Founder & CEO',
      img: 'assets/images/profile-2.jpg'
    },
    {
      comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      userName: 'Iva Boyd',
      office: 'Founder & CEO',
      img: 'assets/images/profile-3.jpg'
    }
  ])
}
