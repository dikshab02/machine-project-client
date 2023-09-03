import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { LoginComponent } from './login/login.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CookieInterceptor } from './interceptor/cookie.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    LoginComponent,
    AddMachineComponent,
    HomeComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatSelectModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CookieInterceptor, multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
