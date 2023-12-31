import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalculatorAppComponent } from './calculator/calculator-app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './about/about.component';
import { titleCase } from './about/titlecase.pipe';
import { LikeButtonComponent } from './like-button/like-button.component';
import { LikeButtonService } from './like-button/like-button.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculatorAppComponent,
    TopMenuComponent,
    HomepageComponent,
    AboutComponent,
    titleCase,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    FormsModule,
    ButtonModule
  ],
  providers: [
    LikeButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
