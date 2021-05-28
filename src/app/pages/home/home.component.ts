import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  presentacion = false;
  about = false;
  projects = false;
  contact = false;
  constructor() {}

  ngOnInit(): void {
    this.transicion();
  }
  // oculto la presentacion
  transicion() {
    setTimeout(() => {
      this.presentacion = false;
    }, 4000);
  }
  mostrarProject() {
    this.projects = true;
    this.about = false;
    this.contact = false;
  }
  mostrarAbout() {
    this.about = true;
    this.contact = false;
    this.projects = false;
  }
  mostrarContact() {
    this.contact = true;
    this.projects = false;
    this.about = false;
  }
}
