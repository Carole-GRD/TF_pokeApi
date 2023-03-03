import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  // // ↓ avec "Subject" -> il n'y a pas de message par défaut
  // monSubject : Subject<string> = new Subject<string>();
  // sendMessage(message : string) {
  //   console.log('J\'emmet message');
  //   this.monSubject.next(message);
  // }

  // ---------------------------------------------------------------------------------------

  // // ↓ avec "BehaviorSubject" -> on lui passe un message par défaut 
  // monSubject : BehaviorSubject<string> = new BehaviorSubject<string>('Rien à signaler');
  monBehaviorSubject : BehaviorSubject<string> = new BehaviorSubject<string>('Rien à signaler');

  sendMessage(message : string) {

    console.log('J\'emmet message');
  
    this.monBehaviorSubject.next(message);

    this.monBehaviorSubject.complete();
  
  }

  sendError(message : string) {
    this.monBehaviorSubject.error(message);
  }

  sendComplete() {
    this.monBehaviorSubject.complete();
  }


}
