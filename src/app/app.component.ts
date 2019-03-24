import { Component, Input, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from "@angular/core";
import { UIService } from "./shared/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy{
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;
    // @Input() public currentChallenge;
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    constructor(private uiService: UIService, private changeDetectorRef: ChangeDetectorRef){}

    ngOnInit() {
        this.drawerSub= this.uiService.drawerState.subscribe(()=>
             {
                 if(this.drawer){
                this.drawer.toggleDrawerState();
                 }
            }
        );
    }

    ngAfterViewInit(){
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectorRef.detectChanges();
    }
    onLogout(){
        this.uiService.toggle();
    }
    ngOnDestroy(){
        if(this.drawerSub){
            this.drawerSub.unsubscribe();
        }

    }
}
