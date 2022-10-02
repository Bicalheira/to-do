import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: LoginComponent,
    // },
    {
        path: '',
        // path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}