import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingService } from '../../../Services/loading-service';

@Component({
  selector: 'app-loading-overlay',
  imports: [CommonModule],
  templateUrl: './loading-overlay.html',
  styleUrl: './loading-overlay.scss',
})
export class LoadingOverlay {

  /**
   *
   */
    loading$!:Observable<boolean>;

  constructor(private readonly _LoadingService:LoadingService) {
    this.loading$ = this._LoadingService.loading$.asObservable();
  }
}
