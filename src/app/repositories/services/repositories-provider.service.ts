import {Injectable} from '@angular/core';

@Injectable()
export abstract class RepositoriesProviderService {

  constructor() { }

  abstract getRepositories(userId: string): Array<any>;
}
