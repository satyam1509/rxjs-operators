import { Component, OnInit } from '@angular/core';
import { of, partition, range } from 'rxjs';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss']
})
export class PartitionComponent  {
  snippet=`
  import { of, partition } from 'rxjs';

  const observableValues = of(1, 2, 3, 4, 5, 6, 7, 8 ,9, 10);
  const [evens$, odds$] = partition(observableValues, value => value % 2 === 0);
  
  odds$.subscribe(x => console.log('odds', x));
  evens$.subscribe(x => console.log('evens', x));
  
  // Logs:
  // odds 1
  // odds 3
  // odds 5
  // evens 2
  // evens 4
  // evens 6`

constructor(){
  const observableValues = range(1,10);
  const [evens, odds] = partition(observableValues, value => value % 2 === 0);
   
  odds.subscribe(x => console.log('odds', x));
  evens.subscribe(x => console.log('evens', x));
   
}
}
