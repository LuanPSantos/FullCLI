import { NgModule } from '@angular/core';
import { MdButtonModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AppRoutes } from '../app.routes'; 

@NgModule({
    imports: [
        MdButtonModule,
        MatInputModule,
        AppRoutes],
    declarations: [LoginComponent],
    providers: [LoginService]
})
export class LoginModule { }