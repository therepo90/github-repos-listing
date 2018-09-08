import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository';

@Injectable()
export abstract class RepositoriesProviderService {
    constructor() {}

    abstract getRepositories(): Observable<Repository[]>;
}
