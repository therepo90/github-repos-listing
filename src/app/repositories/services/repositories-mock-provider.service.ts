import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Repository} from '../models/repository';
import {RepositoriesProviderService} from './repositories-provider.service';

@Injectable()
export class RepositoriesMockProviderService extends RepositoriesProviderService {

  getRepositories(): Observable<Repository[]> {
    return of([{
      link: 'http://something.com',
      imgUrl: 'assets/github.png',
      name: 'Repo1',
      desc: 'This repo contains very good code.',
    }]);
  }
}
