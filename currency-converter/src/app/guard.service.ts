import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConvertService } from './converter/convert.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  state:boolean;

  constructor(private convertService:ConvertService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


    if(this.state === false){
      return true;
    }else{
      this.router.navigate(['/home']);
    }

    throw new Error('Method not implemented.');
  }
}
