import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Repository} from '../repositories/models/repository';
import {RepositoriesPageService} from './services/repositories-page.service';

@Component({
  selector: 'app-repositories-page',
  templateUrl: './repositories-page.component.html',
  styleUrls: ['./repositories-page.component.scss']
})
export class RepositoriesPageComponent implements OnInit {
  public repos$: Observable<Repository[]> = of([]);
  private userId =  '5'; // @TODO
  constructor(private service: RepositoriesPageService) { }

  ngOnInit() {
    this.repos$ = this.service.getRepositories(this.userId);
  }

  onFavClick(repo: Repository) {
    this.service.toggleFavourite(repo);
  }

  public isFav(repo): boolean {
    return this.service.isFav(repo);
  }
}
