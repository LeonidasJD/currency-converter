import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConvertService } from './converter/convert.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  state:string;

  constructor(private convertService:ConvertService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    this.convertService.onSendShowState.subscribe((value => {this.state = value}));

    if(this.state === 'inactive'){
      return true;
    }


    throw new Error('Method not implemented.')


  }
}
