import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cart: any;
  totaal = 0;
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

  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('accessToken') === null){
      window.location.href = '/signin';
    }
  this.cart = JSON.parse(sessionStorage.getItem('cartItems') || '{}');
  console.log(this.cart);

  // for (var e = 0; 12 > e > this.cart.length; e++) {
  // var getal = e.toString();
  // var div = (<HTMLInputElement>document.getElementById(getal));
  // console.log(this.cart.length);
  // div.style.display = 'none';
  // // div.style.removeAttribute = '-10px';
  // }

  this.logo1 = this.cart[0].image;
  this.logo2 = this.cart[1].image;
  // this.logo3 = this.cart[2].image;
  // this.logo4 = this.cart[3].image;
  // this.logo5 = this.cart[4].image;
  // this.logo6 = this.cart[5].image;
  // this.logo7 = this.cart[6].image;
  // this.logo8 = this.cart[7].image;
  // this.logo9 = this.cart[8].image;
  // this.logo10 = this.cart[9].image;
  // this.logo11 = this.cart[10].image;
  // this.logo12 = this.cart[11].image;

  var i;
  for (i = 0; i < this.cart.length; i++) {
    var prijs = parseInt(this.cart[i].price);
    this.totaal = this.totaal += prijs;
  }

}

  removeFromCart(value: any) {
    let currentCart = JSON.parse(sessionStorage.getItem('cartItems') || '{}');
    var index = currentCart.findIndex(function(o: any){
      return o.id === value;
    })
    if (index !== -1) currentCart.splice(index, 1);
    sessionStorage.setItem('cartItems', JSON.stringify(currentCart));
    location.reload();
  }

  continueShopping(){
    window.location.href = '/products';
  }

}
