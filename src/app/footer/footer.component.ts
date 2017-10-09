import {Component, Input, Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html'
})

@Injectable()
export class FooterComponent {
  public appConfigs: any = {};
  public configUrl = './assets/data/appConfigs.json';

  constructor(private http: Http) {

    /**
     * Read the App Build Number from the 'appConfigs.json' file within assets folder
     */
    this.getJSON().subscribe(
      data => {
        this.appConfigs = data.appConfigs;
      },
      error => {
        console.log(error);
      }
    );
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.configUrl)
      .map((res: any) => res.json())

  }
}
