import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHTMLPipe', pure: false
})
export class SanitizeHTMLPipePipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  transform(content: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
