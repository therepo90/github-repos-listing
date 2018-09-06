import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Repository} from '../../repositories/models/repository';

interface BinaryMap {
  [key: string]: boolean;
}

@Injectable()
export class UserService {

  private favouritesSubject$ = new BehaviorSubject<BinaryMap>({});
  public favourites$: Observable<BinaryMap> = this.favouritesSubject$.asObservable();

  getUserId() {
    return '5'; // @TODO
  }

  toggleFavourite(repo: Repository) {
    const curr = {...this.favouritesSubject$.getValue()};
    this.favouritesSubject$.next({
      ...curr,
      [repo.name]: !curr[repo.name]
    });
  }
}
