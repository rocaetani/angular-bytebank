import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  getTransferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): Observable<Transferencia>{
    this.datar(transferencia)

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private datar(transferencia: any){
    transferencia.data = new Date();
  }

}
