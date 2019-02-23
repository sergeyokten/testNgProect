import {Component} from '@angular/core';
import {IEvent} from '../../models/Event';
import {EventResolverService} from '../../services/event-resolver.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private http: HttpClient) {
    this.http.post('http://localhost:8080/login', JSON.stringify({
      username: 'user',
      password: 'user'
    }), {observe: 'response'}).subscribe(value => {
      console.log(value);
      const authorization = value.headers.get('Authorization');
      localStorage.setItem('token', authorization);
      console.log(authorization);
    });

    // this.http.get('//localhost:8080/').subscribe(value => console.log(value));
  }


}
