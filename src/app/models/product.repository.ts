import {Product} from "./product"

export class ProductRepository {
    products: Product[] = [
        {
          id : 1,
          name : "Iphone 15",
          price : 20000,
          isActive: true,
          imageUrl: "1.jpeg",
          description: "lorem ipsum dolor sit amet",
          categoryId: 1
        },
    
        {
          id : 2,
          name : "Iphone 16",
          price : 30000,
          isActive: true,
          imageUrl: "2.jpeg",
          description: "lorem ipsum dolor sit amet",
          categoryId: 1
        }
,
        {
          id : 3,
          name : "Iphone 16",
          price : 30000,
          isActive: true,
          imageUrl: "2.jpeg",
          description: "lorem ipsum dolor sit amet",
          categoryId: 1
        }
,
        {
          id : 4,
          name : "Iphone 16",
          price : 30000,
          isActive: true,
          imageUrl: "2.jpeg",
          description: "lorem ipsum dolor sit amet",
          categoryId: 2
        }
,
        {
          id : 5,
          name : "Iphone 16",
          price : 30000,
          isActive: true,
          imageUrl: "2.jpeg",
          description: "lorem ipsum dolor sit amet",
          categoryId: 2
        }
    
      ];


      
  getProducts(){
    return this.products.filter(p=>p.isActive)
  }

    getProductById(id:number){
        return this.products.find(p=> p.id == id);
      }

      getProductsByCategoryId(id:number):Product[]{
        return this.products.filter(p=>p.categoryId == id)
      }
}