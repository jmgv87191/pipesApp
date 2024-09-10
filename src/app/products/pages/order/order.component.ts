import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  PanelModule } from 'primeng/panel';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Color, Hero } from '../../interfaces/hero';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { SortByPipe } from "../../pipes/sort-by.pipe";



@Component({
  selector: 'app-order',
  standalone: true,
  imports: [PanelModule, CommonModule, ToggleCasePipe, ToolbarModule, AvatarModule, ButtonModule, TableModule, CanFlyPipe, SortByPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public orderBy?: keyof Hero | undefined | '' = ''

  public heroes: Hero[] = [

    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'DareDevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },

  ]


  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder( value: keyof Hero ){
    this.orderBy = value;
  }



}
