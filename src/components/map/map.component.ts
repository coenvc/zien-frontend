import { Component, OnInit } from '@angular/core';
import {Location} from '../../models/Location'; 
import {School} from '../../models/School'; 
import { SchoolService } from 'app/database/school.dataservice';

@Component({
  selector: 'gmap',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
}) 
export class MapComponent implements OnInit { 
  zoom: number = 100;
  lat: number = 51.678418;
  lng: number = 7.809007; 
  


  Schools: School[] =[
    {
      city: "Tilburg",
      country: "The Netherlands",
      email: "info@fontys.nl",
      houseNumber: "1",
      location: { latitude: 51.538429,
      longitude:5.079914},
      name:"Fontys - Campus Stappegoor",
      phoneNumber: "088 508 0000",
      street: "Professor Goossenslaan",
      url: "https://fontys.nl/"
    }]


  constructor(private SchoolDataService:SchoolService) { 
    // this.SchoolDataService.getAll().subscribe(result => {this.Schools = result, console.log(this.Schools)});
  }

  ngOnInit() {
    
  }

}
