import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class UserService {
  private userLoggedin;

  constructor(private store:StorageService,private router:Router) {
    this.userLoggedin=false
}
setuserLoggedIn()
{ return  true;


}
getuserLoggedIn()
{
  return (this.store.getdata('isloggedin') === 'true');
}
}
