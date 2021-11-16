import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggelAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)
  }

  onToggel(): Observable<any> {
    return this.subject.asObservable();
  }

}
