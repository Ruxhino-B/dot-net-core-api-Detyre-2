import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrariComponent } from './orari/orari.component';
import { ProvimePedagogComponent } from './provime-pedagog/provime-pedagog.component';
import { ProvimeStudentComponent } from './provime-student/provime-student.component';
import { ImportLendetComponent } from './import-lendet/import-lendet.component';
import { ShtoOrariComponent } from './shto-orari/shto-orari.component';
import { UpdateDisponibelComponent } from './update-disponibel/update-disponibel.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OrariComponent,
    ProvimePedagogComponent,
    ProvimeStudentComponent,
    ImportLendetComponent,
    ShtoOrariComponent,
    UpdateDisponibelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
