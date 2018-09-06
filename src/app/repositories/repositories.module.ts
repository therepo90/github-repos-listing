import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RepoComponent} from './repo/repo.component';
import {RepositoriesMockProviderService} from './services/repositories-mock-provider.service';
import {RepositoriesProviderService} from './services/repositories-provider.service';
import {RepositoriesGithubProviderService} from './github/services/repositories-github-provider.service';

@NgModule({
  imports: [
    CommonModule
  ], declarations: [RepoComponent], exports: [RepoComponent]
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
