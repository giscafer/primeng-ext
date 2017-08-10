/**
 * ui-tabview组件，基于primeng p-tabview实现
 * Created by giscafer on 2017-07-19.
 */
import {Component, OnInit, Input, Output, AfterViewInit, NgModule, EventEmitter, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UITabPanel} from "app/shared/ui/tabview/tab-panel";
import {TabViewModule} from "primeng/components/tabview/tabview";

@Component({
    templateUrl: "./tabview.html",
    styleUrls: ["./tabview.scss"],
    selector: "ui-tabview"
})
export class UITabView implements OnInit,AfterViewInit {

    @Input()
    tabs: any[] = [];

    @Input()
    activeIndex: number = 0;

    @Output()
    tabChange: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    tabClose: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('tabRef') tabRef:any;

    constructor() {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    handleChange(e) {
        this.tabChange.emit(e);
    }
    handleClose(e){
        this.tabClose.emit(e);
    }

    /**
     * 获取选中的tab
     */
    findSelectedTab(){
        return this.tabRef.findSelectedTab();
    }

    tabPanelClick(index) {
        this.activeIndex = index;
    }

}


@NgModule({
    declarations: [
        UITabView,
        UITabPanel,
    ],
    imports: [TabViewModule, CommonModule],
    exports: [
        UITabView,
        UITabPanel,
    ],
    providers: []
})
export class UITabViewModule {
}
