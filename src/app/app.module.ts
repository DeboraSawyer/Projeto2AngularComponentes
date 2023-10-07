import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UseridentificationComponent } from './components/widgets/useridentification/useridentification.component';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { TopbarComponent } from './components/widgets/topbar/topbar.component';
import { BottombarComponent } from './components/widgets/bottombar/bottombar.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UseridentificationComponent,
    MainscreenComponent,
    TopbarComponent,
    BottombarComponent,
    RegisterUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }