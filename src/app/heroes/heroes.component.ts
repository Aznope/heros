import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HERO } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HERO;
  selectedHero: Hero[];
  constructor(private heroService: HeroService) {
    this.selectedHero = [];
  }

  ngOnInit() {
    // this.getHeroes();
  }

  onSelect(hero: Hero): void {
    if (!this.delete(hero)) {
      this.selectedHero.push(hero);
    }
  }

  delete(hero: Hero): boolean {
    let found = false;
    for (let i = 0; i < this.selectedHero.length; i++) {
      if (hero === this.selectedHero[i]) {
        this.selectedHero.splice(i, 1);
        found = true;
        break;
      }
    }
    return found;
  }

  selected(hero: Hero): boolean {
    for (let i = 0; i < this.selectedHero.length; i++) {
      if (hero === this.selectedHero[i]) {
        return true;
      }
    }
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }
}