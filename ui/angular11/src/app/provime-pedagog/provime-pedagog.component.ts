import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-provime-pedagog',
  templateUrl: './provime-pedagog.component.html',
  styleUrls: ['./provime-pedagog.component.css']
})
export class ProvimePedagogComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() ped:any;
 

  Pedagog:any=[];
  Emer:string="";
  Mbiemer:string="";
 
  

  ngOnInit(): void {
    this.loaListPedagog();
  }

  loaListPedagog(){
    this.service.getOnlyPedagog().subscribe(data=>{
        this.Pedagog=data;

        this.Emer=this.ped.Pedagog;
        this.Mbiemer=this.ped.pedagog
      });
  }

}
