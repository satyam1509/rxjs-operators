import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, throttleTime, map } from 'rxjs';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.scss']
})
export class ThrottleComponent {

  snippet=`
  fromEvent(this.input?.nativeElement, 'input')
   .pipe(
       throttleTime(500),
       map((event: any) => event.target.value)
   ).subscribe(val => console.log(val));
  }`
  
// subs:Subscription;

@ViewChild('search') input: ElementRef | undefined ;

ngAfterViewInit(){
  // subscription:Subscription;
  //   const inputElement = document.createElement('input');
  // document.body.appendChild(inputElement);
  
  // this.subscription=
  fromEvent(this.input?.nativeElement, 'input')
   .pipe(
       throttleTime(500),
       map((event: any) => event.target.value)
   ).subscribe(val => console.log(val));
  }
  ngOnDestroy(): void {
// this.subscription.unsubscribe();
  }
}
