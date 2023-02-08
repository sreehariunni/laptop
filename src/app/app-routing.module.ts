import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  {path:'',component:FrontpageComponent},
  {path:'allproducts',component:AllproductsComponent},
  {path:'contactus',component:ContactusComponent},
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}


