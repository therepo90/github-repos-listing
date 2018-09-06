import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RepositoriesProviderService} from '../../repositories/services/repositories-provider.service';
import {map} from 'rxjs/operators';
import {Repository} from '../../repositories/models/repository';

@Injectable()
export class RepositoriesPageService {

  constructor(private provider: RepositoriesProviderService) {
  }

  // @TODO should be persistent and in User Module. Could be observable also.
  private favourites: {[key: string]: boolean} = {};

  getRepositories(userId: string): Observable<Repository[]> {
    return this.provider.getRepositories(userId);
  }

  toggleFavourite(repo: Repository) {
    this.favourites[repo.name] = !this.favourites[repo.name];
  }

  public isFav(repo): boolean {
    return Boolean(this.favourites[repo.name]);
  }
}
