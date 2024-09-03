import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { MenuModule } from 'primeng/menu';


import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {  FieldsetModule } from 'primeng/fieldset';
import {  PanelModule } from 'primeng/panel';



@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [MenuModule, MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule,
    CommonModule, RouterModule, ButtonModule, CardModule, FieldsetModule,  PanelModule ],  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {


  public nameLower: string = 'juan manuel'
  public nameUpper: string = 'JUAN MANUEL'
  public nameFull: string = 'JuAn ManuEL GutIERReZ VilleGAS'


}
