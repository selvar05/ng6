import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../data.service'
import{trigger,transition,query,stagger,style,animate} from'@angular/animations'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations:[
    trigger('listStagger',[
      transition('*<=>*',[
        query(':enter',[
          style({opacity:0,Transform:'translateY(-15px)'}),
          stagger('50ms',animate('550ms ease-out',
          style({opacity:1,Transform:'translateY(0)'})
        ))
        ],{optional:true}
      ),
        query(':leave',animate("50ms",style({opacity:0})),{optional:true})
      ])
    ])
  ]
})
export class PostsComponent implements OnInit {
 posts$:Object
  constructor(private data:DataService) { }

  ngOnInit() {
 this.data.getPosts().subscribe(
 data=>this.posts$ = data
 );
  }

}
