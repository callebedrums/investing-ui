import { Component } from '@angular/core';

export class PasswordRecoveryComponent {
    static get annotations() {
        return [
            new Component({
                templateUrl: 'src/components/password-recovery/password-recovery.component.html'
            })
        ];
    }
}