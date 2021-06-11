import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'webshop';
  baseUrl = "http://localhost:8080";

  

  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit() {
    // console.log(this.baseUrl + '/api/auth/signup');

  }

}