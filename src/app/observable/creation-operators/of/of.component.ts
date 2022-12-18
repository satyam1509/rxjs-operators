import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent  {

  snippet=`
  import { of } from 'rxjs';
  const source = of({ name: 'Satyam' }, [1, 2, 3], function hello() {
    return 'Hello';
  });
  
  const subscribe = source.subscribe(val => console.log(val));`
  
  constructor(){
   
    const source = of({ name: 'Satyam' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
   
    const subscribe = source.subscribe(val => console.log(val));
  }

  

}
