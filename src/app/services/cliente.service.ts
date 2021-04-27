import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor( private http: HttpClient) { }

  getCliente(): Observable<any>{

    return this.http.get('/api/clientes');

  }

  /*
  postCliente(cliente: clienteModel){
    let json = JSON.stringify(cliente);

    let headers = new HttpHeaders().set('content-Type','application/json');

    return this.http.post("http://localhost:3000/clientes" + json, { headers : headers });
  }

  deleteCliente(id: number): Observable<any>{

    return this.http.delete("http://localhost:3000/clientes" + id);

  }*/

}
