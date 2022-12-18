import { Component, OnInit } from '@angular/core';
import { of, scan } from 'rxjs';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {

  
  snippet=`
  import { of } from 'rxjs';
  import { scan } from 'rxjs/operators';
  
  const source = of(1, 2, 3);
  // basic scan example, sum over time starting with zero

  const example = source.pipe(scan((acc, curr) => acc + curr, 0));
  // log accumulated values
  
  const subscribe = example.subscribe(val => console.log(val));
  // output: 1,3,6`

constructor(){

  const source = of(1, 2, 3, 4, 5);
// basic scan example, sum over time starting with zero
const example = source.pipe(scan((acc, curr) => acc + curr,0));

// output: 1,3,6
const subscribe = example.subscribe(val => console.log(val));
 
}
}
