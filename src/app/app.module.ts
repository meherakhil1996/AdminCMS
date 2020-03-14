import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
// import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthgaurdService } from './authgaurd.service';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  {path:"", component: DashboardComponent, canActivate:[AuthgaurdService]},
  {path:"login", component: LoginComponent},
  {path:"registration", component: RegistrationComponent},
  {path:"user", component: UserComponent},
  {path:"product", component: ProductComponent},
  {path:"logout", component: LogoutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    LogoutComponent,
    HeaderComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
