import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { HeroService } from './shared';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'toh-app',
  templateUrl: 'toh.component.html',
  styleUrls: ['toh.component.css'],
  providers: [ROUTER_PROVIDERS, HeroService],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class TohAppComponent {
  title = 'toh works!';
}
