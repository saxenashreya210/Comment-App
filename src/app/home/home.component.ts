import { Component, OnInit } from '@angular/core';
import {UsersDataService} from '../services/users-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
users:any;
  constructor(private userData:UsersDataService) {
    this.userData.users().subscribe((data)=>{
      console.warn("data",data);
    })
   }

  ngOnInit(): void {
    
  }

}



