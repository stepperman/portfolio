import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Pipe({
  name: 'keepHTML', pure: false
})
export class KeepHTMLPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer) {}

  transform(content): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
