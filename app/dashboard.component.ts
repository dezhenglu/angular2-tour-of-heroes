import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector:'my-dashboard',
    // template:`
    //     <h3>My dashboard</h3>
    // `,
    templateUrl:'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent{

    heroes: Hero[];

    constructor(private router: Router,
                private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
        .then(heros => this.heroes = heros.slice(1,5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}