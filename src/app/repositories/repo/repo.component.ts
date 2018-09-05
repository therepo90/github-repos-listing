import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../models/repository';

@Component({
  selector: 'app-repo', templateUrl: './repo.component.html', styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  @Input() repo: Repository;

  constructor() { }

  ngOnInit() {
  }

}
