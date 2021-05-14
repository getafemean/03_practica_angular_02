import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  imagen: string = '/assets/img/santander-red.svg';

  constructor() { }

  ngOnInit(): void {
    this.cambiarImagen();
  }

  cambiarImagen() {
    const logoRojo: string = '/assets/img/santander-red.svg';
    const logoBlanco: string = '/assets/img/santander-white.svg';
    setInterval(() => {
      this.imagen === logoRojo ? this.imagen = logoBlanco : this.imagen = logoRojo;
    }, 2000)
  }

}
