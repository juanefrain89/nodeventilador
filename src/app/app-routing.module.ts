import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';  // Importa el componente aquí
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GraficasComponent } from './graficas/graficas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'menu',
    component: MenuComponent  // Usa `component` aquí, no `loadChildren`
  },{
    path: 'dashboard',
   component:DashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  },{
    path:"graficos",
    component:GraficasComponent
  },{
    path:"usuarios",
    component:UsuariosComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
