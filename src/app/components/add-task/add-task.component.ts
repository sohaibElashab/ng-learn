import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: Date;
  reminder:boolean = false
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService:UiService) { 
    this.subscription = uiService.onToggel().subscribe((value) => this.showAddTask = value)
  }

  ngOnInit(): void {

  }

  submit() {
    if(!this.text){
      alert("check ur data")
      return
    }

    const NewTask = {
      id : Math.floor(Math.random() * 100) + 1,
      text :this.text,
      day :this.day,
      reminder : this.reminder ? 1 : 0,
    }

    this.onAddTask.emit(NewTask)

    this.text = ''
    this.day = new Date()
    this.reminder = false
  }

  log(){
    console.log('====================================');
    console.log("yoooooooooooooooooooopyyyyyyyyyyyyyyyyy");
    console.log('====================================');
  }

}
