import { Component, OnInit } from '@angular/core';
import { from, mergeMap, of, delay } from 'rxjs';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent  {

  snippet=`
  const api = 'https://reqres.in/api/users/';
  const urls = [1, 2, 3].map(id => api + id);
  
  from(urls).pipe(
     mergeMap(url => this.mockHTTPRequest(url))
  ).subscribe(val => console.log(val));
  
  
}
 mockHTTPRequest(url:string) {
   return of(Response from {url}).pipe(
       // responses come in a random order
       delay(2000)
   );
   }`
  
  
  constructor(){

    const api = 'https://reqres.in/api/users/';
    const urls = [1, 2, 3].map(id => api + id);
    
    from(urls).pipe(
       mergeMap(url => this.mockHTTPRequest(url))
    ).subscribe(val => console.log(val));
    
    
  }
   mockHTTPRequest(url:string) {
     return of(`Response from ${url}`).pipe(
         // responses come in a random order
         delay(2000)
     );
     }
}
