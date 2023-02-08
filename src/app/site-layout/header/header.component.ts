import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/product/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchterm:any
  constructor(private ps:ProductserviceService){}
  ngOnInit():void{
}




  search(event:any){
    this.searchterm=event.target.value
    this.ps.searach.next(this.searchterm)
  
  }
}
