import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'convertTimezone'
})

export class ConvertTimezonePipe implements PipeTransform {
    transform(date: Date|moment.Moment, args: string[]): any {
        let timeZone = args[0];
        let format = args[1];
        return moment.parseZone(date).utcOffset(timeZone).format(format);
    }
}