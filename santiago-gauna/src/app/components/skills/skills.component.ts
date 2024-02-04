import { Component } from '@angular/core';
import { AllSkilssData } from '../../services/api.service';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.less'
})

export class SkillsComponent {
  skills = AllSkilssData;

}
