import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map, tap } from "rxjs";
import { Router } from '@angular/router';


@Injectable({providedIn :'root'})
export class AdminGuard implements CanActivate{
    constructor(private authService:AuthService,
        private router:Router
    ){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        

        return this.authService.user.pipe(
            map(user =>{
                return !!user && user.email == "altinayutku0@gmail.com" 
            }),
            tap(isAdmin =>{
                if(!isAdmin){
                        this.router.navigate(['/auth'])
                }
            })
        )
        
    }

}