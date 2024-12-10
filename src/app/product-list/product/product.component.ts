import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '../../models/product.repository';
import { ProductListComponent } from '../product-list.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductComponent,CommonModule,ProductListComponent,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers:[ProductService]
})
export class ProductComponent implements OnInit{
product: Product | undefined; 
productRepository:ProductRepository

constructor(private route:ActivatedRoute,
  private productService:ProductService
){


}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["productId"];
     this.productService.getProductById(id).subscribe(result=>{
      this.product = {...result,id: id}
     })
    } );
  }





}
