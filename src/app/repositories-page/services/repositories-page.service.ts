import {Injectable} from '@angular/core';
import {RepositoriesProviderService} from '../../repositories/services/repositories-provider.service';

@Injectable()
export class RepositoriesPageService {

  constructor(private provider: RepositoriesProviderService) { }

  getRepositories(userId: string) {
    return this.provider.getRepositories(userId);
  }
}
