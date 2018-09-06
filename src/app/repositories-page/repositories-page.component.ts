import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Repository} from '../repositories/models/repository';
import {RepositoriesPageService} from './services/repositories-page.service';
import {UserService} from '../user/services/user.service';
import {RepositoryUI} from '../repositories/models/repository-ui';

@Component({
  selector: 'app-repositories-page',
  templateUrl: './repositories-page.component.html',
  styleUrls: ['./repositories-page.component.scss']
})
export class RepositoriesPageComponent implements OnInit {
  public repos$: Observable<RepositoryUI[]> = of([]);
  constructor(private service: RepositoriesPageService, private userService: UserService) { }

  ngOnInit() {
    this.repos$ = this.service.getRepositories();
  }

  onFavClick(repo: RepositoryUI) {
    this.userService.toggleFavourite(repo);
  }

}
