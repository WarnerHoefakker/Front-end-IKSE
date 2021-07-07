import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  title = 'webshop';
  baseUrl = "https://klectric-9up4r.ondigitalocean.app";
  signinForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  });

  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  clickMe(){
    axios.post(this.baseUrl + '/api/auth/signin', {
      "username": this.signinForm.value.name,
      "password": this.signinForm.value.password,
      "roles": ["moderator", "user", "admin"]
    })
    .then(function (response) {
      console.log(response);
      sessionStorage.setItem('accessToken', response.data.accessToken);
      window.location.href = '/products';
    })
    .catch(function (error) {
      console.log(error);
      alert("Attempt unsuccesful");
    });
  }


}