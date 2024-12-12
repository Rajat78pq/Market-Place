import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'default',
        pathMatch: 'full' // Ensures that the path must exactly match the empty string
    },
    {
        path: 'default',
        component: DefaultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
