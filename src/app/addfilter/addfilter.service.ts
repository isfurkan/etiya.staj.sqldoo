import { Injectable } from '@angular/core';
import { Filtre } from './addfilter'
import { FilterList } from './addfilterlist';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class FilterService {

    pmenuId: number = 1;
    submitted: boolean;


    constructor() {

        
    }

    getFilterList(): Filtre[] {
        //console.log(FilterList.pop());
        return FilterList;
    }

    addToFiltreList(filtre: Filtre): void {
        var addedFiltre = FilterList.find(t => t.menuId == filtre.menuId);

        if (addedFiltre) {
            console.log(addedFiltre.filterName + " zaten var. isSelected = " + addedFiltre.menuId);
        }
        else {
            filtre.menuId = 1;
            console.log(filtre.filterName + " yeni ekleniyor. MenuID = " + filtre.menuId + " Label Name:" + filtre.labelName);
            FilterList.push(filtre);
        }
        console.log(FilterList);
    }


    createFilter(menuID?: number) {
        console.log("Creating filter.." + menuID);
        // this.filtre.menuId=menuID;
        this.pmenuId = menuID;
        console.log(this.pmenuId);
    }




}