import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/charts', pathMatch: 'full' },
  {
    path: 'charts',
    loadChildren: () =>
      import('./features/charts/manage-charts.module').then((m) => m.ManageChartsModule),
  },
  { path: '**', redirectTo: '/charts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
