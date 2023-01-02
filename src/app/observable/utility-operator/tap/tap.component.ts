import { Component, OnInit } from '@angular/core';
import { fromEvent, map, of, ReplaySubject, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent  {

  snippet=`
  of(Math.random()).pipe(
    tap(console.log),
    map(n => n > 0.5 ? 'big' : 'small')
  ).subscribe(console.log);`
  
  
  constructor(){

of(Math.random()).pipe(
  tap(console.log),
  map(n => n > 0.5 ? 'big' : 'small')
).subscribe(console.log);
    }
  

}
