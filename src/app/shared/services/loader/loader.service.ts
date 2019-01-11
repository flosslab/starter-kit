import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

import { LoaderState } from './loader';

@Injectable()
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();

  private loaderState = this.loaderSubject.asObservable();

  constructor() {}

  getLoaderState() {
    return this.loaderState;
  }

  show() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  hide() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }
}
