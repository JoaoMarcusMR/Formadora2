import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage {}
