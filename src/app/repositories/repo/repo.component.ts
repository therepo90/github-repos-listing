import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Repository} from '../models/repository';

@Component({
  selector: 'app-repo', templateUrl: './repo.component.html', styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  @Input() public repo: Repository;
  @Output() public favClick: EventEmitter<Repository> = new EventEmitter<Repository>();

  constructor() {
  }

  ngOnInit() {
  }

  onFavClick() {
    this.favClick.emit(this.repo);
  }
}
