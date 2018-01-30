import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arithmeticRGBtoHEX'
})

export class ArithmeticRGBtoHEXPipe implements PipeTransform {
    transform(rgb: string): any {
        let channels = rgb.split(',');
        let hex = '#';
        let tmpHex: string = '';

        for (let i of channels) {   // of channels -> value, in channels -> index
            tmpHex = Math.round(parseFloat(i) * 255).toString(16);
            hex += (tmpHex.length == 1) ? '0' + tmpHex : tmpHex;
        }
        
        return hex;
    }
}