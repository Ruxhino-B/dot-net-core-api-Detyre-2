import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-shto-orari',
  templateUrl: './shto-orari.component.html',
  styleUrls: ['./shto-orari.component.css']
})
export class ShtoOrariComponent implements OnInit {

  constructor(private service:SharedService) { }

  Emer:string=""
  Mbiemer:string=""
  Lenda:any=[];
  SLenda:any=[];
  Dega:any=[];
  SDega:any=[];
  VitiLenda:any=[];
  SVitiLenda:any=[];
  VitiStudent:any=[];
  SVitiStudent:any=[];
  Paraleli:any=[];
  SParaleli:any=[];
  NrStrudent:string=""
  Dita:any=[];
  SDita:any=[];
  Ora:any=[];
  SOra:any=[];
  Klasa1:any=[];
  SKlasa1:any=[];
  Klasa2:any=[];
  SKlasa2:any=[];
  Paradiplomim:any=[];
  SParadiplomim:any=[];

  ngOnInit(): void {
  }

}
