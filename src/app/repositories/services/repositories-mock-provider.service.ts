import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Repository} from '../models/repository';
import {RepositoriesProviderService} from './repositories-provider.service';

@Injectable()
export class RepositoriesMockProviderService extends RepositoriesProviderService {

  getRepositories(userId: string): Observable<Repository[]> {
    return of([{
      link: 'http://something.com',
      fav: false,
      imgUrl: 'http://something.com/smth.png',
    }]);
  }
}
