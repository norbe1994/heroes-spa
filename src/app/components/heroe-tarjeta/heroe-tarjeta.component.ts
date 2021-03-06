import { Component, OnInit, Input } from '@angular/core'
import { Heroe } from '../../services/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: Heroe

  constructor(private router: Router) {}

  ngOnInit() {}

  verHeroe() {
    this.router.navigate(['/heroe', this.heroe.id])
  }
}
