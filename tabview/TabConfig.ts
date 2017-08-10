/**
 * Created by giscafer on 2017-07-19.
 */
import { Type } from '@angular/core';

export interface TabConfig {
    key?: string;
    title?: string;
    removable?: boolean;
    active?: boolean;
    data?: any;
    component?: Type<any>;
}
