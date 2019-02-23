import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form/form.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from '../services/auth-interceptor.service';

@NgModule({
  declarations: [FormComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([{
      path: '', component: FormComponent
    }])
  ],
  providers: [ /*{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi   : true,
  }*/]
})
export class SaveModule {
}
