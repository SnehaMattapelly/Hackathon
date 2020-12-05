import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gridApi:any;
    gridColumnApi:any;
    colDefs :any[]=[];
    rowData :any[]= [];
    cityData :any[]= [];
   
  constructor() { }

  ngOnInit(): void {
    this.getColdefs();

    this.cityData = [
      {id: 1, collegeName: 'TKR', cityName: 'Hyderabad', grade: 'A'},
      {id: 1, collegeName: 'MNR', cityName: 'Hyderabad', grade: 'B'},
      {id: 1, collegeName: 'SRM', cityName: 'Chennai', grade: 'A'},
      {id: 1, collegeName: 'VIT', cityName: 'Chennai', grade: 'A'},
      {id: 1, collegeName: 'Christ', cityName: 'Banglore', grade: 'A'},
      {id: 1, collegeName: 'VMW', cityName: 'Banglore', grade: 'A'}
  
    ];
  }

  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
}

getColdefs(){
   this.colDefs = [
    { field: 'id', headerName:'ID', width: 150 },
    { field: 'collegeName', headerName:'College Name', width: 150 },
    { field: 'cityName', headerName:'City Name', width: 150 },
    { field: 'grade', headerName:'Grade', width: 150 }
   ]
}
getRowdata(city:string){
  let cityList :any[]=[];

  console.log(city);
  this.cityData.forEach(data =>{
    if(city==data.cityName){
      cityList.push(data);
    }
  });
  this.rowData=cityList;
   
}

}
