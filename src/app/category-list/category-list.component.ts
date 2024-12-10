import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
  providers:[CategoryService]
})
export class CategoryListComponent implements OnInit {
categories:Category[];
selectedCategory : Category | null;
categortyRepository:CategoryRepository;
displayAll:boolean
constructor(private categoryService:CategoryService){
 
  
}
  ngOnInit(): void {
   this.categoryService.getCategories().subscribe(data=>{
    this.categories = data
    
   })
  }

  

  selectCategory(category? : Category){
    if(category){
      this.displayAll = false
      this.selectedCategory = category;
      
    }else{
     
      this.selectedCategory = null
      this.displayAll = true;
      
    }
    
  }

  
}
 