import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../consumo.service';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent  implements OnInit {

  constructor(private ConsumoService: ConsumoService, private alertController: AlertController) { 
   
  }
  arra: any[] = [];
  id = localStorage.getItem("id")
  async showConfirmationAlert(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Deseas aceptar esta acción o rechazarla?',
      buttons: [
        {
          text: 'Rechazar',
          role: 'cancel',
          handler: () => {
            console.log('Acción rechazada');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            
            this.eliminar(id);
          }
        } 
      ]
    });

    await alert.present();
  }

eliminar(id:any){
  console.log("jdjdj");
  
  this.ConsumoService.eliminar(id).subscribe(
    (datos)=>{
      console.log(datos);
      this.actualizar()
      
    },
    (error)=>{
      console.log(error);
      
    }
  )
}


actualizar(){
  this.ConsumoService.obtenerusuarios().subscribe(
    (datos)=>{
      this.arra = datos;
      console.log(datos);     
    },
    (error)=>{
      console.log(error);
      
    }
  )

}

  ngOnInit() {
    this.ConsumoService.obtenerusuarios().subscribe(
      (datos)=>{
        this.arra = datos;
        console.log(datos);        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
