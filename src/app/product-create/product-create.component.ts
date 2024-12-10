import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
  providers:[CategoryService]
})
export class ProductCreateComponent implements OnInit {
categories: Category[] = [];


error:string;
model:any = {

 
  categoryId: "0"
  
};

ngOnInit(): void {
  this.categoryService.getCategories().subscribe(data=>{

    this.categories = data

  })
}

constructor(private productService:ProductService,private router:Router,private categoryService:CategoryService){

}


saveProduct(form:NgForm){

/*


  name:any,price:any,imageUrl:any,description:any,isActive:any,categoryId:any
  if(name.value == "" || name.value.lenght < 5){

    console.log("urun ismi icin en az 5 karakter girmen lazim")

    return;

  }

  if(price.value == ""){

    console.log("fiyat  icin en az 5 karakter girmen lazim")

    return;

  }
*/


    const product =  {
      id : 1,
      name : this.model.name,
      price : this.model.price,
      isActive: this.model.isActive,
      imageUrl: this.model.imageUrl,
      description: this.model.description,
      categoryId: this.model.categoryId
    }



    if(form.valid){
      this.productService.createProducts(product).subscribe(data => this.router.navigate(['/products']));
    }else{
      this.error = " formu kontrol ediniz"
    }
   

  


    console.log(this.model)
}

}
