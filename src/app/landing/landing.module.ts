import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    ThemeModule,
    LandingRoutingModule,
  ],
  declarations: [
    LandingComponent,
  ],
})
export class LandingModule {
}
