import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SpinnerService {

    public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( false );
    private force = false;

    public displayLoader( value: boolean, force?: boolean ) {

        if ( typeof ( force ) === 'boolean' ) {
            this.force = force;
        }
        if ( !this.force ) {
            this.loaderStatus.next( value );
        }
    }
}
