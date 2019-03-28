import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HeroesService, Heroe } from '../../services/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes-busqueda',
  templateUrl: './heroes-busqueda.component.html',
})
export class HeroesBusquedaComponent implements OnInit {
  heroes: Heroe[] = []
  termino: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
    })
  }

  verHeroe(index: string) {
    this.router.navigate(['/heroe', index])
  }
}
