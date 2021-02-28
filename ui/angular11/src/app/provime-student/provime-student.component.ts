import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-provime-student',
  templateUrl: './provime-student.component.html',
  styleUrls: ['./provime-student.component.css']
})
export class ProvimeStudentComponent implements OnInit {

  constructor(private service:SharedService) { }
  Dega:any=[];
  DegaFull:any=[];
  SelectedDega:any=[];
  Viti:any=[];
  VitiV:any=[];
  SelectedViti:any=[];
  Paraleli:any=[];
  SelectedParaleli:any=[];
  OrariProvimeStudent:any=[];
  OrariProvimeStudentFull:any=[];
  
  ngOnInit(): void {
    // this.loadDega();
    //this.loadViti();
    //this.loadParaleli();
    this.getOrariProvimeStudent();
  }

  

  



  getOrariProvimeStudent(){
    this.service.getProvimeStudent().subscribe(data=>{
      this.OrariProvimeStudent=data;
      this.OrariProvimeStudentFull=data;
      this.Dega = this.OrariProvimeStudent.filter(
        (kot:any, i:any, arr:any) => arr.findIndex((t:any)  => t.Dega === kot.Dega) ===i
      );
      this.SelectedDega=this.Dega[0]
    })
  }

  FilterDe(){
    var SelectedDega = this.SelectedDega.Dega;

    this.OrariProvimeStudent = this.OrariProvimeStudentFull.filter(function (el:any){
      return el.Dega.toString().toLowerCase().includes(
        SelectedDega.toString().toLowerCase()  
      )
    });
    this.Viti = this.OrariProvimeStudent.filter(
      (kot:any, i:any, arr:any) => arr.findIndex((t:any)  => t.VitiStudent === kot.VitiStudent) ===i
    );
    this.SelectedViti = this.Viti[0];
      
  }

  FilterVi(){
    var SelectedViti = this.SelectedViti.VitiStudent;

    this.OrariProvimeStudent = this.OrariProvimeStudentFull.filter(function (el:any){
      return el.VitiStudent.toString().toLowerCase().includes(
        SelectedViti.toString().toLowerCase()  
      )
    });
    this.Paraleli = this.OrariProvimeStudent.filter(
      (kot:any, i:any, arr:any) => arr.findIndex((t:any)  => t.Paraleli === kot.Paraleli) ===i
    );
    this.SelectedParaleli = this.Paraleli[0];
      
  }

  FilterPa(){
    var SelectedParaleli = this.SelectedParaleli.Paraleli;

    this.OrariProvimeStudent = this.OrariProvimeStudentFull.filter(function (el:any){
      return el.Paraleli.toString().toLowerCase().includes(
        SelectedParaleli.toString().toLowerCase()  
      )
    });
      
  }
  sortResult(prop:any,asc:any){
    this.OrariProvimeStudent = this.OrariProvimeStudentFull.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
 
}
