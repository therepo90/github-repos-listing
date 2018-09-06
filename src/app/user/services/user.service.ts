import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Repository} from '../../repositories/models/repository';

interface BinaryMap {
  [key: string]: boolean;
}

@Injectable()
export class UserService {

  // @TODO should be persistent and loaded on init
  private favouritesSubject$ = new BehaviorSubject<BinaryMap>({});
  public favourites$: Observable<BinaryMap> = this.favouritesSubject$.asObservable();

  toggleFavourite(repo: Repository) {
    const curr = {...this.favouritesSubject$.getValue()};
    this.favouritesSubject$.next({
      ...curr,
      [repo.name]: !curr[repo.name]
    });
  }
}
