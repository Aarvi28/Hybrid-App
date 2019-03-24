import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from "../day-modal/day-modal.component";

declare var android: any;

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.css'],
    moduleId: module.id
})

export class CurrentChallengeComponent implements OnInit{
// @Input() public name: string[]=[];

// onItemTap(args: ItemEventData){
//     console.log(args);
// }
constructor(private modalDialog: ModalDialogService, private pageRoute: PageRoute, private vcRef: ViewContainerRef){}

ngOnInit() {
}
// edit(){
//     this.router.navigate(['/challenges/edit'],{transition: {name: 'slideLeft'}});
// }

onChangeStatus(){
    this.modalDialog.showModal(DayModalComponent,{
        fullscreen:true,
        viewContainerRef: this.vcRef
    });
}

}
