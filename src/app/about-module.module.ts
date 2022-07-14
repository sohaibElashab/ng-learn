import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutComponent }]),
  ],
})
export class AboutModuleModule {}
