import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RepositoriesGithubProviderService} from './services/repositories-github-provider.service';
import {RepositoriesProviderService} from './services/repositories-provider.service';

@NgModule({
  imports: [
    CommonModule
  ], declarations: []
})
export class RepositoriesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RepositoriesModule, providers: [
        {
          provide: RepositoriesProviderService, useClass: RepositoriesGithubProviderService,
        }
      ]
    };
  }
}
