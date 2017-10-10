import {Component, Input, Injectable, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Form, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Product} from './Product';

import * as _ from 'underscore';

import {PagerService} from './../common/services/pager.service';

@Component({
  selector: 'items-pagination',
  templateUrl: 'pagination.component.html'
})

@Injectable()
export class PaginationComponent  {
  public appConfigs: any = {};
  public configUrl = './assets/data/appConfigs.json';
  public apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  productList: Product[];
  filteredItems: Product[];
  pages: number = 8;
  pageSize: number = 20;
  pageNumber: number = 0;
  currentIndex: number = 1;
  items: Product[];
  pagesIndex: Array<number>;
  pageStart: number = 1;
  inputName: string = '';

  constructor(private http: Http, private pagerService: PagerService) {

    // get dummy data
    this.http.get(this.apiUrl)
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.productList = data.results;

        this.filteredItems = this.productList;

        this.init();

      });

  }

  init() {
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 8;

    this.pageNumber = parseInt('' + (this.filteredItems.length / this.pageSize));
    if (this.filteredItems.length % this.pageSize !== 0) {
      this.pageNumber++;
    }

    if (this.pageNumber < this.pages) {
      this.pages = this.pageNumber;
    }

    this.refreshItems();
    console.log('this.pageNumber :  ' + this.pageNumber);
  }

  FilterByName() {
    this.filteredItems = [];
    if (this.inputName !== '') {
      this.productList.forEach(element => {
        if (element.name.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.filteredItems.push(element);
        }
      });
    } else {
      this.filteredItems = this.productList;
    }
    console.log(this.filteredItems);
    this.init();
  }

  fillArray(): any {
    const obj = new Array();
    for (let index = this.pageStart; index < this.pageStart + this.pages; index++) {
      obj.push(index);
    }
    return obj;
  }

  refreshItems() {
    this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    this.pagesIndex = this.fillArray();
  }

  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }

  nextPage() {
    if (this.currentIndex < this.pageNumber) {
      this.currentIndex++;
    }
    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }

  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }

}
