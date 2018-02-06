import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: any = {};

  constructor(private http: HttpClient, private authService: NbAuthService) {
    // this.http.get('http://localhost:8080/auth/all').subscribe(data => {
    //   console.log(data);
    // });
    //
    // this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
    //   console.log(token);
    //   if (token.getValue()) {
    //     this.user = token.getPayload();
    //     console.log(this.user);
    //   }
    // });
  }
}
