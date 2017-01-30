import { RouterModule }                 from '@angular/router';

import { LoginComponent }               from "./components/login/login.component";
import { SignUpComponent }              from "./components/sign-up/sign-up.component";
import { PasswordRecoveryComponent }    from "./components/password-recovery/password-recovery.component";

const appRoutes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'sign-up',
        component: SignUpComponent
    }, {
        path: 'password-recovery',
        component: PasswordRecoveryComponent
    }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];

export const routing = RouterModule.forRoot(appRoutes);