import { Component, OnDestroy } from '@angular/core';
import { filter, from, Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnDestroy {

  snippet=`
  const source = from([1, 2, 3, 4, 5]);

  const example = source.pipe(filter(num => num % 2 === 0));


const subscribe = example.subscribe(val => console.log(Even number: val));`
  
subscription:Subscription;
constructor(){
    const source = from([1, 2, 3, 4, 5]);
    //filter out non-even numbers
    const example = source.pipe(filter(num => num % 2 === 0));
    //output: "Even number: 2", "Even number: 4"
    this.subscription = example.subscribe(val => console.log(`Even number: ${val}`));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 
}
