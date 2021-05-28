import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'webshop';
  baseUrl = "http://localhost:8080";
  signinForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  });

  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.baseUrl + '/api/auth/signup');
  }

  

  clickMe(){
    axios.post(this.baseUrl + '/api/auth/signup', {
      "username": this.signinForm.value.name,
      "email": this.signinForm.value.email,
      "password": this.signinForm.value.password,
      "roles": ["moderator", "user", "admin"]
    })
    .then(function (response) {
      console.log(response);
      alert("Succesfully logged in!");
    })
    .catch(function (error) {
      console.log(error);
      alert("Attempt unsuccesful");
    });
  }
}