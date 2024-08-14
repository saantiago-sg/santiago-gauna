import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    RouterModule,
    HeaderComponent, 
    FooterComponent,
    RouterLink,
    RouterOutlet,
    HttpClientModule,
  ],
  styleUrls: ['./app.component.less'],
  templateUrl: './app.component.html',
})

export class AppComponent {

  ngOnInit(){
    if (typeof document !== 'undefined') {
      AOS.init({
        once: true,
      });
    }
  }

  title = 'santiago-gauna';
}
