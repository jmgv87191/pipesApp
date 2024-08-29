import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuComponent } from "./shared/components/menu/menu.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, RippleModule, SharedModule,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {


  title = 'pipesApp';

  constructor( private primeConfig: PrimeNGConfig ){}

  ngOnInit(): void {

    this.primeConfig.ripple = true;

  }


}
