import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { DialogModule } from 'primeng/dialog';
import { MembresiasComponent } from 'src/app/pages/home/components/membresias/membresias.component';

enum Gender {
  Masculino = 'Masculino',
  Femenino = 'Femenino',
  Pareja = 'Pareja',
}

interface User {
  name: string;
  gender: Gender;
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    LoginComponent,
    RegisterComponent,
    DialogModule,
    LoginComponent,
    RegisterComponent,
    MembresiasComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  items!: MenuItem[];
  isLoggedIn: boolean = false;
  currentUser: User = {
    name: 'Test',
    gender: Gender.Masculino,
  };

  visibleLogin!: boolean;
  visibleRegister!: boolean;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
      },
      {
        label: 'Foros',
        icon: 'pi pi-hashtag',
      },
      {
        label: 'Recientes',
        icon: 'pi pi-history',
        items: [
          {
            label: 'Ultimas publicaciones',
          },
          {
            label: 'Ultimas imagenes',
          },
          {
            label: 'Ultimos comentarios',
          },
        ],
      },
      {
        label: 'Multimedia',
        icon: 'pi pi-image',
      },
      {
        label: 'Multimedia',
        icon: 'pi pi-image',
      },
      {
        label: 'Miembros',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Visitantes actuales',
          },
          {
            label: 'Nuevas publicaciones de perfil',
          },
        ],
      },
      {
        label: '',
        styleClass: 'mx-8',
      },
      {
        label: 'Iniciar sesión',
        icon: 'pi pi-sign-in',
        styleClass: 'ml-8',
        command: () => this.login(),
        visible: !this.isLoggedIn,
      },
      {
        label: 'Registrarse',
        icon: 'pi pi-user-plus',
        command: () => this.register(),
        visible: !this.isLoggedIn,
      },
      {
        label: this.currentUser.name,
        styleClass: 'ml-8',

        command: () => this.showUserInfo(),
        visible: this.isLoggedIn,
        badge: 'Usuario',
        title: 'Informacion de perfil',
      },
      {
        icon: 'pi pi-envelope',
        command: () => this.showUserInfo(),
        visible: this.isLoggedIn,
        title: 'Mensajes',
      },
      {
        icon: 'pi pi-bell',
        command: () => this.showUserInfo(),
        visible: this.isLoggedIn,
        title: 'Notificaciones',
      },
    ];
  }
  showUserInfo() {}

  login() {
    this.visibleLogin = true;
  }

  register() {
    this.visibleRegister = true;
  }
}
