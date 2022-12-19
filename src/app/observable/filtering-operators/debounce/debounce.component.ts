import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, map, debounce, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent  implements AfterViewInit,OnDestroy{

   
  snippet=`
fromEvent(inputElement, 'input')
   .pipe(
       debounce(() => interval(2000)),
       map((event: any) => event.target.value)
   ).subscribe(val => console.log(val));
   `
   @ViewChild('search') input: ElementRef | undefined ;
   
   ngAfterViewInit(){
  // subscription:Subscription;
  //   const inputElement = document.createElement('input');
  // document.body.appendChild(inputElement);
  
  // this.subscription=
  fromEvent(this.input?.nativeElement, 'input')
  .pipe(
    debounce(() => interval(2000)),
    map((event: any) => event.target.value)
    ).subscribe(val => console.log(val));
    
  }
  ngOnDestroy(): void {
// this.subscription.unsubscribe();
  }
}
