import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent implements OnInit{
  year: number |null = null;
  loading: boolean = false;

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear(){
    const currentDate = new Date();
    this.year = currentDate.getFullYear();
  }

  download() {
    this.loading = true;
    const pdfUrl = 'assets/pdfs/CV-SANTIAGO-GAUNA-2024.pdf';
    window.open(pdfUrl, '_blank');
    this.loading = false;
  }
}
