import { Component } from '@angular/core';

export class LoginComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'login',
                templateUrl: 'src/components/login/login.component.html'
            })
        ];
    }
}