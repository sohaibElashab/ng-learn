import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask : boolean = false;
  subscription!: Subscription;
  constructor(private uiService:UiService , private router:Router) {
    this.subscription = this.uiService.onToggel().subscribe((value) => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggelAdd() {
    this.uiService.toggelAddTask();
  }

  hasRout(route:string) {
    return this.router.url === route
  }
}
