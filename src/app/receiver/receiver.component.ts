import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableService } from '../shared/services/observable/observable.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit, OnDestroy {

  messageReceive: string = '';

  observer! : Subscription;

  constructor(private _observableService : ObservableService) {}

  ngOnInit(): void {
    
    this.observer = this._observableService.monBehaviorSubject.pipe(
      tap(_ => console.log('pipe -> tap')), 
      map(x => x + ' ...et mon pipe')
    ).subscribe({
      
      next : (message) => {
        this.messageReceive = message;
        console.log(message);
      },

      error : (message) => {
        console.error(message);
      },

      complete : () => {
        this.messageReceive = 'Finito';
      }

    });

  }

  ngOnDestroy(): void {

    this.observer.unsubscribe()

  };

}
