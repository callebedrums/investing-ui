import { Component } from '@angular/core';

export class SignUpComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'sign-up',
                template: '<h1>Sign Up</h1>'
            })
        ];
    }
}