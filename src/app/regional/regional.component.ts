import { Component } from '@angular/core';
import { Breadcrumb } from '../internal/breadcrumbs/model/breadcrumb';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.scss'],
})
export class RegionalComponent {
  private readonly _breadcrumbs: Breadcrumb[] = [
    {
      title: 'Home',
      routerLink: '/',
    },
    {
      title: 'Regional',
      routerLink: '/regional',
      isActive: true,
    },
  ];

  get breadcrumbs(): Breadcrumb[] {
    return this._breadcrumbs;
  }
}
