import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  private apiUrl = 'https://mongod-a6jr.onrender.com/consumos'; 
usuarios ="https://mongod-a6jr.onrender.com/usuarios"
  constructor(private http: HttpClient,) { }
  

  obtenerusuarios():Observable<any>{
    return this.http.get<any>(this.usuarios);
  }

  eliminar(id: string): Observable<any> {
    
    const url = "https://mongod-a6jr.onrender.com/eliminar";  
    return this.http.post<any>(url,{ id });  
  }

  
  obtenerConsumoPorId(id: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { id });
  }
}
