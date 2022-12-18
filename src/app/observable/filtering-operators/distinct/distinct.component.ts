import { Component, OnInit } from '@angular/core';
import { of, distinct } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent  {

  snippet=`
  
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 6)
  .pipe(distinct())
  .subscribe(console.log);`

constructor(){

of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 6)
  .pipe(distinct())
  .subscribe(console.log);
}
}
