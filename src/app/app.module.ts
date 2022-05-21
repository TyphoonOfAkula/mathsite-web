import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { NgIconsModule } from '@ng-icons/core';
import { HeroLockClosed, HeroMail,HeroUser,HeroBookmark  } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AboutComponent,
    ContactComponent,
    ContentListComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularToastifyModule,
    NgIconsModule.withIcons({ HeroLockClosed,HeroMail,HeroUser,HeroBookmark  }),
  ],
  providers: [
    ToastService
  ],
  exports: [
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
