import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from './Users';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    form;
    packageName = "";


    users;
   constructor(private router:Router, private user: UserService) {

     this.users = [];
    }

  ngOnInit(){
    this.form = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      cardNumber: new FormControl("")

    });

   
  };

   onChange(user){
      if(user.checked){
        user.checked = false;
        this.removeItem(this.users, user);
      }
      else{
        user.checked = true;
        this.users.push(user);
      }
      
  }
  
  public log(event) {
    console.log(event);
  }

  onSubmit(user){
      debugger;
      console.log(user);
  }

  removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
        }
    }
  }


  makePackage(text){
    // this.users.push(user);
    console.log(this.packageName);
  }


  Users : User[] = asd;
//  link: string;
  

  
//   createRoute(e) {
//   	e.preventDefault();
  
//       var name = e.path[4];
//       	console.log(name);
//   	// var username = e.target.elements[0].value;
//   	// var password = e.target.elements[1].value;
  	
//   	// if(username == 'admin' && password == 'admin') {
//     //   // console.log(username);
//     //   this.user.setUserLoggedIn();
//   	// 	this.router.navigate(['home']);
//   	// }
//   }



}


const asd : User[] = [
    {
        "userId": 1,
        "firstName": "asd",
        "lastName": "asd",
        "telephone": "123",
        "mail": "asd@1asd",
        "userPassword": "123",
        "userTypeId": 7,
        "genderId": 1,
        "dateOfBirth": "2001-05-31T00:00:00",
        "dateOfRegistration": "2017-05-31T01:05:04.053",
        "street": "sad",
        "city": "asd",
        "streetNumber": "12",
        "cardNumber": "‎12332112",
        "checked": false
       
    },
    {
        "userId": 14,
        "firstName": "assssd",
        "lastName": "assssssd",
        "telephone": "123",
        "mail": "asd@1ashd",
        "userPassword": "123",
        "userTypeId": 7,
        "genderId": 1,
        "dateOfBirth": "2001-05-31T00:00:00",
        "dateOfRegistration": "2017-05-31T01:56:07.887",
        "street": "sad",
        "city": "asd",
        "streetNumber": "12",
        "cardNumber": "‎123321122",
        "checked": false
    },
    {
        "userId": 16,
        "firstName": "asdfsdsd",
        "lastName": "asdfsdfsd",
        "telephone": "123",
        "mail": "asd@1ashdf",
        "userPassword": "123",
        "userTypeId": 7,
        "genderId": 1,
        "dateOfBirth": "2001-05-31T00:00:00",
        "dateOfRegistration": "2017-06-07T09:40:58.007",
        "street": "sad",
        "city": "asd",
        "streetNumber": "12",
        "cardNumber": "‎123328822",
        "checked": false
    },
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


// export class HomeComponent {
//   public searchResults: Array<SearchResultModel>;
  
//   constructor(data:DataService) {
//     this.searchResults = data.services;
//   }
// }

// import { Component } from '@angular/core';
// import { DataService } from '../data.service';

// export class HomeComponent {
//   public searchResults;
  
//   constructor(data:DataService) {
//     this.searchResults = data.services;
//   }
// }