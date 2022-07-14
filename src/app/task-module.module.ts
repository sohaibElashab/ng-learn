import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { DatePipe } from './pipe/date.pipe';
import { DebounceDirective } from './directive/click.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    DatePipe,
    DebounceDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TasksComponent }]),
  ],
})
export class TaskModuleModule {}
