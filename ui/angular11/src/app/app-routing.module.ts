import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import {ImportLendetComponent} from './import-lendet/import-lendet.component';
import {OrariComponent} from './orari/orari.component';
import {ProvimePedagogComponent} from './provime-pedagog/provime-pedagog.component';
import {ProvimeStudentComponent} from './provime-student/provime-student.component';
import {ShtoOrariComponent} from './shto-orari/shto-orari.component';
import {UpdateDisponibelComponent} from './update-disponibel/update-disponibel.component';

const routes: Routes = [
  {path:'orari',component:OrariComponent},
  {path:'provimePedagog',component:ProvimePedagogComponent},
  {path:'orariProvimeStudent',component:ProvimeStudentComponent},
  {path:'createImportLendet',component:UpdateDisponibelComponent},
  {path:'shtoOrari',component:ShtoOrariComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
