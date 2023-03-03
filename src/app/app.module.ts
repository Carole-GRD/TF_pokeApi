import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ReadPokemonComponent } from './read-pokemon/read-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent,
    SearchComponent,
    ReadPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
