import {Component, OnDestroy, OnInit} from '@angular/core';
import {merge, Observable, of, Subscription} from 'rxjs';
import {Repository} from '../repositories/models/repository';
import {RepositoriesPageService} from './services/repositories-page.service';
import {UserService} from '../user/services/user.service';
import {RepositoryUI} from '../repositories/models/repository-ui';
import {FormControl} from '@angular/forms';
import {combineAll, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-repositories-page',
  templateUrl: './repositories-page.component.html',
  styleUrls: ['./repositories-page.component.scss']
})
export class RepositoriesPageComponent implements OnInit, OnDestroy {
  repos: RepositoryUI[] = [];
  searchText = new FormControl('');
  sortField = new FormControl('name');
  private allRepos: RepositoryUI[] = [];
  private subscription: Subscription;

  constructor(private service: RepositoriesPageService, private userService: UserService) {
  }

  ngOnInit() {
    this.subscription = this.service.getRepositories().subscribe(
      repos => this.repos = this.allRepos = repos
    );
    const searchText$ = this.searchText.valueChanges;
    const sortField$ = this.sortField.valueChanges;
    searchText$.subscribe(val => {
      if (val) {
        this.repos = this.repos.filter(repo => repo.name.includes(val));
      } else {
        this.repos = this.allRepos;
      }
    });

    sortField$.subscribe(val => {
      
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

}
