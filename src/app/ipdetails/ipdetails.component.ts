import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
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
const ipdatas:ipData[]=[
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
    buildingName:"1100RLC"
  },
  {
    id:"2",
    region:"US and LatAm",
    countryName:"INDIA",
    cityName:"MONTREAL",
    seatCapacity:33,
    userOccupancy:42,
    ipsubnet:"10.150.228.182/29 10.157.160.0/24 10.157.162.0/23 10.158.237.0/24 10.146.156.0/23",
    dhcpserver:"206.245.43.16 206.245.17.74",
    dhcpserverHostname:"usilch03adncc02.corp.capgemini.com ca  mcginpvw08.corp.capgemini.com",
    supportGroup:"Group IT",
    areaName:"1100 RENE-LEVESQUE BLVD. WEST",
    buildingName:"SELVA"
  },
  {
    id:"31",
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
    buildingName:"1100RLC"
  },
  {
    id:"32",
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
    buildingName:"SELVA"
  },
  {
    id:"21",
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
    buildingName:"1100RLC"
  },
  {
    id:"22",
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
    buildingName:"SELVA"
  },

  {
    id:"11",
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
    buildingName:"1100RLC"
  },
  {
    id:"12",
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
    buildingName:"SELVA"
  },

  {
    id:"9",
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
    buildingName:"1100RLC"
  },
  {
    id:"8",
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
    buildingName:"SELVA"
  },
  {
    id:"3",
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
    buildingName:"1100RLC"
  },
  {
    id:"4",
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
    buildingName:"SELVA"
  },
  {
    id:"5",
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
    buildingName:"1100RLC"
  },
  {
    id:"6",
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
    buildingName:"SELVA"
  },
];
@Component({
  selector: 'app-ipdetails',
  templateUrl: './ipdetails.component.html',
  styleUrls: ['./ipdetails.component.scss']
})
export class IpdetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'region', 'countryName', 'cityName','seatCapacity',  'userOccupancy', 'ipsubnet','dhcpserver', 'dhcpserverHostname','supportGroup', 'areaName', 'buildingName'];
  dataSource = new MatTableDataSource(ipdatas);
  idFilter = new FormControl();
  regionFilter = new FormControl();
  countryNameFilter = new FormControl();
  cityNameFilter = new FormControl();
  seatCapacityFilter = new FormControl();
  userOccupancyFilter = new FormControl();
  ipsubnetFilter = new FormControl();
  dhcpserverFilter = new FormControl();
  dhcpserverHostnameFilter = new FormControl();
  supportGroupFilter = new FormControl();
  areaNameFilter = new FormControl();
  buildingNameFilter = new FormControl();

  globalFilter = '';

  filteredValues = {
    id: '', region: '', countryName: '',cityName: '',seatCapacity:'',userOccupancy:'',ipsubnet:'',dhcpserver:'',dhcpserverHostname:'',supportGroup:'',areaName:'',buildingName:''
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {
    
   }
  
  ngOnInit() {

    this.columnfilter('id',this.idFilter);
    this.columnfilter('region',this.regionFilter);
    this.columnfilter('countryName',this.countryNameFilter);
    this.columnfilter('cityName',this.cityNameFilter);
    this.columnfilter('seatCapacity',this.seatCapacityFilter);
    this.columnfilter('userOccupancy',this.userOccupancyFilter);
    this.columnfilter('ipsubnet',this.ipsubnetFilter);
    this.columnfilter('dhcpserver',this.dhcpserverFilter);
    this.columnfilter('dhcpserverHostname',this.dhcpserverHostnameFilter);
    this.columnfilter('supportGroup',this.supportGroupFilter);
    this.columnfilter('areaName',this.areaNameFilter);
    this.columnfilter('buildingName',this.buildingNameFilter);



    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  columnfilter(colname:string,filter:FormControl){
    filter.valueChanges.subscribe((positionFilterValue) => {
      this.filteredValues[colname] = positionFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
  }
  applyFilter(filterValue: string) {
    console.log( this.dataSource)
        this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  customFilterPredicate() {
    const myFilterPredicate = (data: ipData, filter: string): boolean => {
      var globalMatch = !this.globalFilter;

      if (this.globalFilter) {
        // search all text fields
        globalMatch = data.id.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
      }

      if (!globalMatch) {
        return;
      }

      let searchString = JSON.parse(filter);
      return data.id.toString().trim().indexOf(searchString.id) !== -1 &&
        data.region.toString().trim().toLowerCase().indexOf(searchString.region.toLowerCase()) !== -1 &&
        data.countryName.toString().trim().toLowerCase().indexOf(searchString.countryName.toLowerCase()) !== -1 &&
        data.cityName.toString().trim().toLowerCase().indexOf(searchString.cityName.toLowerCase()) !== -1 &&
        data.seatCapacity.toString().trim().toLowerCase().indexOf(searchString.seatCapacity.toLowerCase()) !== -1 &&
        data.userOccupancy.toString().trim().toLowerCase().indexOf(searchString.userOccupancy.toLowerCase()) !== -1 &&
        data.ipsubnet.toString().trim().toLowerCase().indexOf(searchString.ipsubnet.toLowerCase()) !== -1&&
        data.dhcpserver.toString().trim().toLowerCase().indexOf(searchString.dhcpserver.toLowerCase()) !== -1 &&
        data.dhcpserverHostname.toString().trim().toLowerCase().indexOf(searchString.dhcpserverHostname.toLowerCase()) !== -1 &&
        data.supportGroup.toString().trim().toLowerCase().indexOf(searchString.supportGroup.toLowerCase()) !== -1&&
        data.areaName.toString().trim().toLowerCase().indexOf(searchString.areaName.toLowerCase()) !== -1 &&
        data.buildingName.toString().trim().toLowerCase().indexOf(searchString.buildingName.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }
}

