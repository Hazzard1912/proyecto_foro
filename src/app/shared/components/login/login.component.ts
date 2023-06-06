import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToggleButtonModule,
    DividerModule,
    ToastModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formulario: FormGroup = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    isAlwaysLogged: [false],
  });

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}
}
