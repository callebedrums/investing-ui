import { Component }                        from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

export class AccountActivationComponent {

    static get annotations() {
        return [
            new Component({
                templateUrl: 'src/components/account-activation/account-activation.component.html'
            })
        ];
    }

    static get parameters() {
        return [ActivatedRoute]
    }

    constructor(route) {
        this.route = route;
        this.key = '';
    }

    ngOnInit() {
        this.route.params
        .subscribe(params => {
            this.key = params['key'];
            console.log(this.key);
        });
    }
}