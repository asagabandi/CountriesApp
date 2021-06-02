import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './Components/HomePage/home-page.component';
import { DetailPageComponent } from './Components/DetailPage/detail-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: ':country',
        component: DetailPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }