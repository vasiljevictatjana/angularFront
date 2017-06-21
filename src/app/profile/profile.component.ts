import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from './Users';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    form;
    
   constructor(private router:Router, private user: UserService) {
    }

  ngOnInit(){
    this.form = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      cardNumber: new FormControl("")

    });

  };

  
  
  public log(event) {
    console.log(event);
  }

  onSubmit(user){
      console.log(user);
  }



Users : User[] = asd;
}


const asd : User[] = [  
    {
        "userId": 17,
        "firstName": "Tatjana",
        "lastName": "Vasiljevic",
        "telephone": "‎0616692238",
        "mail": "vasiljevictatjana@yahoo.com",
        "userPassword": "‎1234565",
        "userTypeId": 1,
        "genderId": 2,
        "dateOfBirth": "1994-06-21T00:00:00",
        "dateOfRegistration": "2017-06-01T00:00:00",
        "street": "Ratka Mitrovica",
        "city": "Beograd",
        "streetNumber": "34",
        "cardNumber": "‎123456789",
        "checked": false
    }
];