import { Component } from '@angular/core';
import {  catchError, of, map,  } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent {

  snippet=`
  import { of, map, catchError } from 'rxjs';

  of(1, 2, 3, 4, 5)
    .pipe(
      map(n => {
        if (n === 4) {
          throw 'four!';
        }
        return n;
      }),
      catchError(err => {
        throw 'error in source. Details: ' + err;
      })
    )
    .subscribe({
      next: x => console.log(x),
      error: err => console.log(err)
    });
    // 1, 2, 3, error in source. Details: four!`
  // subs:Subscription;


  constructor(){

    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError(err => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe({
        next: x => console.log(x),
        error: err => console.log(err)
      });
      // 1, 2, 3, error in source. Details: four!
  }

}

