import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import Swal from'sweetalert2';
import { ServicioCompartidoService } from '../../services/servicio-compartido.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FormsModule],
  templateUrl: './login.component.html'
})

export class LoginComponent {
  
  usuario!: Usuario;

  constructor(private servicioCompartido: ServicioCompartidoService,
    private http: HttpClient) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    const code = window.location.search.substring(1).split('&')[0].split('=')[1];
    if (code) {
      console.log('Se ha obtenido el code');
    }
  }

  login(): void {
    // Redirige al servidor de autorización con los datos de inicio de sesión
    // http://127.0.0.1:8090/oauth2/authorization/client-app
    // http://127.0.0.1:9000/login

    window.location.href = `http://127.0.0.1:8090/login/oauth2/code/cliente-app?redirect_uri=http://127.0.0.1:8090/oauth2/authorization/client-app`;
  }

  // Cuando enviemos el usuario que vamos hacer con el
  validacionCredenciales() {
    if(!this.usuario.email || !this.usuario.password) {
      Swal.fire(
        'Error de validación',
        'Usuario y Password requeridos',
        'error'
      )
    } else {
      this.servicioCompartido.loginhandlerEventEmitter.emit({
        email: this.usuario.email,
        password: this.usuario.password
      });
    }
  }


}
