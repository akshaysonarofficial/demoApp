import { Component, OnInit } from '@angular/core';
import{ FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   regForm=new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
    lname: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    address: new FormControl(''),
    Tags: new FormControl(''),
   });
   data: any = [];
   
   

   getUserValue(value) {
    alert("Submitted Data Successfully!")
    console.log(value)
    this.data.push(this.regForm.value);
    this.regForm.reset();


  }
  delete(id){

    for(let i=0;i<this.data.length;i++){
      if(id==this.data[i]){
        this.data.splice(i,1);
      }
    }

  }

  update(info) {
    this.regForm = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
      lname: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      address: new FormControl(''),
      Tags: new FormControl(''),
    });

  }
  
   
  
  

  constructor() { 
    
  }

  ngOnInit(): void {
  }

   

}
