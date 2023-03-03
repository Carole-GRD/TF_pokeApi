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
    
    // this._observableService.monSubject.subscribe(
    //   (message) => {console.log(`Le message reçu est : ${message}`)}
    // );
    // --------------------------------------------------------------------------
    // this._observableService.monSubject.subscribe(
    //   (message) => {this.messageReceive = message}
    // );
    // --------------------------------------------------------------------------
    this._observableService.monBehaviorSubject.subscribe(
      (message) => {this.messageReceive = message}
    );

  }

}
