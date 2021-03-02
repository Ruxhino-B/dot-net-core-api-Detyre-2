import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-update-disponibel',
  templateUrl: './update-disponibel.component.html',
  styleUrls: ['./update-disponibel.component.css']
})
export class UpdateDisponibelComponent implements OnInit {

  constructor(private service:SharedService) { }

  Disponibel:any=[];
  Dita:any=[];
  SDita:any=[];
  Ora:any=[];
  SOra:any=[];
  Klasa:any=[];
  SKlasa:any=[];
  Perdorur:boolean=false;
  SPerdorur:number=0;

  ngOnInit(): void {
    this.loadElShtoOrari();
    this.onChange();
  }

  loadElShtoOrari(){
    this.service.getDisponibel().subscribe(data=>{
      this.Disponibel=data;
      this.Dita = this.Disponibel.filter(
        (kot:any, i:any, arr:any) => arr.findIndex((t:any)  => t.DitaId === kot.DitaId) === i);
      
      this.SDita = this.Dita[0];

      this.Ora = this.Disponibel.filter(
        (kot:any, i:any, arr:any) => arr.findIndex((t:any) => t.OraId=== kot.OraId) === i);
      
      this.SOra = this.Ora[0];

      this.Klasa = this.Disponibel.filter(
        (kot:any, i:any, arr:any) => arr.findIndex((t:any) => t.KlasaId === kot.KlasaId) === i);
      
      this.SKlasa = this.Klasa[0];
      
    });
  }
 
  onChange(){
    if (this.Perdorur == true)
    {
      return this.SPerdorur=1;
    }
    else
    {
      return this.SPerdorur=0;
    }
  };

  updateDisponibel(){
   var val = {         
        OraId:this.SOra.OraId,
        KlasaId:this.SKlasa.KlasaId,
        Perdorur:this.SPerdorur,
        DitaId:this.SDita.DitaId
        };
        this.service.updateDisponibel(val).subscribe(res=>{
          alert(res.toString());
        });
  }
  
  

}
