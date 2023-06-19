import { Pipe, PipeTransform } from '@angular/core';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';

@Pipe({
  name: 'pipeUser'
})
export class PipeUserPipe implements PipeTransform {
  newString?:string;
  transform(value: any):any {
    this.newString=value.substring(0,1).toUpperCase();
    return this.newString+value.substring(1);
  }

}
