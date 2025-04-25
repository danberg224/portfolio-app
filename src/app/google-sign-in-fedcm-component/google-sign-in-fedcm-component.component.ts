import { Component, OnInit } from '@angular/core';
import {GoogleAuthServiceService} from "../google-auth-service.service";


@Component({
  selector: 'app-google-sign-in-fedcm',
  template: '<div id="google-signin-button"></div>',
})
export class GoogleSignInFedcmComponent implements OnInit {
  constructor(private googleAuthService: GoogleAuthServiceService) {}

  ngOnInit(): void {
    this.googleAuthService.initialize();
    this.googleAuthService.googleButton('google-signin-button');

  }
}