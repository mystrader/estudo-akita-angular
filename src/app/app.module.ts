import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';
import { RouterModule} from '@angular/router'
import { ROUTES } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
