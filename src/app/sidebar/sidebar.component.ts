import * as url from 'url';
import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 currentUrl:String;
  constructor(private router:Router) {
 /*router.events.subscribe(
      (_:NavigationEnd)=>this.currentUrl =_.url
    );
*/

this.router.events.subscribe((path: NavigationEnd) => {
  if(path.url){
  this.currentUrl = path.url;
  }
  });
   }

  ngOnInit() {
    console.log(this.currentUrl);
  }

}
