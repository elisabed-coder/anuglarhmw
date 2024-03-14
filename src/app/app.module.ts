import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [AppComponent, UserComponent, HighlightDirective, UnlessDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
