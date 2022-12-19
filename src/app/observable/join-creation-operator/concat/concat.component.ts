import { Component, OnDestroy } from '@angular/core';
import { interval, take, concat, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnDestroy {

  snippet=`
  import { interval, take, range, concat } from 'rxjs';

  const timer = interval(1000).pipe(take(4));
  const sequence = range(1, 10);
  const result = concat(timer, sequence);
  result.subscribe(x => console.log(x));
  
  // results in:
  // 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10`
  subs:Subscription;

  constructor() { 

    const timer = interval(1000).pipe(take(4));
    const sequence = range(1, 10);
    const result = concat(timer, sequence);
   this.subs= result.subscribe(x => console.log(x));
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
