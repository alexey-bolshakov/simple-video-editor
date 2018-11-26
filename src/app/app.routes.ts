import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const appRoutes: Routes = [
  {
    path: 'editor',
    loadChildren: './pages/editor/editor.module#EditorModule'
  },
  {
    path: '**',
    redirectTo: '/editor'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
