/**
 * ui-tabview组件，基于primeng p-tabview实现
 * Created by giscafer on 2017-07-19.
 */
import {
    Component, OnInit, Input, Output, AfterViewInit, NgModule, EventEmitter, ViewChild,
    Renderer
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UITabPanel} from "app/shared/ui/tabview/tab-panel";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {OverlayPanelModule, MenuModule} from 'primeng/primeng';

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

    @ViewChild('tabRef') tabRef: any;

    documentClickListener: any;

    items: any = [{
        label: '关闭',
        icon: 'fa-close',
        command: (event) => {
            this.closeCommand(event, 'current')
        }
    }, {
        label: '关闭左侧标签',
        icon: 'fa-close',
        command: (event) => {
            this.closeCommand(event, 'left')
        }
    }, {
        label: '关闭右侧标签',
        icon: 'fa-close',
        command: (event) => {
            this.closeCommand(event, 'right')
        }
    }, {
        label: '关闭其他',
        icon: 'fa-close',
        command: (event) => {
            this.closeCommand(event, 'other')
        }
    }, {
        label: '关闭所有',
        icon: 'fa-close',
        command: (event) => {
            this.closeCommand(event, 'all')
        }
    }];

    // 右键菜单源
    private cacheContextClickTarget: any;

    constructor(public renderer: Renderer) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let contextMenu = $('#contextMenu');
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', () => {
            contextMenu.hide();
        });
        $('ul[p-tabviewnav]').bind('contextmenu', (e) => {
            let oe = e.originalEvent;
            let target = oe.target;
            if (target.nodeName === 'SPAN') {
                this.cacheContextClickTarget = $(target);
            } else {
                this.cacheContextClickTarget = $(target).find('span');
            }
            contextMenu.css('left', oe.x);
            contextMenu.css('top', oe.y);
            contextMenu.show();
            e.preventDefault();
        });

    }

    handleChange(e) {
        this.tabChange.emit(e);
    }

    handleClose(e) {
        this.tabClose.emit(e);
    }

    /**
     * 获取选中的tab
     */
    findSelectedTab() {
        return this.tabRef.findSelectedTab();
    }

    tabPanelClick(index) {
        this.activeIndex = index;
    }

    /**
     * 批量删除tab标签
     * @param $event
     * @param type
     */
    closeCommand($event, type) {
        let text = this.cacheContextClickTarget.html();
        let tabIndex = this.getTabIndexByName(text);
        if (tabIndex === null) {
            return;
        }
        switch (type) {
            case 'current':
                this.tabs.splice(tabIndex, 1);
                break;
            case 'left':
                _.remove(this.tabs, function (n, index) {
                    return index < tabIndex;
                });
                break;
            case 'right':
                _.remove(this.tabs, function (n, index) {
                    return index > tabIndex;
                });
                break;
            case 'other':
                _.remove(this.tabs, function (n, index) {
                    return index !== tabIndex;
                });
                break;
            case 'all':
                this.tabs.length = 0;
                break;
            default:
                break;

        }
        $('#contextMenu').hide();
    }

    /**
     * 标签页
     * @param name
     * @returns {any}
     */
    getTabIndexByName(name: string) {
        let res = null;
        this.tabs.forEach((tab, index) => {
            if (tab.data && tab.data.name === name) {
                res = index;
            }
        });
        return res;
    }

    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
    }
}


@NgModule({
    declarations: [
        UITabView,
        UITabPanel,
    ],
    imports: [TabViewModule, CommonModule, OverlayPanelModule, MenuModule],
    exports: [
        UITabView,
        UITabPanel,
    ],
    providers: []
})
export class UITabViewModule {
}
