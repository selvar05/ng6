import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface ipData {
  id: string;
  region: string;
  countryName: string;
  cityName: string;
  seatCapacity: number;
  userOccupancy: number;
  ipsubnet: string;
  dhcpserver: string;
  dhcpserverHostname: string;
  supportGroup: string;
  areaName: string;
  buildingName: string;
}
@Component({
  selector: 'app-ipdetails',
  templateUrl: './ipdetails.component.html',
  styleUrls: ['./ipdetails.component.scss']
})
export class IpdetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'region', 'countryName', 'cityName','seatCapacity',  'userOccupancy', 'ipsubnet','dhcpserver', 'dhcpserverHostname','supportGroup', 'areaName', 'buildingName'];
  dataSource: MatTableDataSource<ipData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {
    this.dataSource = new MatTableDataSource(this.ipdatas);
   }
  ipdatas:ipData[]=[
    {
      id:"1",
      region:"US and LatAm",
      countryName:"CANADA",
      cityName:"MONTREAL",
      seatCapacity:23,
      userOccupancy:12,
      ipsubnet:"10.150.228.182/29 10.157.160.0/24 10.157.162.0/23 10.158.237.0/24 10.146.156.0/23",
      dhcpserver:"206.245.43.16 206.245.17.74",
      dhcpserverHostname:"usilch03adncc02.corp.capgemini.com ca  mcginpvw08.corp.capgemini.com",
      supportGroup:"Group IT",
      areaName:"1100 RENE-LEVESQUE BLVD. WEST",
      buildingName:"1100RLB"
    },
    {
      id:"2",
      region:"US and LatAm",
      countryName:"CANADA",
      cityName:"MONTREAL",
      seatCapacity:33,
      userOccupancy:42,
      ipsubnet:"10.150.228.182/29 10.157.160.0/24 10.157.162.0/23 10.158.237.0/24 10.146.156.0/23",
      dhcpserver:"206.245.43.16 206.245.17.74",
      dhcpserverHostname:"usilch03adncc02.corp.capgemini.com ca  mcginpvw08.corp.capgemini.com",
      supportGroup:"Group IT",
      areaName:"1100 RENE-LEVESQUE BLVD. WEST",
      buildingName:"1100RLB"
    },
  ];
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
