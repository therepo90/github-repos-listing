import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../../models/repository';
import { RepositoriesProviderService } from '../../services/repositories-provider.service';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../../endpoints/endpoints';
import { map } from 'rxjs/operators';
import { RepositoryGithub } from '../models/repository-github';

@Injectable()
export class RepositoriesGithubProviderService extends RepositoriesProviderService {
    constructor(private httpClient: HttpClient) {
        super();
    }

    getRepositories(): Observable<Repository[]> {
        return this.httpClient
            .get<RepositoryGithub[]>(endpoints.repos)
            .pipe(map((repos) => repos.map(this.toRepository)));
    }

    private toRepository = (repoGH: RepositoryGithub): Repository => {
        return {
            name: repoGH.name,
            link: repoGH.html_url,
            desc: repoGH.description,
            imgUrl: 'assets/github.png'
        };
    };
}
