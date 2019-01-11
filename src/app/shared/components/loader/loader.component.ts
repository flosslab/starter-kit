import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '@app/shared/services/loader/loader.service';
import { LoaderState } from '@app/shared/services/loader/loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() isLoading = false;
  @Input() message = '';

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.subscription = this.loaderService.getLoaderState().subscribe((state: LoaderState) => {
      this.isLoading = state.show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
