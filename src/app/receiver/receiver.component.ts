import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../shared/services/observable/observable.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {

  messageReceive: string = '';

  constructor(private _observableService : ObservableService) {}

  ngOnInit(): void {
    
    this._observableService.monBehaviorSubject.subscribe({
      
      next : (message) => {
        this.messageReceive = message;
      },

      error : (message) => {
        console.error(message);
      },

      complete : () => {
        this.messageReceive = 'Finito';
      }

    });

  }

}
