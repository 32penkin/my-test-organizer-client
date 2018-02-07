import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    // ThemeModule,
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
    ProfileComponent,
  ],
})
export class PagesModule {
}
