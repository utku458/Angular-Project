import { Component, TrackByFunction } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { delay, pipe } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent,CommonModule,ProductListComponent,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers:[ProductService] 
})
export class ProductListComponent {

 products:Product[] = [];
 loading:boolean = false ; 
 selectedProduct:Product | null;
 productRepository:ProductRepository;
  constructor(private route:ActivatedRoute, 
    
    private productService:ProductService){
    this.productRepository = new ProductRepository();
    
  }

  ngOnInit():void{
    this.route.params.subscribe(params=>{
      this.loading = true;
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{

    
        
        this.products = data
        
       
        this.loading = false;

      })

  })

}
  
 

}
