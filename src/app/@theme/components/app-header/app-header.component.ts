import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbUserMenuItem } from '@nebular/theme/components/user/user.component';

@Component({
  selector: 'app-header',
  template: `
              <nb-layout-header fixed>
                <nb-user *ngIf="user" [name]="user?.sub" [menu]="userMenuItems"></nb-user>
                <a class="right-link" *ngIf="!user" routerLink="/auth/login">Sign Up</a>
              </nb-layout-header>
  `,
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  user: any;
  userMenuItems: NbUserMenuItem[] = [
    {
      title: 'Profile',
      link: '',
    },
    {
      title: 'Logout',
      link: '/auth/logout'
    },
    {
      title: 'Some title',
      link: ''
    },
  ];

  constructor(private authService: NbAuthService) {}

  ngOnInit() {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.getValue()) {
        this.user = token.getPayload();
      }
    });
  }
}
