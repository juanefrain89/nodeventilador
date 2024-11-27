import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Si estás usando Ionic para la navegación
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private navController: NavController, private router: Router) {}
  logout(){
    this.router.navigate(['/login']);
   
  }


  openHome() {
    this.navController.navigateRoot('/home'); 
  }

  
  openSettings() {
    this.navController.navigateForward('/settings'); // Navega a la ruta /settings
  }

  // Método para navegar a la página 'Acerca de'
  openAbout() {
    this.navController.navigateForward('/about'); // Navega a la ruta /about
  }
}
