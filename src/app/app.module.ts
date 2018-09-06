import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {RepositoriesPageModule} from './repositories-page/repositories-page.module';
import {RepositoriesModule} from './repositories/repositories.module';
import {UserModule} from './user/user.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RepositoriesModule.forRoot(),
    UserModule.forRoot(),
    RepositoriesPageModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
