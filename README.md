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


