import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-provime-student',
  templateUrl: './provime-student.component.html',
  styleUrls: ['./provime-student.component.css']
})
export class ProvimeStudentComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  
 
 
  ngOnInit(): void {
    
  }

 
}
