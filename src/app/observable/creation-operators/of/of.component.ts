import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent  implements OnDestroy{

  snippet=`
  import { of } from 'rxjs';
  const source = of({ name: 'Satyam' }, [1, 2, 3], function hello() {
    return 'Hello';
  });
  
  const subscribe = source.subscribe(val => console.log(val));`
  subscription:Subscription;
  constructor(){
   
    const source = of({ name: 'Satyam' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
   
    this.subscription=  source.subscribe(val => console.log(val));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
