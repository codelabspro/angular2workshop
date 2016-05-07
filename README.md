# Angular2Workshop

## Steps

### Part 1 : Simple App

* mkdir part1
* cd part1
* mkdir angular2workshop
* ng new angular2workshop



### Part 2 : angular-cli

This is inspired by the following talk by Mike Brocchi

https://www.youtube.com/watch?v=wHZe6gGI5RY


* mkdir part2
* cd part2
* ng new toh --prefix toh
* ng test --no-watch

* ng generate class shared/hero model

Modify the hero.model.ts as follows:

export class Hero {
	id: number;
	commits: number;
	name: string;
}


* Access to the model using service 

ng generate service shared/hero 

Modify HeroService in hero.service.ts as follows:

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


* Modify the toh.component.css as follows:

nav > a {
	background: #607D88;
	padding: 15px;
	display: inline-block;
	border-radius: 4px;
	color: white;
	text-decoration: none;
	font-size: 1.3em;
	min-width: 100px;
	text-align: center;
}

nav > a.router-link-active {
	text-decoration: underline;
}

* Modify the toh.component.html as follows: 
<h1>
	{[title]}
</h1>
<nav>
	<a [routerLink] = "['dashboard']">Dashboard</a>
</a>


* Generate a route as follows:



