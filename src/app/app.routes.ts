import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroesBusquedaComponent } from './components/heroes-busqueda/heroes-busqueda.component'
import { HeroeComponent } from './components/heroe/heroe.component'

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'buscar/:termino', component: HeroesBusquedaComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
