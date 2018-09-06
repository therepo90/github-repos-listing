import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from './services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserModule, providers: [UserService]
    };
  }

}
