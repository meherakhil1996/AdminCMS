import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
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
import { ProductnamePipe } from './productname.pipe';
import { ChatboxComponent } from './chatbox/chatbox.component';

const appRoutes: Routes = [
  {path:"", component: DashboardComponent, canActivate:[AuthgaurdService]},
  {path:"login", component: LoginComponent},
  // {path:"registration", component: RegistrationComponent},
  {path:"user", component: UserComponent},
  {path:"product", component: ProductComponent},
  {path:"orders", component: OrdersComponent},
  {path:"logout", component: LogoutComponent},
  {path:"chat", component: ChatboxComponent}
]

const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };

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
    OrdersComponent,
    ProductnamePipe,
    ChatboxComponent
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
    ChartsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
