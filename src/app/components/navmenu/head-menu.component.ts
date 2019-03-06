import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-head-menu',
  templateUrl: './head-menu.component.html',
  styles: []
})
export class HeadMenuComponent {
  _srchClick: boolean = false;
  _srchData: string = '';
  public currentUser: any;
  @Input() sidebar: boolean;
  @Input() srchBar: boolean;
  @Output() srchChanged: any = new EventEmitter();
  constructor() {

     
  }

  ngOnInit() {

     this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this._srchClick = false;
    this._srchData = '';
  }

  ngOnChanges(changes: any) {
  }

  clickSrchInput() {
    if(this._srchData == '') this.clickSrch();
  }

  clickSrch() {
    if(!this._srchClick) this._srchClick = true;
    else{
      if(this._srchData == '') this._srchClick = false;
      else this.srchChanged.emit(this._srchData);
    }
  }

}
