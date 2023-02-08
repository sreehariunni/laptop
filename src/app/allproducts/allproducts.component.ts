import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

  constructor(private router:Router) {}
  
  buy(){
    alert('You are redirecting to store')
    this.router.navigateByUrl('product')
  }

}
