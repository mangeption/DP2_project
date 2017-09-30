import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [
    {path: '', redirectTo: './products/products', pathMatch: 'full'},
    {path: 'add-product/add-product', component: AddProductComponent},
    {path: 'list-products/list-products', component: ListProductsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}