import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Contato} from '../model/Contato';

@Injectable()
export class CadastroService {

    router: Router;
    
    constructor(router: Router){
        this.router = router;   
    }
    
    cancelar(){
        console.log("cancelando...");
        this.router.navigate(['/contatos']);
    }

    salvar(contato: Contato){
        console.log("savando... ");
        console.log(contato);
    } 
}