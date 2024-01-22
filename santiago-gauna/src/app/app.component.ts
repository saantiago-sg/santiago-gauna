import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

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
    RouterOutlet
  ],
  styleUrls: ['./app.component.less'],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'santiago-gauna';
}
