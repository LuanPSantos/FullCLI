import { Component, OnInit } from '@angular/core';
import {Contato} from '../model/Contato';
import { ContatosService} from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  service: ContatosService;
  contatos: Contato[] = [];
  constructor(service: ContatosService) { 
    this.service = service;
  }

  ngOnInit() {
    this.contatos = this.service.buscarContatos();
  }

  adicionarContato(event){
    event.preventDefault();

    this.service.adicionarContato();
  }

  editarContato(event){
    event.preventDefault();

    this.service.editarContato();
  }

  sair(event){
    event.preventDefault();

    this.service.sair();
  }

}
