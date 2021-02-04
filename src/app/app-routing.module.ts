import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NationalComponent } from './national/national.component';
import { RegionalComponent } from './regional/regional.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/national',
    pathMatch: 'full',
  },
  {
    path: 'national',
    component: NationalComponent,
  },
  {
    path: 'regional',
    component: RegionalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
