import { Component } from '@angular/core';
import { Observable, range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent {
snippet=`
import { range } from 'rxjs';

const numbers = range(1, 3);

numbers.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete!')
});

// Logs:
// 1
// 2
// 3
// 'Complete!'`


constructor(){
  const number= range(1,10);
  
  number.subscribe(res => {
  console.log(res);
  });
  // this.output=number.subscribe(res=>console.log(res))

  }
}
