import { Pipe, PipeTransform } from "../../../../node_modules/@angular/core";

@Pipe({
name : 'upper'
})
export class UpperCasePipe implements PipeTransform {

    transform(value: String): string {
        const trnasformedValue = value.toUpperCase();

        return trnasformedValue;
    }
}

