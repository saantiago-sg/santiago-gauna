import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  imports: [CommonModule, RouterModule, LandingComponent],
  standalone: true
})
export class HomeComponent {

}
