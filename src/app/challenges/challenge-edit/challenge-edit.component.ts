import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute } from 'nativescript-angular/router';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {
//@Output() public childEvent = new EventEmitter();
    replacable=true;
  constructor(private pageRoute: PageRoute, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    //   this.activeRoute.paramMap.subscribe(paramMap=>
    //     console.log(paramMap.get('mode')));
    this.pageRoute.activatedRoute.subscribe(activeRoute =>
        activeRoute.paramMap.subscribe(paramMap=> {
            console.log("Value of mode is: ",paramMap.get('mode'));
          if(!paramMap.has('mode')){
                this.replacable=true;
          }
          else {
             this.replacable= paramMap.get('mode')==='edit'? false : true;
            }
         } ))
  }
// challengedescription='';
//   currentChallenge: string[]=[];//'';
//   onSetChallenge(){
//     this.currentChallenge.push(this.challengedescription);
//      this.childEvent.emit(this.currentChallenge);
//   }
}
