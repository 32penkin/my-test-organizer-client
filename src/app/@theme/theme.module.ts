import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

const NEBULAR_MODULES = [
  NbLayoutModule
];

const COMPONENTS = [
  AppLayoutComponent,
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...NEBULAR_MODULES,
  ],
  exports: [
    ...BASE_MODULES,
    ...NEBULAR_MODULES,
    ...COMPONENTS,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
    };
  }
}
