import { Component, OnInit } from '@angular/core';
import { Menuitems } from '../../models/menu-items';
import { menuItemsArray } from '../../../environments/config';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  menuItemsList: Menuitems[] = menuItemsArray

  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * Navigate to route when click menu item
   * @param routePath 
   */
  onItemClick(routePath: string) {
    this.router.navigate([routePath]);
  }

}
