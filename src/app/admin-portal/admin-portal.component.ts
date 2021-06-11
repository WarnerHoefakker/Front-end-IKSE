import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  changeProductForm = this.formBuilder.group({
    id: '',
    name: '',
    description: '',
    price: '',
    image: ''
  });

  addProductForm = this.formBuilder.group({
    id: '',
    name: '',
    description: '',
    price: '',
    image: ''
  });

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

  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

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
  
  // (<HTMLInputElement>document.getElementById("name")).value

  deleteProduct(value: any) {
    if (confirm('Weet je zeker dat je dit product wilt verwijderen?')) {
      let accessToken = sessionStorage.getItem('accessToken');
      // console.log(this.baseUrl + '/api/products/' + value);

      axios.delete(this.baseUrl + '/api/products/' + value, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': accessToken
        }
      })
      .then(function (response) {
        console.log(response);
        alert("Het item is succesvol verwijderd");
      })
      .catch(function (error) {
        console.log(error);
        alert("Attempt to delete was unsuccesful");
      });

    }    
  }

  editProduct() {
    const baseUrl = "http://localhost:8080";
    let accessToken = sessionStorage.getItem('accessToken');
    let number = parseInt(this.changeProductForm.value.price);
    console.log(number);

    if (confirm('Weet je zeker dat je dit product wilt aanpassen?')) {
    axios.put(baseUrl + '/api/products/' + this.changeProductForm.value.id, {
        "title": this.changeProductForm.value.name,
        "description": this.changeProductForm.value.description,
        "price": number,
        "image": this.changeProductForm.value.image
      }, { headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }})
    .then(function (response) {
      console.log(response);
      alert("Het bijwerken van het product is geslaagd!");
    })
    .catch(function (error) {
      alert("De poging om het product bij te werken is niet gelukt.");
    });
  }
  }

  addProduct() {
    const baseUrl = "http://localhost:8080";
    let accessToken = sessionStorage.getItem('accessToken');
    let number = parseInt(this.addProductForm.value.price);

    if (confirm('Weet je zeker dat je dit product wilt toevoegen?')) {
      axios.post(baseUrl + '/api/products', {
        "title": this.addProductForm.value.name,
        "description": this.addProductForm.value.description,
        "price": number,
        "image": this.addProductForm.value.image
      }, { headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }})
    .then(function (response) {
      alert("Het toevoegen van het product is gelukt!");
    })
    .catch(function (error) {
      alert("De poging om het product toe te voegen is niet gelukt.");
    });
  }

  }

  deleteAllProduct() {
    const baseUrl = "http://localhost:8080";
    let accessToken = sessionStorage.getItem('accessToken');
    let number = parseInt(this.addProductForm.value.price);

    if (confirm('Weet je zeker dat je alle producten wilt verwijderen?')) {
      axios.delete(baseUrl + '/api/products/', 
      { headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }})
    .then(function (response) {
      alert("Het verwijderen van alle producten is gelukt!");
    })
    .catch(function (error) {
      alert("De poging om alle producten te verwijderen is niet gelukt.");
    });
  }

  }

  openForm() {
    (<HTMLInputElement>document.getElementById("myForm")).style.display = "block";
  }
    
  closeForm() {
    (<HTMLInputElement>document.getElementById("myForm")).style.display = "none";
  }

  openAddForm() {
    (<HTMLInputElement>document.getElementById("addForm")).style.display = "block";
  }
    
  closeAddForm() {
    (<HTMLInputElement>document.getElementById("addForm")).style.display = "none";
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
      return response.data;
    })
    .catch(function (error) {
      window.location.href = '/products';
    });

  }

  


