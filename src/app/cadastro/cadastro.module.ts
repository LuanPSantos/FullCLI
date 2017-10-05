import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import {MatInputModule, MdButtonModule} from '@angular/material';
import {CadastroService} from './cadastro.service';

@NgModule({
    declarations: [ CadastroComponent ],
    imports: [MatInputModule, MdButtonModule],
    providers: [CadastroService]
})
export class CadastroModule { }
