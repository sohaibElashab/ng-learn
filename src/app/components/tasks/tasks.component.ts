import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
      // console.log(tasks)
    });
  }
  
  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    this.taskService
      .delteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggelTask(task: Task) {
    task.reminder = task.reminder == 1 ? 0 : 1;
    this.taskService.updateTask(task).subscribe();
  }

  addTask(task: Task) {
    console.log(this.tasks)
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
    console.log(task)
  }
}
