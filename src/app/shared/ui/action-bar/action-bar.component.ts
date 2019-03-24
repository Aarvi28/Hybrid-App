import { Component, OnInit, Input } from '@angular/core';
import { Page, isAndroid, androidStatusBarBackgroundProperty } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { UIService } from '../../ui.service';


declare var android: any;
@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id,
})
export class ActionBarComponent implements OnInit {

    @Input() title:String;
    @Input() showBack: boolean = true;
    @Input() hasMenu =true;
  constructor(private page: Page, private router: RouterExtensions, private uiService: UIService) { }

  ngOnInit() {
  }
  get canBack(){
      return this.router.canGoBack() && this.showBack;
  }
  onGoBack(){
      this.router.backToPreviousPage();
  }

  onLoadedActionBar(){
    if( isAndroid ){
        const androidToolBar= this.page.actionBar.nativeView;
        const backButton= androidToolBar.getNavigationIcon();

        if(backButton){
            backButton.setColorFilter(android.graphics.Color.parseColor('#171717'),(<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
        }

    }
}
onToggleMenu(){
    this.uiService.toggle();
}

}
