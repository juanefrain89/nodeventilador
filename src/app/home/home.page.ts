import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu : MenuController) {}
  onClick(){
  this.menu.toggle('first');
  }

    // Verifica si el id está en el localStorage
   

}
