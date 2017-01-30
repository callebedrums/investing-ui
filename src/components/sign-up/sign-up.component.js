import { Component } from '@angular/core';

export class SignUpComponent {
    static get annotations() {
        return [
            new Component({
                templateUrl: 'src/components/sign-up/sign-up.component.html'
            })
        ];
    }
}