import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ContatosModule } from './contatos/contatos.module';
import { CadastroModule } from './cadastro/cadastro.module';

import {AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    LoginModule,
    CadastroModule,
    ContatosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
