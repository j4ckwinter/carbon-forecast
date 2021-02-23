import { Component } from '@angular/core';
import { Breadcrumb } from '../internal/breadcrumbs/model/breadcrumb';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.scss'],
})
export class NationalComponent {
  private readonly _breadcrumbs: Breadcrumb[] = [
    {
      title: 'Home',
      routerLink: '/',
    },
    {
      title: 'National',
      routerLink: '/national',
    },
  ];

  get breadcrumbs(): Breadcrumb[] {
    return this._breadcrumbs;
  }
}
