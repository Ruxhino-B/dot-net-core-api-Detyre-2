import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-provime-student',
  templateUrl: './provime-student.component.html',
  styleUrls: ['./provime-student.component.css']
})
export class ProvimeStudentComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() eme:any;
  Pedagog:any=[];
  Emer:string | undefined;
  Mbiemer:string="";

  ngOnInit(): void {
    this.getEmerMbiemer();
  }
  name="Ruxhino"

  getLastName(){
    return "Balliu"
  }

  getEmerMbiemer(){
    this.service.getOnlyPedagog().subscribe(data=>{
      this.Pedagog=data;
      this.Emer=this.Pedagog.Emer;
      this.Mbiemer=this.Pedagog.Mbiemer;
    });
  }

  returnEmer(){
    return this.Emer;
  }

}
