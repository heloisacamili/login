import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
