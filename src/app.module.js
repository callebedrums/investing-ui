import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }         from './app.component';

import { LoginComponent }       from './components/login/login.component';
import { SignUpComponent }      from './components/sign-up/sign-up.component';


import { routing }              from './app.routing';

export class AppModule {
    static get annotations() {
        return [
            new NgModule({
                imports: [BrowserModule, FormsModule, NgbModule.forRoot(), routing],
                declarations: [AppComponent, LoginComponent, SignUpComponent],
                bootstrap: [AppComponent]
            })
        ];
    }
}