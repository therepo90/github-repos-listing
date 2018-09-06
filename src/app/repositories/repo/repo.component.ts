import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Repository} from '../models/repository';
import {RepositoryUI} from '../models/repository-ui';

@Component({
  selector: 'app-repo', templateUrl: './repo.component.html', styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  @Input() public repo: RepositoryUI;
  @Output() public favClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onFavClick() {
    this.favClick.emit();
  }
}
