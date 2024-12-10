import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable,exhaustMap,map, take, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class ProductService{


    private url = 'https://ng-shopapp-212ae-default-rtdb.firebaseio.com/'
   

    constructor(private http:HttpClient,private authService:AuthService){
       
    }

    getProducts(categoryId:number) : Observable<Product[]>{

       return this.http
       .get<Product[]>(this.url+ "products.json")
       .pipe(
        map(result => {
            const product : Product[]= [];

            for(const key in result){
                if(categoryId){
                        if(categoryId == result[key].categoryId){
                            product.push({...result[key] , id:key}) 
                        }
                }
                else{
                    product.push({...result[key] , id:key}) 
                }
                
               
              }
            return product
        })
       );
    }
    getProductById(id:String):Observable<Product>{
        return this.http.get<Product>(this.url+ "products/" + id + ".json")
    }
    createProducts(product:Product):Observable<Product>{


        return this.authService.user.pipe(
            take(1),
            tap( user =>{
                
            }),exhaustMap(user=>{
                return this.http.post<Product>(this.url+ "products.json?auth=" + user?.token,product);

            })
        )

        
    }

}