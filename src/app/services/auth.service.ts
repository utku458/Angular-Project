import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localStorage : Storage
  api_key  = "Api key";
  user = new BehaviorSubject<User|null>(null);
  
  constructor(private http:HttpClient) { }



  register(email:string , password:string){


   return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key,{

      email: email,
      password: password,
      returnSecureToken:true
    }).pipe(
      tap(response=>{ 
        //observagle subject

        this.handleUser(response.email, response.localId, response.idToken,response.expiresIn)
      })
    );

  }

  login(email:string , password:string){

    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+ this.api_key,{
      email: email,
      password: password,
      returnSecureToken:true
    }).pipe(
      tap(response=>{
        //observagle subject

        this.handleUser(response.email, response.localId, response.idToken,response.expiresIn)
    
        
      })
    );
  }

  logout(){ 
    this.user.next(null);
    localStorage.removeItem("user")
  }

  autoLogin(){

    if(localStorage.getItem("user") == null  ){
      return;
    }
    
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const loadedUser = new User(user.email,user.id,user._token , new Date(user.expirationDate))
      if(loadedUser.token){
        this.user.next(loadedUser)
      }
      
  }


  private handleUser(email:string , localId:string , idToken:string , expiresIn:string){
    const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000)) 
    const user = new User(
      email,
      localId,
      idToken,
      expirationDate
    );
    console.log(user)
    
    this.user.next(user);

    localStorage.setItem("user", JSON.stringify(user) );
  }
} 
  
