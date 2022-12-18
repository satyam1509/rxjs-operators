import { Component, OnInit } from '@angular/core';
import { fromEvent, take, tap } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent{

  snippet=`
  const source = from([1, 2, 3, 4, 5]);

  const example = source.pipe(filter(num => num % 2 === 0));


const subscribe = example.subscribe(val => console.log(Even number: val));`
  
  constructor(){
    // const oneClickEvent = fromEvent(document, 'click').pipe(
    //   take(1),
    //   tap(v => {
    //     document.getElementById(
    //       'locationDisplay'
    //     ).innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;
    //   })
    // );
  }

}
