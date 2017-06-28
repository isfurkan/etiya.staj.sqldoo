import { Component, OnInit } from '@angular/core';

import { Car } from '../domain/car';

import { GridService } from "./grid.service";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    providers: [GridService]
})
export class GridComponent implements OnInit {

    cars: Car[];

    cols: any[];

    pmenuId:number;

    constructor(private gridService: GridService) { }

    ngOnInit() {

    }



    refreshGrid(menuId?: number) {

        if (menuId) {
            console.log("menu Id var " + menuId);
            this.pmenuId=menuId;
        } else {
            console.log("menu Id yok");
             this.pmenuId=1;

        }

        this.cols = this.gridService.refreshGrid(this.pmenuId);
    }

}
