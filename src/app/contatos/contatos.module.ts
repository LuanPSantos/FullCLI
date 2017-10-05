import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from './contatos.component';
import { ContatosService } from './contatos.service';
import { MdButtonModule, MatSidenavModule,MatListModule,MatGridListModule } from '@angular/material';
import { AppRoutes } from '../app.routes'; 

@NgModule({
    declarations: [ ContatosComponent ],
    imports: [ 
        MdButtonModule, 
        MatSidenavModule, 
        MatListModule,
        CommonModule,
        MatGridListModule,
        AppRoutes
    ],
    providers: [ ContatosService ]
})
export class ContatosModule {}
