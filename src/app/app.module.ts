import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GaugeModule } from 'angular-gauge';
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component'
import {MatSelectModule} from '@angular/material/select';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    GameTabsComponent,
    LoginpageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpHeadersInterceptor,
      multi : true,
    },
    {
      provide : AuthGuard
      
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpErrorsInterceptor,
      multi : true,
    },
    {
      provide : AuthService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
