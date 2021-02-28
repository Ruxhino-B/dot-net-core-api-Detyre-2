import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-import-lendet',
  templateUrl: './import-lendet.component.html',
  styleUrls: ['./import-lendet.component.css']
})
export class ImportLendetComponent implements OnInit {

  constructor(private service:SharedService) { }

  form:any=[];
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
  NrStrudent:any=[]
 
  Kapur:any=1;
  Paradiplomim:any=0;
 

  ngOnInit(): void {
    this.loadLenda();
    this.loadDega();
    this.loadParaleli();
    this.loadVitiLenda();
    this.loadVitiStudent();
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

  loadParaleli(){
    this.service.getParaleli().subscribe(data=>{
      this.Paraleli=data;
      this.SParaleli=this.Paraleli[0];
    });
  }

  loadVitiStudent(){
    this.service.getVitiStudent().subscribe(data=>{
      this.VitiStudent=data;
      this.SVitiStudent=this.VitiStudent[0];
    });
  }
  importLendet(){
    var val = {
      Emer:this.Emer,
      Mbiemer:this.Mbiemer,
      Lenda:this.SLenda.Lenda,
      Dega:this.SDega.Dega,
      VitiLenda:this.SVitiLenda.VitiLenda,
      VitiStudent:this.SVitiStudent.VitiStudent,
      Paraleli:this.SParaleli.Paraleli,
      NrStrudent:this.NrStrudent,
      Kapur:this.Kapur,
      Paradiplomim:this.Paradiplomim,
      };
      this.service.addImportLendet(val).subscribe(res=>{
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
