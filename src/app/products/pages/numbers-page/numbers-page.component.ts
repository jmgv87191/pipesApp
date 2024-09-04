import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import {  PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [PanelModule, CardModule],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

}
