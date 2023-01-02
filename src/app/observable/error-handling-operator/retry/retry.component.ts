import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, mergeMap, throwError, of, retry, Subscription } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnDestroy{
  snippet=`
  const source = interval(1000);
const result = source.pipe(
  mergeMap(val => val > 5 ? throwError(() => 'Error!') : of(val)),
  retry(1) 
);
 
result.subscribe({
  next: value => console.log(value),
  error: err => console.log({ err }: Retried 1 time then quit!)
});`
  
subs:Subscription;
  constructor(){
    const source = interval(1000);
    const result = source.pipe(
      mergeMap(val => val > 5 ? throwError(() => 'Error!') : of(val)),
      retry(1) // retry 2 times on error
    );
     
   this.subs= result.subscribe({
      next: value => console.log(value),
      error: err => console.log(`${ err }: Retried 1 time then quit!`)
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe;
  }

  
}
