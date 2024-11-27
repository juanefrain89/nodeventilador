import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';  // Variable para almacenar el valor del email
  password: string = ''; 
 
  constructor(private peticion : HttpClient, private router: Router) { }
  res: string = '';
  id: any=""
  errord :any=""
enviardatos(){
  const datos={
    correo:this.email,
    contraseña:this.password
  }
  this.peticion.post("https://mongod-a6jr.onrender.com/login", datos).subscribe(
    (respuesta: any) => {  // Usamos 'any' para evitar el error de tipo
      console.log(respuesta); 
      this.res = respuesta.id; 
      localStorage.setItem("id", this.res)
       this.id = localStorage.getItem("id")
      this.router.navigate(['/usuarios']);
    },
    (error)=>{
      console.log(error);
      this.errord=error
      
    }
  )
}

mandar(){
  
}

  ngOnInit() {
    console.log("Componente cargado");
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
