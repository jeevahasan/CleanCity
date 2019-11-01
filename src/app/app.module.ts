import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './Users/login/login.component';
import { HomeComponent } from './Users/home/home.component';
import { ProfileComponent } from './Users/profile/profile.component';
import { SignUpComponent } from './Users/sign-up/sign-up.component';
import { environment } from 'src/environments/environment';
import { UsersService } from './shared/users.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
