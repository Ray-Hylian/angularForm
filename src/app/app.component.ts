import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'})
export class AppComponent {

  items!: MenuItem[];
  
  constructor(router: Router) {
  }
  ngOnInit() {
    this.items = [
      {label: 'Catégorie 1 : Mathematiques', routerLink: ['/math-calculs']},
      {label: 'Catégorie 2 : Gestion d\'utilisateurs ', routerLink: ['/all-users']},
      {label: 'Catégorie 3 : Gestion des abonnements et des formations', routerLink: ['/all-subscriptions']}
      
    ];
  }
  }
