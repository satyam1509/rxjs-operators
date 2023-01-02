import { Component, OnDestroy } from '@angular/core';
import { forkJoin, of, range, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent  implements OnDestroy{

  snippet=`
  import { forkJoin, of, timer } from 'rxjs';

const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),

});
observable.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});

// Logs:
// { foo: 4, bar: 8 } after 4 seconds
// 'This is how it ends!' immediately after`
subs:Subscription;

constructor(){
  const observable = forkJoin({
    foo: of(1, 2, 3, 4),
    bar: range(1,9),
    
  });
  this.subs=observable.subscribe(value => console.log(value),
  );
 
}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
