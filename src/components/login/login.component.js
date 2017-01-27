import { Component } from '@angular/core';

export class LoginComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'login',
                template: '<h1>Login</h1>'
            })
        ];
    }
}