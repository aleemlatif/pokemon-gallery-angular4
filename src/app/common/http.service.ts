import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { SpinnerService } from './spinner.service';


/**
 * Service class that handles all http requests to the server
 * All http calls are intercepted and loading spinner appears on each ajax call
 *
 */

@Injectable()
export class HttpService extends Http {

    /**
     * bootbox dialog reference
     */
    private dialog: any;

    /**
     * Is the dialog open or not
     */
    private isOpen = false;

    /**
     * Dialog message
     */
    private msg = '';

    /**
     * Count to show hide spinner
     */
    private count: any[] = [];

    constructor( backend: XHRBackend,
        defaultOptions: RequestOptions,
        private _router: Router, private spinnerService: SpinnerService ) {
        super( backend, defaultOptions );
    }

    /*post( url: string, body: any, options?: RequestOptionsArgs ): Observable<Response> {
        return this.intercept( super.post( url, body, options ).share() );
    }

    put( url: string, body: any, options?: RequestOptionsArgs ): Observable<Response> {
        return this.intercept( super.put( url, body, options ).share() );
    }

    get( url: string, options?: RequestOptionsArgs, displayLoader?: boolean ): Observable<Response> {

        // --IE11 cache responses, adding the timestamp param to fetch updated data everytime
        options = options || {};
        options.search = options.search || new URLSearchParams();
        ( <URLSearchParams>options.search ).set( 'ts', '' + ( new Date() ).getTime() );

        return this.intercept( super.get( url, options ).share(), displayLoader );
    }*/

}
