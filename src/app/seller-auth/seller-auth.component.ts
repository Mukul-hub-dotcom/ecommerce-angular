import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  showLogin=false
  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
  login(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
  openLogin(){
    this.showLogin=true
  }
  openSignup(){
    this.showLogin=false
  }
}
