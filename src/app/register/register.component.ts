import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {   
  }


  addUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var firstName = e.target.elements[0].value;
  	var lastName = e.target.elements[1].value;
    var username = e.target.elements[2].value;
    var password = e.target.elements[3].value;
  	
    console.log(firstName +" " + lastName + " " + username + " " + password);

  	// if(username == 'admin' && password == 'admin') {
    //   // console.log(username);
    //   this.user.setUserLoggedIn();
  	// 	this.router.navigate(['home']);
  	// }
  }

}
