import {Injectable} from '@angular/core';
import {RequestOptions, Response, Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {HttpService} from './http.service';
import {WindowRef} from './window-ref.service';

@Injectable()
export class CommonService {

    constructor(private http: HttpService) { }

    /**
     * Get the Control Code information
     * @param controlCode - The control code to fetch data for
     * @returns Observable<any>
     */
    public getControlCodeData(controlCode: string): Observable<any> {

        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151' + controlCode;
        const options = new RequestOptions({ withCredentials: true });

        return this.http.get(url, options)
            .map((res: Response) => res.json());
    }

    /**
     * Allow Numbers only keyboard entries
     * @param event
     */
    public allowNumbersOnlyInputs(event: any) {
        const pattern = /[0-9]/;
        const inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
}
