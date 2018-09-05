import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RepositoriesModule} from '../repositories/repositories.module';
import {RepositoriesPageComponent} from './repositories-page.component';
import {RepositoriesPageService} from './services/repositories-page.service';

@NgModule({
  imports: [
    CommonModule, RepositoriesModule,
  ],
  declarations: [RepositoriesPageComponent],
  exports: [RepositoriesPageComponent],
  providers: [RepositoriesPageService],
})
export class RepositoriesPageModule {

}
