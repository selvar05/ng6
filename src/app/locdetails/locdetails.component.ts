import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Locationdetails } from '../locationdetails';
@Component({
  selector: 'app-locdetails',
  templateUrl: './locdetails.component.html',
  styleUrls: ['./locdetails.component.scss']
})
export class LocdetailsComponent implements OnInit {
  dataSource = new LocationDetailSource (this.dataService);
  
  displayedColumns: string[] =  ['Region', 'CountryName', 'CityName', 'FileID', 'BuildingName', 'AreaName', 'SeatCapacity','UsersOccupancy','FileName', 'LeaseType', 'LeaseEndDate', 'AddressSuite', 'Subtype', 'Division','Size','UOM']; 
  constructor(private dataService :DataService) { }

  ngOnInit() {
   
  }

}
export class LocationDetailSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<Locationdetails[]> {
    return this.dataService.getCgLocationDetails();
    }
  disconnect() {}
}