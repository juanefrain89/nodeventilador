import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GraficasComponent } from './graficas/graficas.component';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { CircularComponent } from './circular/circular.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent,
    DashboardComponent,
    LoginComponent,
    GraficasComponent,
    CircularComponent,
    UsuariosComponent,
  
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    CommonModule,
  
 
  ],
  exports: [
    MenuComponent, 
    DashboardComponent,
    CircularComponent
   
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } 
  ],
  bootstrap: [AppComponent] 
})
export class AppModule {}
