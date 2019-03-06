import { Component } from '@angular/core';
import { DataResource } from '../_shared/data.resource';
declare var jQuery: any;
@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html'
})
export class SidebarMenuComponent {
  title = 'Report';
  _navs: Array<any> = [];
  constructor(public _data: DataResource) {
    this._navs = _data._navs;
    if (this._navs.length > 0) this._navs[0].selected = true;
  }

  ngOnInit() {
  }

  setClicked(num: any) {
    //console.log("clicked: "+num);
    //jQuery("#side-bar-menu li").eq(num).addClass("active open").siblings().removeClass("active open");
  }

  setChildClicked(num: any, chNum: any) {
    /*
    console.log("clicked: "+num+", clickedCh: "+chNum);
    jQuery("#side-bar-menu li").removeClass("active open");
    jQuery("#side-bar-menu li").eq(num).addClass("active open");
    jQuery("#side-bar-menu li ul li").removeClass("active open");
    jQuery("#side-bar-menu li ul li").eq(num).addClass("active open");
    */
  }

}
