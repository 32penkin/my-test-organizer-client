import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { authOptions } from './auth-options';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';
import { NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthJWTToken } from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: authOptions,
        },
      },
      forms: {},
    }),

  ],
  providers: [
    { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
  ],
  declarations: [
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
    };
  }
}
