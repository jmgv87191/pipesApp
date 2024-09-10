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
    selector: 'app-menu',
    standalone: true,
    imports: [MenuModule, MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule,
        CommonModule, RouterModule, ButtonModule, CardModule, FieldsetModule,  PanelModule ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

    items: MenuItem[] | undefined;

    constructor( private primeConfig: PrimeNGConfig ){}

    ngOnInit() {

        this.primeConfig.ripple = true;

            this.items = [
                {
                    label: 'Pipes de Angular',
                    icon: 'pi pi-desktop',

                    items: [
                        {
                            label: 'Textos y Fechas',
                            icon: 'pi pi-align-left',
                            routerLink: '/',
                        }
                        ,{
                            label: 'Numeros',
                            icon: 'pi pi-dollar',
                            routerLink: '/numbers',
                        }
                        ,{
                            label: 'No comunes',
                            icon: 'pi pi-globe',
                            routerLink:'/uncommon',
                        }
                    ]
                },
                {
                    label:'Pipes personalizados',
                    icon: 'pi pi-globe',
                    items:[
                        {
                            label:'Custom pipes',
                            icon: 'pi pi-globe',
                            routerLink: '/custom'

                        }
                    ]
                }
            ];
    }

}
