import { Component } from '@angular/core';

export class AppComponent {
    static get annotations() {
        return [
            new Component({
                selector: 'app',
                template: '<h1>Testing</h1><router-outlet></router-outlet>'
            })
        ];
    }
}