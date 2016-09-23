import { Component, Input,OnInit } from '@angular/core';
import { Hero } from './hero';

import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl:'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(private heroService: HeroService,
  private route: ActivatedRoute) { 

  }

  hero: Hero;

  ngOnInit(): void {

      this.route.params.forEach((params:Params) => {

          let id = +params['id'];
          this.heroService.getHero(id)
            .then(hero => this.hero = hero);
      });
  }

  goBack(): void {
    window.history.back();
  }

  // @Input() hero: Hero;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/