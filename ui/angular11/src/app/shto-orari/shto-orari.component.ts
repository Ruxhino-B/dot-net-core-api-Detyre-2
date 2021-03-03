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
  NrStrudent:any=[];
  Dita:any=[];
  SDita:any=[];
  Ora:any=[];
  SOra:any=[];
  Klasa1:any=[];
  SKlasa1:any=[];
  Klasa2:any=[];
  SKlasa2:any=[];
  Paradiplomim:any=0;
  SParadiplomim:any=[];
  ElShtoOrari:any=[];
  ElShtoOrariFull:any=[];

  ngOnInit(): void {
    this.loadLenda();
    this.loadDega();
    this.loadVitiLenda();
    this.loadVitiStudent();
    this.loadParaleli();
    this.loadElShtoOrari();
  }
  

  loadLenda(){
    this.service.getLenda().subscribe(data=>      {
      console.log(data);
      this.Lenda=data;
      this.SLenda=this.Lenda[0];
    });
  }
  loadDega(){
    this.service.getDega().subscribe(data=>{
        this.Dega=data;
        this.SDega=this.Dega[0];
      });
    }
  loadVitiLenda(){
    this.service.getVitiLenda().subscribe(data=>{
      this.VitiLenda=data;
      this.SVitiLenda=this.VitiLenda[1];
      });
    }
    loadVitiStudent(){
      this.service.getVitiStudent().subscribe(data=>{
        this.VitiStudent=data;
        this.SVitiStudent=this.VitiStudent[0];
      });
    }

    loadParaleli(){
      this.service.getParaleli().subscribe(data=>{
        this.Paraleli=data;
        this.SParaleli=this.Paraleli[0];
      });
    }

    loadElShtoOrari(){
      this.service.getElShtoOrari().subscribe(data=>{
        this.ElShtoOrari=data;
        this.Dita = this.ElShtoOrari.filter(
          (kot:any, i:any, arr:any) => arr.findIndex((t:any)  => t.DitaId === kot.DitaId) === i);
        
        this.SDita = this.Dita[0];

        this.Ora = this.ElShtoOrari.filter(
          (kot:any, i:any, arr:any) => arr.findIndex((t:any) => t.OraId=== kot.OraId) === i);
        
        this.SOra = this.Ora[0];

        this.Klasa1 = this.ElShtoOrari.filter(
          (kot:any, i:any, arr:any) => arr.findIndex((t:any) => t.KlasaId === kot.KlasaId) === i);
        
        this.SKlasa1 = this.Klasa1[0];
        this.SKlasa2 = this.Klasa1[2];
      });
    }

    shtoOrari(){
      var val = {
        Emer:this.Emer,
        Mbiemer:this.Mbiemer,
        Lenda:this.SLenda.Lenda,
        Dega:this.SDega.Dega,
        VitiLenda:this.SVitiLenda.VitiLenda,
        VitiStudent:this.SVitiStudent.VitiStudent,
        Paraleli:this.SParaleli.Paraleli,
        NrStrudent:this.NrStrudent,
        Dita:this.SDita.DitaId,
        Ora:this.SOra.OraId,
        Klasa1:this.SKlasa1.KlasaId,
        Klasa2:this.SKlasa2.KlasaId
        //Paradiplomim:this.Paradiplomim
        };
        this.service.addOrari(val).subscribe(res=>{
          alert(res.toString());
        });
        this.clearInput();
    }

    clearInput(){
      this.Emer="";
      this.Mbiemer="";
      this.NrStrudent="";
    }

}
