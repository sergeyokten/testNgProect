import {Component, OnInit} from '@angular/core';
import {IEvent} from '../../models/Event';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  event: IEvent = {id: 999, title: 'ttitle', description: 'ddescription', date: new Date('2017-12-21')};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  saveEvent() {
    console.log('wdfssjdhfgjh');
    console.log(this.event);

    this.http.post('http://localhost:8080/saveEvent', this.event, {
      responseType: 'text',
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    }).subscribe(value => console.log(value));
  }
}


