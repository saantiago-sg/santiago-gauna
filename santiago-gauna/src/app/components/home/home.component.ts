import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { worksData, skillsData } from '../../services/api.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  imports: [CommonModule, RouterModule, LandingComponent,
    CarouselModule, ButtonModule, TagModule, CardModule, InputTextModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class HomeComponent implements OnInit {
  data = worksData;
  skills = skillsData;
  loading: boolean = false;
  responsiveOptions: any[] | undefined;
  name: string = '';
  email: string = '';
  validateForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });


    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


  submitForm(valid: boolean, value: any) {
    console.log(value);
    this.loading = true;
    setTimeout(() => {
        this.loading = false
    }, 2000);
    if (valid) {

    } else {
      for (const i in this.validateForm?.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
