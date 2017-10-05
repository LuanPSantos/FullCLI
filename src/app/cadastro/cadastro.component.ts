import { Component, OnInit } from '@angular/core';
import {Contato} from '../model/Contato';
import {CadastroService} from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  contato: Contato;
  service: CadastroService;

  constructor(service: CadastroService) { 
    this.service = service;
    this.contato = new Contato();
  }

  ngOnInit() {
  }

  cancelar(event){
    event.preventDefault();

    this.service.cancelar();
  }

  salvar(event){
    event.preventDefault();
    
    this.service.salvar(this.contato);
  }
}
