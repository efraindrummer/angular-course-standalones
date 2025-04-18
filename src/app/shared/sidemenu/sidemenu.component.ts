import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  imports: [ CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export default class SidemenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':'))

  constructor() {

    //este codigo exclute el path redireto to y las rutas con parametros
    /* const dashboardRoutes = routes.map(
      route => route.children ?? []
    )
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':')) */
    //console.log(dashboardRoutes)
  }
}
