import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';
import { RouterModule} from '@angular/router'
import { ROUTES } from './app-routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTodoComponentComponent
  ],
  imports: [
  BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
