import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  find,
  map,
  skipUntil,
  tap,
} from 'rxjs/operators';

/**
Usage:
  <mat-form-field appearance="outline" fxFlex="35" class="pr-8">
      <mat-label>{{ 'pessoa.label.cep' | translate }}</mat-label>
      <input matInput formControlName="nrCep" mask="00.000-000" [(ngModel)]="nrCep"
             [debounce]="800" [onPatchValue]="this.onPatchValue"
             (keydown)="updateOnPatchValue()" (onDebounce)="buscarCep($event)">
      <mat-icon matSuffix class="secondary-text">search</mat-icon>
  </mat-form-field>
*/
@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceDirective implements OnInit, OnDestroy {
  @Output()
  public onDebounce = new EventEmitter<any>();

  @Input('debounce')
  public debounceTime: number = 5000;

  private clicks = new Subject();

  private subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    console.log('debounceTime: ', this.debounceTime);
    this.subscription = this.clicks
      // .pipe(skipUntil(timer(3000)))
      .pipe(debounceTime(this.debounceTime))
      .pipe(distinctUntilChanged())
      .subscribe((modelValue) => {
        this.onDebounce.emit(modelValue);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event:any) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
