import { Injectable } from '@angular/core';
import { Filtre } from './addfilter'
import { FilterList } from './addfilterlist';
import { Component, OnInit } from '@angular/core';
import { Tab } from "app/tabpanel/Tab";
import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { TAB_LIST } from "app/tabpanel/tablist";
import { Car } from "app/domain/car";
import { SelectItem } from '../domain/api';
import { OverlayPanelModule } from 'primeng/primeng';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Message } from '../../../node_modules/primeng/components/common/api';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FilterService{
    filters: Filtre[];
    pmenuId: number;
    msgs: Message[] = [];
    userform: FormGroup;
    submitted: boolean;
    genders: SelectItem[];
    description: string;
    constructor(private fb: FormBuilder){

    ;}
addToFiltreList(filter:Filtre):void{
    var addedFiltre = FilterList.find(t => t.menuId==filter.menuId);
    FilterList.forEach(t=>{
        if(t.menuId==filter.menuId){
            addedFiltre=t;
        }
        else{
            console.log("Filtre EKLENEMEDİ !");
        }
        if (addedFiltre){
            console.log(addedFiltre.FilterName+" zaten var !");
        }
        else{
            console.log(addedFiltre.FilterName+" yeni filter ekleniyor.");
            FilterList.push(filter);
        }
    })
}
CreateFilter(){
    console.log("Add Filter Create Filter Fonksiyonunun İçinde !");
     this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)});
            
        this.genders = [];
        this.genders.push({label:'Select Gender', value:''});
        this.genders.push({label:'Male', value:'Male'});
        this.genders.push({label:'Female', value:'Female'});
    }
        onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
    }
        get diagnostic() { return JSON.stringify(this.userform.value); }




}