/**
 * Created by giscafer on 2017-07-19.
 */
import {
    Component,
    OnInit,
    Input,
    AfterViewInit,
    ViewChild,
    ComponentFactoryResolver,
    Type,
    ViewContainerRef
} from "@angular/core";
import {TabConfig} from "./TabConfig";


@Component({
    selector: "ui-tab-panel",
    template: "<div #dynamicContainer></div>"
})
export class UITabPanel implements OnInit,AfterViewInit {

    @Input()
    tabItem: TabConfig;

    @ViewChild( "dynamicContainer", { read: ViewContainerRef } ) dynamicContentContainer: ViewContainerRef;

    currentTabIndex: number = 1;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        this.loadComponent();
    }

    ngAfterViewInit(): void {
    }


    loadComponent() {
        // this.currentTabIndex = (this.currentTabIndex + 1) % this.tabs.length;

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tabItem.component);

        // let viewContainerRef = this.tabHost.viewContainerRef;
        this.dynamicContentContainer.clear();

        let componentRef = this.dynamicContentContainer.createComponent(componentFactory);
        (<TabConfig>componentRef.instance).data = this.tabItem.data;
    }


}
