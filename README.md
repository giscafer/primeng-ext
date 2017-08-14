# primeng-ext
primeng component extension


## Component

### Calendar

- showTime="true"

![](./calendar/calendar.png)


### Autocomplete

-  hasChildren="hasChildren"

```html
  <p-autoComplete #pac name="text"
                    [(ngModel)]="value"
                    hasChildren="hasChildren"
                    [suggestions]="options"
                    (completeMethod)="queryData($event)"
                    field="name"
                    [inputStyle]="{'width':width}"
                    [style]="{'width':width}"></p-autoComplete>

```
![](./autocomplete/autocomplete.png)


### Tabview

lazyLoad component without router

```html

<ui-tabview #tabview [tabs]="tabs" [activeIndex]="tabActiveIndex"
                    (tabClose)="handlerTabClose($event)"></ui-tabview>
                    
```


![](./tabview/tabview.png)

![](./tabview/tabview1.gif)



## [License](./LICENSE)

---

> [giscafer.com](http://giscafer.com) &nbsp;&middot;&nbsp;
> GitHub [@giscafer](https://github.com/giscafer) &nbsp;&middot;&nbsp;
> Weibo [@Nickbing Lao](https://weibo.com/laohoubin) &nbsp;&middot;&nbsp;
> Twitter [@nickbinglao](https://twitter.com/nickbinglao)
