import { Component, OnInit } from '@angular/core';
import { Tab } from "app/tabpanel/Tab";
import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { TAB_LIST } from "app/tabpanel/tablist";
import { Car } from "app/domain/car";
import { SelectItem } from '../domain/api';
import { OverlayPanelModule } from 'primeng/primeng';
import { FilterList } from './addfilterlist';
import { FilterService } from './addfilterservice';
import { Filtre } from './addfilter'


import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Message } from '../../../node_modules/primeng/components/common/api';
@Component({
    selector: 'app-addfilter',
    templateUrl: './addfilter.component.html',
    styleUrls: ['./addfilter.component.css'],
    providers: [FilterService, TabpanelService]
})

export class AddFilterComponent implements OnInit {
    filters: Filtre[];
    pmenuId: number;
    msgs: Message[] = [];
    userform: FormGroup;
    submitted: boolean;
    genders: SelectItem[];
    description: string;
    constructor(private FilterService: FilterService, private fb: FormBuilder) {

    }


    ngOnInit() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });

        this.genders = [];
        this.genders.push({ label: 'Select Gender', value: '' });
        this.genders.push({ label: 'Male', value: 'Male' });
        this.genders.push({ label: 'Female', value: 'Female' });
    }
    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    }
    get diagnostic() { return JSON.stringify(this.userform.value); }

}