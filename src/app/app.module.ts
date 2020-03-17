import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSelectModule } from '@angular/material/select';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';
// import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthgaurdService } from './authgaurd.service';
// import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from './material/material.module';
import { OrdersComponent } from './orders/orders.component';

const appRoutes: Routes = [
  {path:"", component: DashboardComponent, canActivate:[AuthgaurdService]},
  {path:"login", component: LoginComponent},
  // {path:"registration", component: RegistrationComponent},
  {path:"user", component: UserComponent},
  {path:"product", component: ProductComponent},
  {path:"orders", component: OrdersComponent},
  {path:"logout", component: LogoutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    // RegistrationComponent,
    LogoutComponent,
    HeaderComponent,
    UserComponent,
    ProductComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MaterialModule,
    // MatSelectModule,
    // MatFormFieldModule,
    // MatInputModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
