import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, distinct, Subscription } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnDestroy {

  snippet=`
  
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 6)
  .pipe(distinct())
  .subscribe(console.log);`
subs:Subscription;
constructor(){
this.subs= of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 6)
  .pipe(distinct())
  .subscribe(console.log);
}
  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }


}
