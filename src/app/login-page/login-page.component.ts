import { StorageService } from './../storage.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageSync, StorageStrategy } from 'angular2-storage-sync';
//import swal from 'sweetalert2';
//import 'sweetalert2/dist/sweetalert2.css';
declare var swal:any, _:any;

//import {UserService} from '../user.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {



  constructor(private router: Router, private user: UserService, private store: StorageService) { }

  ngOnInit() {

  }


 public info = {
   username:'',
   Password:''
};

  getInfo() {



     if (this.info.username && this.info.Password) {
      this.user.setuserLoggedIn();
      console.log(this.info.username + ":" + this.info.Password);
       this.router.navigate(['dashboard']);
       this.store.setData('username', this.info.username);
       this.store.setData('password', this.info.Password);
       this.store.setData('isloggedin', true);
    }

    else {
    //  console.log("12345")
     // var swal: any;
if(this.router.navigate['/dashboard'])
    {
      this.router.navigate['/login'];
    }
 else{     swal({
  title: 'Error',
  text: 'Please Fill out the empty Fields',
  type: 'error',
  showCancelButton: true

}).catch(swal.noop);


 }
    // swal('this is an alert pop up ');
    }
    return false;

  }





}
