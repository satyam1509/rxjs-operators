import { Component } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  snippet=`
  const source = from([1, 2, 3, 4, 5]);

  const example = source.pipe(filter(num => num % 2 === 0));


const subscribe = example.subscribe(val => console.log(Even number: val));`
  
  constructor(){
    const source = from([1, 2, 3, 4, 5]);
    //filter out non-even numbers
    const example = source.pipe(filter(num => num % 2 === 0));
    //output: "Even number: 2", "Even number: 4"
    const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));
  }
 
}
