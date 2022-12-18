import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, debounce, interval } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent  implements AfterViewInit{

   
  snippet=`
fromEvent(inputElement, 'input')
   .pipe(
       debounce(() => interval(2000)),
       map((event: any) => event.target.value)
   ).subscribe(val => console.log(val));
`
@ViewChild('search') input: ElementRef | undefined ;
constructor() {
  
}
ngAfterViewInit(){
//   const inputElement = document.createElement('input');
// document.body.appendChild(inputElement);

fromEvent(this.input?.nativeElement, 'input')
   .pipe(
       debounce(() => interval(2000)),
       map((event: any) => event.target.value)
   ).subscribe(val => console.log(val));

}
}
