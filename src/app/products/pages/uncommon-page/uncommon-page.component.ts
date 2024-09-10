import { Component } from '@angular/core';
import {  PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [PanelModule, FieldsetModule,ButtonModule, CommonModule],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name: string = 'Juan Manuel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male':'invitartlo',
    'female':'invitartla'
  }

  changeClient(){
    this.name = 'Alondra';
    this.gender = 'female';
  }

  /* i18nPlural */

  public clients: string[] = [ 'Maria', 'Pedro', 'Fernando','Eduardo','Melissa', 'Natalia' ]

  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',

  }

  deleteClient(){
    this.clients.pop();
  }

  /* KeyValue pipe */

  public person = {
    name: 'Juan',
    age:37,
    address: 'La Paz, Mexico'
  }

  /* Async pipe */

  public myObservableTimer = interval( 2000 ).pipe(
    tap( value => console.log('tap',value) )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject)=>{
    setTimeout(() => {

      resolve('Tenemos data en la promesa')
      console.log('tenemos data en la promsa')
      this.person.name = 'Otro nombre'


    }, 3500);
  } )


}
