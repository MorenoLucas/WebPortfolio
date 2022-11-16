import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goEmigrando() {
    window.open('https://emigrandoweb-139b8.web.app/', '_blank');
  }
  goTienda() {
    window.open('https://tienda-bolsos.web.app/productos', '_blank');
  }
  goJuego() {
    window.open('https://rover-mars-88d4d.web.app/home', '_blank');
  }
  goChiste() {
    window.open('https://expvc.csb.app/', '_blank');
  }
}
