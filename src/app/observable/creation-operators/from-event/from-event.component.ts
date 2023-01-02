import { Component, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent  implements OnDestroy{

  snippet=`
  import { fromEvent } from 'rxjs';

const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));`

  subscription:Subscription;
  
  constructor(){
   
const clicks = fromEvent(document, 'click');
this.subscription=clicks.subscribe(x => console.log(x));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  
}
