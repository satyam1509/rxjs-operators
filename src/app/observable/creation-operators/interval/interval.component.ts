import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent  {

  snippet=`
  import { interval, take } from 'rxjs';

  const numbers = interval(1000);
  
  const takeFourNumbers = numbers.pipe(take(10));
  
  takeFourNumbers.subscribe(x => console.log('Next: ', x));
  
  // Logs:
  // Next: 0
  // Next: 1
  // Next: 2
  // Next: 3`
  
  constructor(){

  const numbers = interval(1000);  //emit value in sequence every 1 second
  
  const takeNumbers = numbers.pipe(take(10)); //starts from 0
  
  takeNumbers.subscribe(x => console.log(x)
    );
}
  
  
  

}
