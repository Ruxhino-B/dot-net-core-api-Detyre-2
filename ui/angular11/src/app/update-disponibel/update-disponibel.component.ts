import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-update-disponibel',
  templateUrl: './update-disponibel.component.html',
  styleUrls: ['./update-disponibel.component.css']
})
export class UpdateDisponibelComponent implements OnInit {

  constructor(private service:SharedService) { }


  ngOnInit(): void {
  }

}
