import { Component } from '@angular/core';
import { Breadcrumb } from '../internal/breadcrumbs/model/breadcrumb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly _breadcrumbs: Breadcrumb[] = [
    {
      title: 'Home',
      routerLink: '/',
      isActive: true,
    },
  ];

  get breadcrumbs(): Breadcrumb[] {
    return this._breadcrumbs;
  }
}
