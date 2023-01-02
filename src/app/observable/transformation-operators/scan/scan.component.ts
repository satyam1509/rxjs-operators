import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, scan, Subscription } from 'rxjs';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnDestroy{

  
  snippet=`
  import { of } from 'rxjs';
  import { scan } from 'rxjs/operators';
  
  const source = of(1, 2, 3);
  // basic scan example, sum over time starting with zero

  const example = source.pipe(scan((acc, curr) => acc + curr, 0));
  // log accumulated values
  
  const subscribe = example.subscribe(val => console.log(val));
  // output: 1,3,6`

  subs:Subscription;
constructor(){

  const source = of(1, 2, 3, 4, 5);
// basic scan example, sum over time starting with zero
const example = source.pipe(scan((acc, curr) => acc + curr,2));

// output: 1,3,6
this.subs= example.subscribe(val => console.log(val));
 
}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
