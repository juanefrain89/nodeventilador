import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {
minutos: string=""
temperatura: number=0

  constructor() { }
  alerta(){
   window.confirm("quieres apagar el ventilador despues de " + this.minutos +"minutos" )
  }

  validarTemperatura() {
    if (this.temperatura > 60) {
      this.temperatura = 60; // Puedes poner 60 en lugar de 59 si lo prefieres
    }
  }

  ngOnInit() {
    console.log("kd");
  
    
  }

}
