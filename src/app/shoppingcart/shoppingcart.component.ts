// @ts-ignore
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
  this.getPrice()
}

  getPrice() {
    var i;
    for (i = 0; i < this.cart.length; i++) {
      var prijs = parseInt(this.cart[i].price);
      this.totaal = this.totaal += prijs;
      var hallo = this.totaal.toString();
      (<HTMLInputElement>document.getElementById("price")).innerText = "Totaal: €" + hallo
    }
  }

  removeFromCart(value: any) {
    let currentCart = JSON.parse(sessionStorage.getItem('cartItems') || '{}');
    currentCart.splice(value, 1);
    sessionStorage.setItem('cartItems', JSON.stringify(currentCart));
    location.reload();
  }

  continueShopping(){
    window.location.href = '/products';
  }

  continueToPayment(){
    window.location.href = '/information';
  }

}
