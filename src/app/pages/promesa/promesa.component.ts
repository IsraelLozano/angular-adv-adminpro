import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [],
})
export class PromesaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.getUsuarios();
    this.getUsuarios().then((usuarios) => {
      console.log(usuarios);
    });
    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hole amund');
    //   } else {
    //     reject('Algo salo mal');
    //   }
    // });
    // promesa
    //   .then((mensaje) => {
    //     console.log(mensaje);
    //   })
    //   .catch((error) => console.error('Error en mi promesa', error));
    // console.log('Fin de la inidad');
  }

  getUsuarios() {
    // fetch('https://reqres.in/api/users').then((resp) => console.info(resp));
    // fetch('https://reqres.in/api/users').then((resp) => {
    //   resp.json().then((body) => console.info(body));
    // });
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
