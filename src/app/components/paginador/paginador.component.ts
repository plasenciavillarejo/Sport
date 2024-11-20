import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicioCompartidoService } from '../../services/servicio-compartido.service';
import { UsuarioService } from '../../services/usuario.service';
import { BusquedaActividadRequest } from '../../models/busquedaActividadRequest';

@Component({
  selector: 'app-paginador',
  standalone: true,
  imports: [],
  templateUrl: './paginador.component.html',
  styleUrl: './paginador.component.css'
})
export class PaginadorComponent implements OnInit {

  @Input() inicio!: boolean;

  @Input() fin!: boolean;

  @Input() paginaActual!: number;

  @Input() totalPaginas!: number;

  @Input() numeroRegistros!: number;

  @Input() tamanioPagina!: number;

  @Output() paginaCambiada = new EventEmitter<number>();

  @Input() busquedaActividadRequest = new BusquedaActividadRequest();

  constructor(private servicioCompartido: ServicioCompartidoService,
    private usuarioService: UsuarioService 
  ) {

  }

  ngOnInit(): void {
    this.getPageRange();
    this.paginaCambiada.emit(this.paginaActual); 
  }

  getPageRange(): number[] {
    console.log(this.paginaActual);
    console.log(this.busquedaActividadRequest);
    let inicio = Math.max(1, this.paginaActual - Math.floor(this.tamanioPagina / 2));
    let fin = Math.min(this.totalPaginas, inicio + this.tamanioPagina -1);
    
    // Ajustar el inicio si el fin se extiende más allá del total de páginas    
    /*if (fin - inicio + 1 < this.paginador.paginaActual && inicio > 1) {
      inicio = Math.max(1, fin - this.paginador.paginaActual + 1);
    }*/
    const rango = [];
    if (this.tamanioPagina > 0) {
      for (let i = inicio; i <= fin; i++) {
        rango.push(i);
      }
  }
    return rango;
  }

  /**
   * Función encargada de obtener la pagina al que se ha pulsado para cargar de nuevo el listado de las actividades
   * @param pagina 
   */
  cambiarPagina(pagina: number): void {
    this.paginaActual = pagina;
    // Emitimos el cambio de la pagina para que lo detecte el componente padre, en este caso, usuarios.components.html
    this.servicioCompartido.cambiarPagina(pagina);
    //this.consultListReservations(false);
  }
  
}
