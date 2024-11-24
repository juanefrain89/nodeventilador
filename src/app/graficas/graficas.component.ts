import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
import { ConsumoService } from '../consumo.service';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
})
export class GraficasComponent implements OnInit {
  chartType: ChartType = 'bar'; // Tipo de gráfica
  chartData: ChartConfiguration['data'] = { labels: [], datasets: [] }; // Inicialización
  chartOptions: ChartOptions = { // Configuración inicial
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Días',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Horas',
        },
      },
    },
  };

 
  consumo: any; // Variable para almacenar el consumo
  errorMessage: string=""; // Variable para manejar errores
  constructor(private router: Router, private consumoService: ConsumoService) {}
 
  ngOnInit() {
    







    const id = localStorage.getItem('id');
let consume: number =0
    if (!id) {
      // Si no existe el id, redirige al login
      this.router.navigate(['/login']);
    } else {
      // Llama al servicio para obtener los datos del consumo y los muestra en consola
      this.consumoService.obtenerConsumoPorId(id).subscribe(
        (datos) => {
          console.log('Datos del consumo:', datos);
        consume = datos.horas_prendidas
          console.log(consume);
          
        },
        (error) => {
          console.error('Error al obtener los datos del consumo:', error);
        }
      );
    }
 
    

    let tiemposEncendido = [1, 2, 4, 3, 5, 2.5, consume];  

console.log(consume);

    this.chartData = {
      labels: this.getUltimos7Dias(), 
      datasets: [
        {
          label: 'Horas Encendido',
          data: tiemposEncendido,
          backgroundColor: 'rgba(54, 162, 235, 0.6)', 
          borderColor: 'rgba(54, 162, 235, 1)', 
          borderWidth: 1,
        },
      ],
    };
  }

  
  getUltimos7Dias(): string[] {
    const dias = [];
    const hoy = new Date();

    for (let i = 6; i >= 0; i--) {
      const fecha = new Date();
      fecha.setDate(hoy.getDate() - i);
      dias.push(fecha.toLocaleDateString('es-ES', { weekday: 'short' }));
    }

    return dias;
  }
}
