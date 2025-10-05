import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-2.page.html',
  styleUrls: ['./page-2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PageBPage {
  // Podes adicionar variáveis aqui se quiser
  studentInfo = {
    name: 'SEU NOME COMPLETO',
    turma: 'SUA TURMA', 
    unidade: 'NOME DA UNIDADE',
    periodo: 'MANHÃ/TARDE/NOITE',
    horario: 'SEU HORÁRIO DE AULA'
  };
}