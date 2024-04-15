import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    if (window.scrollY > 300) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
