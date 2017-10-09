import {Component, Input, Injectable, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as _ from 'underscore';

import { PagerService } from './../common/services/pager.service';

@Component({
  selector: 'items-pagination',
  templateUrl: 'pagination.component.html'
})

@Injectable()
export class PaginationComponent implements OnInit {
  public appConfigs: any = {};
  public configUrl = './assets/data/appConfigs.json';

  constructor(private http: Http, private pagerService: PagerService) { }

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    // get dummy data
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.allItems = data.results;

        // initialize to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }


}
