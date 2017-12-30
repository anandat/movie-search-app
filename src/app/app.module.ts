import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayMovieComponent } from './display-movie.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MoviePreviewComponent } from './search/movie-preview/movie-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayMovieComponent,
    FooterComponent,
    SearchComponent,
    MoviePreviewComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
