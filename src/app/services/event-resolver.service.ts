import {Injectable} from '@angular/core';
import {eventsList} from '../data/dataset';
import {IEvent} from '../models/Event';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<IEvent> {

  constructor(private eventResolver: EventResolverService) {
  }

  getEventsList() {
    return eventsList;
  }

  addEvent(event: IEvent) {
    eventsList.push(event);
  }


  getEvent(id: number): IEvent {
    return eventsList.find(event => event.id === id);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent> | Promise<IEvent> | IEvent {
    return this.getEvent(+route.params.id);
  }

}
