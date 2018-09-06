import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RepositoriesModule} from '../repositories/repositories.module';
import {RepositoriesPageComponent} from './repositories-page.component';
import {RepositoriesPageService} from './services/repositories-page.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, RepositoriesModule, ReactiveFormsModule
  ],
  declarations: [RepositoriesPageComponent],
  exports: [RepositoriesPageComponent],
  providers: [RepositoriesPageService],
})
export class RepositoriesPageModule {

}
