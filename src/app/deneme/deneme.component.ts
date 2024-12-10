import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-deneme',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './deneme.component.html',
  styleUrl: './deneme.component.css'
})
export class DenemeComponent  {
  isAuthenticated: boolean = false;
  isAdmin : boolean = false;

  constructor(private authService:AuthService){

  
  }

  logout(){
    this.authService.logout()
    console.log("logout calisti")
  }

  ngOnInit(): void {

    this.authService.user.subscribe(user=>{
      this.isAuthenticated = !!user

    this.isAdmin = user?.email == "altinayutku0@gmail.com";
     
   

    })
  }

  

  
}
