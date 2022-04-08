import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {UserService} from "./user/service/user.service";
import {MessageService} from "./message/service/message.service";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { MessageComponent } from './message/message.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MessageComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
        RouterModule.forRoot([
          {path: 'users', component: UserComponent},
          {path: 'messages', component: MessageComponent},
          {path: 'message/:id', component: MessageComponent},

        ]),
  ],
  exports: [RouterModule,
   FormsModule,
   CommonModule,
   ReactiveFormsModule,],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
