import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {RepositoriesProviderService} from '../../repositories/services/repositories-provider.service';
import {map} from 'rxjs/operators';
import {Repository} from '../../repositories/models/repository';
import {RepositoryUI} from '../../repositories/models/repository-ui';
import {UserService} from '../../user/services/user.service';

@Injectable()
export class RepositoriesPageService {

  constructor(private provider: RepositoriesProviderService, private userService: UserService) {
  }

  getRepositories(): Observable<RepositoryUI[]> {
    return combineLatest(this.provider.getRepositories(), this.userService.favourites$)
      .pipe(map(([repos, favs]) => repos.map(repo => ({
        ...repo,
        fav: favs[repo.name]
      }))));
  }
}
