import {Injectable} from '@angular/core';
import {RepositoriesProviderService} from './repositories-provider.service';

@Injectable()
export class RepositoriesMockProviderService extends RepositoriesProviderService {

  getRepositories(userId: string): Array<any> {
    return [];
  }
}
