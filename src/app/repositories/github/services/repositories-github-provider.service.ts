import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Repository} from '../../models/repository';
import {RepositoriesProviderService} from '../../services/repositories-provider.service';

@Injectable()
export class RepositoriesGithubProviderService extends RepositoriesProviderService {
  getRepositories(userId: string): Observable<Repository[]> {
    return of([]);
  }

}
