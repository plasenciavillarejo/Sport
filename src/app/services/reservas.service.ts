import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  url_my_reservations = environment.hostname_port_local_gtw + '/api/main/reservaUsuario/misReservas';
  url_history_reservations = environment.hostname_port_local_gtw + '/api/main/reservaUsuario/historialReservas';

  constructor(private http: HttpClient) { }

  consultReservations(idUsuario: number, fechaReserva: string) : Observable<any> {
    let params = new HttpParams()
    .set('idUsuario', idUsuario)
    .set('fechaReserva', fechaReserva);
    return this.http.get<any>(this.url_my_reservations, {params});
  }

  consultReservationsHistory(idUsuario: number) : Observable<any> {
    let params = new HttpParams()
    .set('idUsuario', idUsuario)
    return this.http.get<any>(this.url_history_reservations, {params});
  }

}
