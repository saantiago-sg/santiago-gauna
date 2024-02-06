import { Component } from '@angular/core';
import { AllWorksData } from '../../services/api.service';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.less'
})
export class WorksComponent {
  works = AllWorksData;
}
