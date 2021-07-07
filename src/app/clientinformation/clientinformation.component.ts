import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientinformation',
  templateUrl: './clientinformation.component.html',
  styleUrls: ['./clientinformation.component.css']
})
export class ClientinformationComponent implements OnInit {
  title = 'webshop';
  baseUrl = "https://klectric-9up4r.ondigitalocean.app";
  informationForm = this.formBuilder.group({
    fname: '',
    lname: '',
    email: '',
    adr: '',
    city: '',
    zip: ''
  });

  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('accessToken') === null){
      window.location.href = '/signin';
    }
  }

  toPaymentProvider(){
    console.log(sessionStorage.getItem('price'));
    const baseUrl = "https://klectric-9up4r.ondigitalocean.app";
    let accessToken = sessionStorage.getItem('accessToken');

    axios.post(this.baseUrl + '/api/orders/', {
      "fname": this.informationForm.value.fname,
      "lname": this.informationForm.value.lname,
      "email": this.informationForm.value.email,
      "adr": this.informationForm.value.adr,
      "city": this.informationForm.value.city,
      "zip": this.informationForm.value.zip,
      "price": sessionStorage.getItem('price')

    },
    { headers: {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    }})
    .then(function (response) {
      alert("Bestelling is geplaatst!");
    })
    .catch(function (error) {
      console.log(error);
      alert("Bestelling is niet geplaatst");
    });
  }

  // clickMe(){
  //   axios.post(this.baseUrl + '/api/auth/signup', {
  //     "username": this.signinForm.value.name,
  //     "email": this.signinForm.value.email,
  //     "password": this.signinForm.value.password,
  //     "roles": ["user"]
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     window.location.href = '/signin';
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     alert("Attempt unsuccesful");
  //   });
  // }

  // admin(){
  //   axios.post(this.baseUrl + '/api/auth/signup', {
  //     "username": this.signinForm.value.name,
  //     "email": this.signinForm.value.email,
  //     "password": this.signinForm.value.password,
  //     "roles": ["moderator", "user", "admin"]
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     window.location.href = '/signin';
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     alert("Attempt unsuccesful");
  //   });
  // }

}