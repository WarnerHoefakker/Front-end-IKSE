import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  baseUrl = "http://localhost:8080";

  constructor() { }

  ngOnInit(): void {
    let accessToken = sessionStorage.getItem('accessToken');

    axios.get(this.baseUrl + '/api/products', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }
    })
    .then(function (response) {
      console.log(response);
      response.toString();
      // alert(response);
    })
    .catch(function (error) {
      console.log(error);
      // alert("Attempt unsuccesful");
    });
  }

}
