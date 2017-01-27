import { Component } from '@angular/core';

export class AppComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'app',
                template: '<router-outlet></router-outlet>'
            })
        ];
    }
}