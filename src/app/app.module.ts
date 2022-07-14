import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./task-module.module').then((m) => m.TaskModuleModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about-module.module').then((m) => m.AboutModuleModule),
  },
];
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
