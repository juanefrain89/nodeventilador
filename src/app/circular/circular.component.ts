import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.scss'],
})
export class CircularComponent implements OnInit {

  chartType: 'doughnut' = 'doughnut';
  chartData: any; // Datos de la gráfica
  chartOptions: any; // Opciones de la gráfica

  constructor() { }

  ngOnInit() {
    this.chartData = {
      labels: ['juan', 'jair', 'gustavo'],
      datasets: [
        {
          data: [45, 25, 30],
          backgroundColor: ['#FF5733', '#33A8FF', '#FFEB33'], 
          hoverBackgroundColor: ['#FF6F61', '#4C6EF5', '#FFDD57'], 
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top', 
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ${value} horas`;
            },
          },
        },
      },
    };
  }

}
