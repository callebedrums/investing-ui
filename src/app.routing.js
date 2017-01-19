import { RouterModule }             from '@angular/router';

import { LoginComponent }           from "./components/login.component";
import { SignUpComponent }          from "./components/sign-up.component";

const appRoutes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'sign-up',
        component: SignUpComponent
    }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

export const routing = RouterModule.forRoot(appRoutes);