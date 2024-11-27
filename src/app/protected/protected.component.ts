import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss'],
})
export class ProtectedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verifica si el usuario está autenticado
    if (!localStorage.getItem('id')) {
      // Redirige al login si no está autenticado
      this.router.navigate(['/login']);
    }
  }
}
