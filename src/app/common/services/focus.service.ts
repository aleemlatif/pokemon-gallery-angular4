import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class FocusService {

  // Subject / SubjectBehaviour
  private _BSubject = new BehaviorSubject<any>(null);

  // Observables
  public _BSubjectAnnounced$ = this._BSubject.asObservable();

  // Behaviour Subject methods
  setFocusBS(FocusEleId: string) {

      this._BSubject.next({string: FocusEleId});
      // set focus onto parsed element through ID
      document.getElementById(FocusEleId).focus();

  }

  getFocusBS(): Observable<any> {
    return this._BSubject.asObservable();
  }

  clearFocusBS() {
    this._BSubject.next({});
  }

}
