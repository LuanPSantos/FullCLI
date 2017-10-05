import { Injectable } from '@angular/core';
import { Contato } from '../model/Contato';
import { Router } from '@angular/router';

@Injectable()
export class ContatosService {

    router: Router;

    constructor(router: Router){
        this.router = router;
    }

    buscarContatos(): Contato[]{
        let contatos: Contato[] = [];

        contatos.push(new Contato('Luan'));
        contatos.push(new Contato('Ana'));
        contatos.push(new Contato('Camila'));
        contatos.push(new Contato('Rocha'));
        contatos.push(new Contato('Lucas'));
        contatos.push(new Contato('Maria'));
        contatos.push(new Contato('José'));
        contatos.push(new Contato('Carlos'));
        contatos.push(new Contato('Anderson'));
        contatos.push(new Contato('Rodrigo'));
        contatos.push(new Contato('Rosa'));
        contatos.push(new Contato('Sofia'));
        contatos.push(new Contato('Denis'));
        contatos.push(new Contato('Guilherme'));
        contatos.push(new Contato('Pablo'));
        contatos.push(new Contato('João'));
        contatos.push(new Contato('Maicon'));
        contatos.push(new Contato('Rafael'));
        contatos.push(new Contato('Pedro'));
        contatos.push(new Contato('Antonio'));

        return contatos;
    }

    sair(){
        this.router.navigate(['/login']);
    }

    adicionarContato(){
        this.router.navigate(['/cadastro']);
    }

    editarContato(){
        this.router.navigate(['/cadastro']);
    }
}