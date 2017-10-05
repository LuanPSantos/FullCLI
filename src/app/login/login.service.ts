import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

    router: Router;

    constructor(router: Router){
        this.router = router;
    }

    entrar(){
        this.router.navigate(['/contatos']);
    }

    cadastrar(){
        this.router.navigate(['/cadastro']);
    }
}