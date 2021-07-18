import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  @Input() data

  

  constructor() { }

  ngOnInit(): void {
  }

}
