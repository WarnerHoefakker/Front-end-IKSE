import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  baseUrl = "http://localhost:8080";
  response: any;
  product: any;
  noData: any;
  public logo1: any;
  public logo2: any;
  public logo3: any;
  public logo4: any;
  public logo5: any;
  public logo6: any;
  public logo7: any;
  public logo8: any;
  public logo9: any;
  public logo10: any;
  public logo11: any;
  public logo12: any;

  
  constructor() {}

  ngOnInit(): void {
    if (sessionStorage.getItem('accessToken') === null){
      window.location.href = '/signin';
    }
    getProducts();
    // location.reload();
    // var data = sessionStorage.getItem('products');
    this.product = JSON.parse(sessionStorage.getItem('products') || '{}');
    // const obj = JSON.parse(data);
    // console.log(this.product[0].image);
    this.logo1 = this.product[0].image;
    this.logo2 = this.product[1].image;
    this.logo3 = this.product[2].image;
    this.logo4 = this.product[3].image;
    this.logo5 = this.product[4].image;
    this.logo6 = this.product[5].image;
    this.logo7 = this.product[6].image;
    this.logo8 = this.product[7].image;
    this.logo9 = this.product[8].image;
    this.logo10 = this.product[9].image;
    this.logo11 = this.product[10].image;
    this.logo12 = this.product[11].image;

    }

    addToCart(value: any) {
      var data = 0;
      const baseUrl = "http://localhost:8080";
      let accessToken = sessionStorage.getItem('accessToken');

      axios.get(baseUrl + '/api/products', {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': accessToken
        }
      })
      .then(function (response) {
        data = response.data[value];
        var id = response.data[value].id;
        let cart = [];
        cart.push(data);
        console.log(data);
        if (sessionStorage.getItem('cartItems') === null){
          sessionStorage.setItem('cartItems', JSON.stringify(cart));
        } else if (sessionStorage.getItem('cartItems') !== null) {
          let currentCart = JSON.parse(sessionStorage.getItem('cartItems') || '{}');
          
          for(var i = 0; i < 10; i++) {
                if (currentCart[i].id == value) {
                  console.log(currentCart[i].id);
                  console.log(id);
                } else {
                  let currentCart = JSON.parse(sessionStorage.getItem('cartItems') || '{}');
                  currentCart.push(data);
                  sessionStorage.setItem('cartItems', JSON.stringify(currentCart));
                }
            }
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }

  function getProducts() {
    var data = 0;
    const baseUrl = "http://localhost:8080";
    let accessToken = sessionStorage.getItem('accessToken');

    axios.get(baseUrl + '/api/products', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }
    })
    .then(function (response) {
      data = response.data;
      // console.log(response.data[0]);
      sessionStorage.setItem('products', JSON.stringify(response.data));
      return response.data[0];
    })
    .catch(function (error) {
      console.log(error);
    });

  }


