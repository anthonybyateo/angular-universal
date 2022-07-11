import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { FilterMetadata } from 'primeng/components/common/api';

@Component({
    templateUrl: './datatablelazydemo.html',
})
// tslint:disable-next-line:component-class-suffix
export class DataTableLazyDemo implements OnInit {

    datasource: Car[];

    cars: Car[];

    totalRecords: number;

    constructor(private carService: CarService) { }

    async ngOnInit() {
        this.datasource = await this.carService.getCarsLargeAsync();
        this.totalRecords = this.datasource.length;
        this.cars = this.datasource.slice(0, 10);
    }

    loadCarsLazy(event: LazyLoadEvent) {
        // in a real application, make a remote request to load data using state metadata from event
        // event.first = First row offset
        // event.rows = Number of rows per page
        // event.sortField = Field name to sort with
        // event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        // filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        // imitate db connection over a network
        setTimeout(() => {
            if (this.datasource) {
                this.cars = this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }
}
