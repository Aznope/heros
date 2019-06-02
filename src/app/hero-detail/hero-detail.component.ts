import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

import { Hero } from '../hero';
// import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() heros: Hero[];
  @Output() selected: EventEmitter<Hero>;
  hero: Hero;

  constructor(
    // private route: ActivatedRoute,
    // private heroService: HeroService,
    // private location: Location
  ) {
    this.selected = new EventEmitter();
  }

  ngOnInit(): void {
    // this.getHero();
  }

  select(hero: Hero) {
    this.selected.emit(hero);
  }

  // getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);
  // }

  // goBack(): void {
  //   this.location.back();
  // }
}