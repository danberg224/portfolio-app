import { Injectable, NgZone } from '@angular/core';
import { jwtDecode } from 'jwt-decode'; // npm install jwt-decode

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthServiceService {

  constructor(private ngZone: NgZone) { 
  }

  initialize(): void {
    google.accounts.id.initialize({
      client_id: '557879449612-ovo7s6nlvrqaackqu2l4jm64nkurhg0m.apps.googleusercontent.com', // Replace with your Client ID
      callback: (response: any) => this.handleCredentialResponse(response),
      //use_fedcm_for_prompt: true, // Explicitly enable FedCM for One Tap
      scope: 'openid profile email', // Ensure 'openid' is included
    });
  }
  prompt(): void {
    var token = this.getToken();
    if (this.isTokenExpired(this.getToken())){
      google.accounts.id.prompt(); // Optional: To show the One Tap prompt
    }
  }

  googleButton(id: string): void {
    google.accounts.id.renderButton(
      document.getElementById(id),
      {
        theme: 'outline',
        size: 'large',
        use_fedcm_for_button: true, // Explicitly enable FedCM for the button flow
      }
    );
  }
  isTokenExpired(token: string): boolean {
    if (token == ""){
      return true;
    }
    try {
      const decoded: any = jwtDecode(token);
      const exp = decoded.exp; // UNIX timestamp (in seconds)
      const now = Math.floor(Date.now() / 1000); // current time in seconds
  
      return exp < now;
    } catch (e) {
      console.error('Failed to decode token:', e);
      return true; // treat as expired if invalid
    }
  }
  getToken(): string {
    return localStorage.getItem('google_id_token') || "";
  }

  handleCredentialResponse(response: any): void {
    console.log('Google Sign-In Response:', response);
    const token = response.credential;
    const decodedToken: any = jwtDecode(token);
    console.log('Decoded Token:', decodedToken);
    localStorage.setItem('google_id_token', token);

    // Send the ID token to your .NET Web API for verification
    // Example using Angular HttpClient:
    // this.http.post('YOUR_BACKEND_API_ENDPOINT/auth/google', { token })
    //   .subscribe({
    //     next: (res) => {
    //       this.ngZone.run(() => {
    //         // Handle successful authentication
    //       });
    //     },
    //     error: (err) => {
    //       console.error('Google Sign-In Error:', err);
    //     },
    //   });
  }
}
