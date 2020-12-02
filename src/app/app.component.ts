import { Component, ViewChild, ElementRef } from '@angular/core';
import {Json2Ts as convert, bootstrap} from '../converter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jsontotsconversion';
  @ViewChild('dynamic', { static: false }) private dynamicRef: ElementRef<HTMLElement>;

  download() {
    this.dynamicRef.nativeElement.innerHTML = bootstrap();
  }
}
