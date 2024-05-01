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
import emailjs from '@emailjs/browser';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  imports: [CommonModule, RouterModule, LandingComponent,
    CarouselModule, ButtonModule, TagModule, CardModule, InputTextModule,
    FormsModule, ReactiveFormsModule, ToastModule],
  standalone: true,
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  private keyEmail = '6lTmfDQKHGWZYDQND';
  private serviceID = 'service_1ss19cv';
  private templateID = 'template_4h5b94s';

  data = worksData;
  skills = skillsData;
  loading: boolean = false;
  responsiveOptions: any[] | undefined;
  name: string = '';
  email: string = '';
  validateForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private message: MessageService,
  ) { }

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


  async submitForm(valid: boolean, value: any) {
    this.loading = true;
    emailjs.init(this.keyEmail);
    console.log(valid);
    if(valid){
      try {
        const response = await emailjs.send(this.serviceID, this.templateID, {
          from_name: value.name,
          from_email: value.email,
          to_name: "Santiago",
          message: value.message,
        }); 
        this.loading = false;
        this.message.add({ severity: 'success', summary: 'Éxito', detail: 'Correo electrónico enviado exitosamente', life: 6000 });
        this.validateForm.reset();
      } catch (error) {
        this.loading = false;
        this.message.add({ severity: 'error', summary: 'Error', detail: 'Error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.', life: 6000 });
      }
    }else{
      for (const i in this.validateForm?.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.loading = false;
  }
}
