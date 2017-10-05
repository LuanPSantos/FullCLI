import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  service: LoginService;
  login: string;
  senha: string;

  constructor(service: LoginService) { 
    this.service = service;
  }

  ngOnInit() {

  }

  entrar(event){
    event.preventDefault();
    
    console.log("tentando lugar o usuário " + this.login + "...");
    if(this.login && this.senha){
      console.log("logado com sucesso.");
      this.service.entrar();
    }else{
      console.log("ERRO ao logar.");
    }
  }

  cadastrar(event){
    event.preventDefault();
    console.log("indo para o cadastro.");
    this.service.cadastrar();
  }
}
