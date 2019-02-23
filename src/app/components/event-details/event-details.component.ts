import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventResolverService} from '../../services/event-resolver.service';
import {IEvent} from '../../models/Event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;


  constructor(private activatedRoute: ActivatedRoute, private eventResolver: EventResolverService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(value => {
        this.event = value.event;
      }
    );

  }

}
