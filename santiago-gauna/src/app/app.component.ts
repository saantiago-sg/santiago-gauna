import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import * as AOS from 'aos'
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';

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
    SpinnerComponent
  ],
  styleUrls: ['./app.component.less'],
  templateUrl: './app.component.html',
})

export class AppComponent {

  constructor(private router: Router, private spinnerService: SpinnerService) { }

  ngOnInit() {
    if (typeof document !== 'undefined') {
      AOS.init({
        once: true,
      });
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinnerService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.spinnerService.hide();
      }
    });
  }

  title = 'santiago-gauna';
}
