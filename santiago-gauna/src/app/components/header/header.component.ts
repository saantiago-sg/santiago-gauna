import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  standalone: true,
  imports: [CommonModule, ButtonModule]
})
export class HeaderComponent {
  isScrolled: boolean = false;
  loading: boolean = false;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    if (window.scrollY > 300) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  download() {
    this.loading = true;
    const pdfUrl = 'assets/pdfs/SANTIAGO-GAUNA-SPANISH.pdf';
    window.open(pdfUrl, '_blank');
    this.loading = false;
  }

}
