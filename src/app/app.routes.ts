import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'contatos', component: ContatosComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo: 'login'}
];

export const AppRoutes = RouterModule.forRoot(routes);
