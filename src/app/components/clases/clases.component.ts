import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-danger";

  propiedades:Object ={
    danger:true
  }

  loading:boolean = false;

  mensaje:string = "Espere por favor.";

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;

    setTimeout( ()=> this.loading = false, 3000 )

    setTimeout( ()=> this.mensaje = "Espere por favor..", 1000 )

    setTimeout( ()=> this.mensaje = "Espere por favor...", 2000 )

    this.mensaje = "Espere por favor.";
  }


}

