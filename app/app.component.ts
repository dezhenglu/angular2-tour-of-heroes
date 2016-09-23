import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector:'my-app',
    template:`
        <h1>{{tiele}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent{
    tiele = 'Tour of Heroes';
}
