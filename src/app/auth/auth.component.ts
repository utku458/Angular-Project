import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../models/auth-response';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  
})
export class AuthComponent {

  loading:boolean = false;
  error:string = "";

constructor(private authService:AuthService,private router:Router){

}


  isLoginMode : boolean = false;


  toggleMode(){

    this.isLoginMode = !this.isLoginMode
  }

  handleAuth(form: NgForm)
  {
      if(!form.valid){
        return;

      }

      this.loading = true;
      
        const email = form.value.email
        const password = form.value.password

        let authResponse: Observable<AuthResponse>

        if(this.isLoginMode){
          authResponse  = this.authService.login(email,password)
        }else{
          authResponse =  this.authService.register(email,password)
          
        }
      authResponse.subscribe({


        next: () => {

          
          this.loading = false;
          this.error = "";
        
          this.router.navigate(['/'])
         
        },
          
        error: (err) => {
          this.loading = false;
            this.error = err.error.error.message

         
        }
      
      })

     

  }
}
