import { UIRouterModule, UIRouter }     from "ui-router";

import { LoginComponent }               from "./components/login.component";
import { SignUpComponent }              from "./components/sign-up.component";

class RouterConfig  {
    constructor(uiRouter) {
        uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('login'));
    }

    static get parameters() {
        return [[UIRouter]];
    }
}

const appRoutes = {
    states: [{
        name: 'index',
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }, {
        name: 'login',
        url: '/login',
        component: LoginComponent
    }, {
        name: 'sign-up',
        url: '/sign-up',
        component: SignUpComponent
    }],
    configClass: RouterConfig
};

export const routing = UIRouterModule.forRoot(appRoutes);