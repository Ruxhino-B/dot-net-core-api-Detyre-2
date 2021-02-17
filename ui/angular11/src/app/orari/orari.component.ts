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


  ngOnInit(): void {
    this.refreshKlasaList();
  }

  refreshKlasaList(){
    this.service.getOnlyKlasa().subscribe(data=>{
        this.KlasaList=data;
      });
  }

  

}
