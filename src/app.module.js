import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { AppComponent }         from './app.component';

import { LoginComponent }       from './components/login.component';
import { SignUpComponent }      from './components/sign-up.component';

import { routing }              from './app.routing';

export class AppModule {
    static get annotations() {
        return [
            new NgModule({
                imports: [BrowserModule, FormsModule, routing],
                declarations: [AppComponent, LoginComponent, SignUpComponent],
                bootstrap: [AppComponent]
            })
        ];
    }
}