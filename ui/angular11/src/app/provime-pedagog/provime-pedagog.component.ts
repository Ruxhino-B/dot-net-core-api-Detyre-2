import { Component, OnInit, Input, Pipe, PipeTransform,Query,QueryList } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-provime-pedagog',
  templateUrl: './provime-pedagog.component.html',
  styleUrls: ['./provime-pedagog.component.css']
})
export class ProvimePedagogComponent implements OnInit {

  constructor(private service:SharedService) { }
 
  PedagogList:any=[];
  EmerPetagog:any=[];
  EmerSelektuar:any=[];
  PedagogListWithoutFilter:any=[];
 
  // Mbiemer:string="";

  ngOnInit(): void {
    this.loadListPedagog();
    this.FilterFn();
    this.loadEmerPetagog();
    
    
    
  }

  loadEmerPetagog(){
    this.service.getOnlyPedagog().subscribe(data=>{
      console.log(data);
      this.EmerPetagog=data;
      this.EmerSelektuar=this.EmerPetagog[10];
      
    });
  }

  loadListPedagog(){
    this.service.getProvimePedagog().subscribe(data=>{
      console.log(data);
        this.PedagogList=data;
        this.PedagogListWithoutFilter=data;
      });
  }
  FilterFn(){
    var EmerSelektuar = this.EmerSelektuar.Emer_Mbiemer;
    this.PedagogList = this.PedagogListWithoutFilter.filter(function (el:any){
        return el.Emer_Mbiemer.toString().toLowerCase().includes(
         EmerSelektuar.toString().toLowerCase()  )
      });
  }

  sortResult(prop:any,asc:any){
    this.PedagogList = this.PedagogList.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    });
  }

}
