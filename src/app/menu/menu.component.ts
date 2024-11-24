import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Si estás usando Ionic para la navegación

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private navController: NavController) {}

  // Método para navegar a la página de inicio
  openHome() {
    this.navController.navigateRoot('/home'); // Navega a la ruta /home
  }

  // Método para navegar a la página de ajustes
  openSettings() {
    this.navController.navigateForward('/settings'); // Navega a la ruta /settings
  }

  // Método para navegar a la página 'Acerca de'
  openAbout() {
    this.navController.navigateForward('/about'); // Navega a la ruta /about
  }
}
