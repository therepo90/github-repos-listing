import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { sortBy } from 'lodash';
import { merge, Subscription } from 'rxjs';
import { RepositoryUI } from '../repositories/models/repository-ui';
import { UserService } from '../user/services/user.service';
import { RepositoriesPageService } from './services/repositories-page.service';

enum SORT_FIELD {
    NAME = 'name',
    FAV = 'fav',
    DESC = 'desc'
}

@Component({
    selector: 'app-repositories-page',
    templateUrl: './repositories-page.component.html',
    styleUrls: ['./repositories-page.component.scss']
})
export class RepositoriesPageComponent implements OnInit, OnDestroy {
    repos: RepositoryUI[] = [];
    searchText = new FormControl('');
    private DEFAULT_SORT_FIELD = SORT_FIELD.NAME;
    private allRepos: RepositoryUI[] = [];
    sortField = new FormControl(this.DEFAULT_SORT_FIELD);
    private subscription: Subscription;

    constructor(
        private service: RepositoriesPageService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.subscription = this.service
            .getRepositories()
            .subscribe((repos) => {
                this.allRepos = repos;
                this.repos = this.getVisibleRepos(repos);
            });
        merge(
            this.searchText.valueChanges,
            this.sortField.valueChanges
        ).subscribe(() => {
            this.repos = this.getVisibleRepos(this.allRepos);
        });
    }

    onFavClick(repo: RepositoryUI) {
        this.userService.toggleFavourite(repo);
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private sortRepos(
        repos: RepositoryUI[],
        sortField: SORT_FIELD
    ): RepositoryUI[] {
        return sortBy(
            repos,
            (repo) =>
                typeof repo[sortField] === 'boolean'
                    ? !repo[sortField]
                    : repo[sortField]
        );
    }

    private filterRepos(repos: RepositoryUI[], val: string) {
        if (val) {
            return repos.filter((repo) => repo.name.includes(val));
        } else {
            return repos;
        }
    }

    private getVisibleRepos(repos: RepositoryUI[]) {
        const filteredRepos = this.filterRepos(repos, this.searchText.value);
        return this.sortRepos(filteredRepos, this.sortField.value);
    }
}
