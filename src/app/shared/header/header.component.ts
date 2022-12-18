import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}

  @Output() sideNavToggle= new EventEmitter<boolean>();
  menuStatus:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }


  sideToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggle.emit(this.menuStatus);
  }
}
