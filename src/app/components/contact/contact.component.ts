import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      texto: [''],
    });
  }

  ngOnInit(): void {}
  async guardar() {
    //  extraemos datos del formulario
    const data = this.firstFormGroup.getRawValue();
    console.log('data', data);

    // insertar en la base de datos y obtenemos la id del pedido
    // await this.db.collection('Mensajes').add(data);
  }
}
