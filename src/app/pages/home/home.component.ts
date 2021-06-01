import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  presentacion = true;
  about = false;
  projects = false;
  contact = false;
  alert = true;
  logos = true;
  constructor() {}

  ngOnInit(): void {
    this.transicion();
    this.transicionAlert();
  }
  // oculto la presentacion
  transicion() {
    setTimeout(() => {
      this.presentacion = false;
    }, 4000);
  }
  transicionAlert() {
    setTimeout(() => {
      this.alert = false;
    }, 7000);
  }
  mostrarProject() {
    this.projects = true;
    this.about = false;
    this.contact = false;
    this.alert = false;
    this.logos = false;
  }
  mostrarAbout() {
    this.about = true;
    this.contact = false;
    this.projects = false;
    this.alert = false;
    this.logos = false;
  }
  mostrarContact() {
    this.contact = true;
    this.projects = false;
    this.about = false;
    this.alert = false;
    this.logos = false;
  }
  todo() {
    this.contact = false;
    this.projects = false;
    this.about = false;
    this.alert = false;
    this.logos = true;
  }
}
