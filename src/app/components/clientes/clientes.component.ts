import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService],
})
export class ClientesComponent implements OnInit {

  clientes:any;
  conteoClientes:any;

  constructor(private clienteService: ClienteService) { }
   
  ngOnInit(): void {
    
    this.obtenerCliente();

  }  

  obtenerCliente(){
    this.clienteService.getCliente().subscribe( resultado =>{
        this.clientes = resultado;
        console.log(resultado);
    },
    error =>{
        console.log(error);
    });
  }
 
}
