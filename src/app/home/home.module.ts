import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

/*
const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'appareil',
        children: [
          {
            path: '',
            loadChildren: '../appareils/appareils.module#AppareilsPageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings/setings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
*/


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})

export class HomePageModule {}
