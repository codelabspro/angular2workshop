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

#### Setup 
* mkdir part2
* cd part2
* ng new toh --prefix toh
* ng test --no-watch

* ng generate class shared/hero model

#### Modify the hero.model.ts as follows:

export class Hero {
	id: number;
	commits: number;
	name: string;
}


#### Access to the model using service 

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


#### Modify the toh.component.css as follows:

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

#### Modify the toh.component.html as follows: 
<h1>
	{[title]}
</h1>
<nav>
	<a [routerLink] = "['dashboard']">Dashboard</a>
</nav>


#### Generate a route as follows:
	
* ng generate route dashboard

#### Inject HeroService by adding the following lines in toh.component.ts

import { HeroService } from './shared';

and inside the Component, add HeroService

providers: [ROUTER_PROVIDERS, HeroService]

#### Under dashboard/dashboard.component.css, add the following css:

.selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }


#### Add the following markup to dashboard.component.html 

<h2>Top Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes" (click)="gotoDetail(hero)">
  	<div class="header">
  		{{hero.name}}
  	</div>
  	<div class="body">
  	Commits
  	<br/>
    <span class="badge">{{hero.commits}}</span> {{hero.name}}
    </div>
  </li>
</ul>


#### Modify the dashboard.component.ts as follows:

* Add the following imports 
import { Router } from '@angular/router';
import { Hero, HeroService } from '../shared';


* Add the property that will hold the data:

export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];
	constructor(private _heroService: HeroService, 
	private _router: Router) {}
	

	ngOnInit() {
		this._heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(0,5));
	}
}


* Build the app as follows: 

ng build


* Execute the tests as follows:

ng test


* Run the app as follows:

ng serve


#### Add the gotoDetail method as follows in DashboardComponent: 

gotoDetail(hero: Hero) {
	let link = ['hero-detail', { id: hero.id }];
	this._router.navigate(link);
}


#### Generate the hero detail route as follows: 

* ng generate route hero-detail --inline-template --inline-style

#### Modify hero-detail.component.ts as follows: 

template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
#### Generate list route as follows 

* ng generate route hero-list --inline-template --inline-style


### Add the following route to toh.component.html as follows:

<h1>
	{[title]}
</h1>
<nav>
	<a [routerLink] = "['dashboard']">Dashboard</a>
	<a [routerLink] = "['hero-list']">Heroes</a>
</nav>
<router-outlet></router-outlet>

#### Run as follows:

ng serve













