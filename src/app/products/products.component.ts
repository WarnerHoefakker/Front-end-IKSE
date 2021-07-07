import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  baseUrl = "https://klectric-9up4r.ondigitalocean.app";
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

    this.product = JSON.parse(sessionStorage.getItem('products') || '{}');

    // if (localStorage.getItem("products") === null) {
    //   window.location.href = '/home';
    // }

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
      const baseUrl = "https://klectric-9up4r.ondigitalocean.app";
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
        // console.log(data);
        if (sessionStorage.getItem('cartItems') === null){
          sessionStorage.setItem('cartItems', JSON.stringify(cart));
          (<HTMLInputElement>document.getElementById(value)).style.pointerEvents = "none";
          (<HTMLInputElement>document.getElementById(value)).style.backgroundColor = "grey";
          (<HTMLInputElement>document.getElementById(value)).style.border = "2px solid grey"; 
          location.reload();
        } else if (sessionStorage.getItem('cartItems') !== null) {

          (<HTMLInputElement>document.getElementById(value)).style.pointerEvents = "none";
          (<HTMLInputElement>document.getElementById(value)).style.backgroundColor = "grey";
          (<HTMLInputElement>document.getElementById(value)).style.border = "2px solid grey"; 

              let currentCart = JSON.parse(sessionStorage.getItem('cartItems') || '{}');
              currentCart.push(data);
              sessionStorage.setItem('cartItems', JSON.stringify(currentCart));
            }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }

  function getProducts() {
    var data = 0;
    const baseUrl = "https://klectric-9up4r.ondigitalocean.app";
    let accessToken = sessionStorage.getItem('accessToken');

    axios.get(baseUrl + '/api/products', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }
    })
    .then(function (response) {
      data = response.data;
      sessionStorage.setItem('products', JSON.stringify(response.data));
      return response.data[0];
    })
    .catch(function (error) {
      console.log(error);
    });

  }


