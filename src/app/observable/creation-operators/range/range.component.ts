import { Component, OnDestroy } from '@angular/core';
import { Observable, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnDestroy{
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

subscription:Subscription;
constructor(){
  const number= range(1,10);
  
  this.subscription=number.subscribe(res => {
  console.log(res);
  });
  // this.output=number.subscribe(res=>console.log(res))

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
