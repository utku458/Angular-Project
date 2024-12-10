import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DenemeComponent } from './deneme/deneme.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { CategoryListComponent } from "./category-list/category-list.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import {FormsModule, NgForm} from '@angular/forms'
import { NgModule }      from '@angular/core';
import { AuthService } from './services/auth.service';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DenemeComponent, CommonModule, ProductListComponent, ProductComponent, CategoryListComponent,CategoryListComponent,RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ProductService]
})
export class AppComponent implements OnInit{


  title = 'ng-app';

  constructor(private http: HttpClient,
    private produtService:ProductService,
    private authService:AuthService
  ){


  }
  ngOnInit(): void {
    
    this.authService.autoLogin();
  }


}




 