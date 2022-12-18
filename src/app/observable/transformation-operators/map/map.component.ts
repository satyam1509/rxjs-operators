import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  snippet=`
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


const source = from([1, 2, 3, 4, 5]);

//add 10 to each value

const example = source.pipe(map(val => val * 10));

const subscribe = example.subscribe(val => console.log(val));

//output: 10,20,30,40,50`

constructor(){

  const source = from([1, 2, 3, 4, 5]);
  
  const example = source.pipe(map(val => val * 10));
  
  const subscribe = example.subscribe(val => console.log(val));
  
 
}

}
