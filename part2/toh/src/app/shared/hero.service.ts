import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {

  constructor() {}
  getHeroes(): Promise<Hero[]> {
  	return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero>{
  	return Promise.resolve(HEROES).then(
  		heroes => heroes.filter(hero => hero.id === id)[0]
  		);
  }
}
const HEROES: Hero[] = [
		{id: 0, name: 'steve', commits: 3},
		{id: 1, name: 'molly', commits: 4},
		{id: 2, name: 'matthew', commits: 5},
		{id: 3, name: 'kristy', commits: 6},
		{id: 4, name: 'helen', commits: 7},
		{id: 5, name: 'elyse', commits: 8},
		{id: 6, name: 'elliot', commits: 9},
		{id: 7, name: 'daniel', commits: 10},
	]
	.map((hero, index) => {
		hero.id = index + 1;
		return hero;
	});