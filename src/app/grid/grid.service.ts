import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Car } from '../domain/car';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Tab} from "app/tabpanel/Tab";
import {TAB_LIST} from "app/tabpanel/tablist"
import{TabpanelService} from "app/tabpanel/tabpanel.service" 
@Injectable()
export class GridService {

  dynamicColumns: any[];
  

  constructor(private http: Http) { }

  getCarsSmall(): Observable<Car[]> {

    //.map(response=>response.json())
    return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json').map(response=>response.json())
/*
    return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json')
      .map(response=>response.json())
      .then(res => <Car[]>res.json().data)
      .then(data => { return data; });
      */
  }


    refreshGrid( menuId:number): any[] {

      if(menuId == 1){
                this.dynamicColumns = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'fff', header: 'ddd' }
        ];


      }else if(menuId == 2){
                this.dynamicColumns = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'fff', header: 'ddd' }
        ];


      }






        return this.dynamicColumns;
    }



}
