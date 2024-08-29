import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { MenuModule } from 'primeng/menu';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuModule],
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
              label: 'Documents',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-plus'
                  },
                  {
                      label: 'Search',
                      icon: 'pi pi-search'
                  }
              ]
          },
          {
              label: 'Profile',
              items: [
                  {
                      label: 'Settings',
                      icon: 'pi pi-cog'
                  },
                  {
                      label: 'Logout',
                      icon: 'pi pi-sign-out'
                  }
              ]
          }
      ];
  }

}
