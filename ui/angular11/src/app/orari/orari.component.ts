import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-orari',
  templateUrl: './orari.component.html',
  styleUrls: ['./orari.component.css']
})
export class OrariComponent implements OnInit {

  constructor(private service:SharedService) { }
KlasaList:any=[];
Orari:any=[];
EmerPetagog:any=[];
SelectedKlasa:any=[];
Klasa:any=[];
SelectedData:any=[];
Data:any=[];
OrariWithoutFilter:any=[];

ngOnInit(): void {
  this.FilterFn();
  this.loadKlasa();
  this.loadData();
  this.loadOrari();
  
}

loadKlasa(){
  this.service.getOnlyKlasa().subscribe(data=>{
    console.log(data);
      this.Klasa=data;
      this.SelectedKlasa=this.Klasa[0];
    });
  }

  loadData(){
    this.service.getOnlyDita().subscribe(data=>{
      console.log(data);
      this.Data=data;
      this.SelectedData=this.Data[13];
    })
  }

loadOrari(){
  this.service.getOrari().subscribe(data=>{
    console.log(data);
    this.Orari=data;
    this.OrariWithoutFilter=data;
    
  });



}
FilterFn(){
  var SelectedData = this.SelectedData.id;
  var SelectedKlasa = this.SelectedKlasa.id;

  this.Orari = this.OrariWithoutFilter.filter(function (el:any){
      return el.Dita.toString().toLowerCase().includes(
        SelectedData.toString().toLowerCase()  
      )&&
    el.Klasa1.toString().toLowerCase().includes(
      SelectedKlasa.toString().toLowerCase())
    // &&
    // el.Klasa2.toString().toLowerCase().includes(
    //   SelectedKlasa.toString().toLowerCase())
    });
}
sortResult(prop:any,asc:any){
  this.Orari = this.Orari.sort(function(a:any,b:any){
    if(asc){
      return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    }else{
      return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    }
  });
}

  

}
