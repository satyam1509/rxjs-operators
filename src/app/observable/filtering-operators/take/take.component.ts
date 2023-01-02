import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent{

  snippet=`
  import { interval, take } from 'rxjs';

  const intervalCount = interval(1000);
  const takeFive = intervalCount.pipe(take(5));
  takeFive.subscribe(res => console.log(res));
  
  // Logs:
  // 0
  // 1
  // 2
  // 3
  // 4`
  
// subs:Subscription;
  constructor(){
    
    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe(res => console.log(res));
  
  
  }

}
