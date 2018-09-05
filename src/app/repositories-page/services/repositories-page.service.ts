import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Repository} from '../../repositories/models/repository';
import {RepositoriesProviderService} from '../../repositories/services/repositories-provider.service';

@Injectable()
export class RepositoriesPageService {

  constructor(private provider: RepositoriesProviderService) { }

  getRepositories(userId: string): Observable<Repository[]> {
    return this.provider.getRepositories(userId);
  }
}
