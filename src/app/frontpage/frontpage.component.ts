import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  title = 'webshop';
  baseUrl = "https://klectric-9up4r.ondigitalocean.app";
  signinForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  });

  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.baseUrl + '/api/auth/signup');
  }

  clickMe(){
      window.location.href = '/signin';
  }


}