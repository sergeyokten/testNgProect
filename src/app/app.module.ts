import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {EventComponent} from './components/event/event.component';
import {RouterModule} from '@angular/router';
import {EventDetailsComponent} from './components/event-details/event-details.component';
import {EventResolverService} from './services/event-resolver.service';
import {AllEventsComponent} from './components/all-events/all-events.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailsComponent,
    AllEventsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      // {path: 'event/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
      {
        path: '',
        component: AllEventsComponent,
        children: [
          {path: 'event/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
        ]
      },
      {path: 'form', loadChildren: './save/save.module#SaveModule'}
    ])
  ],
  providers: [/*{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi   : true,
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule {
}
