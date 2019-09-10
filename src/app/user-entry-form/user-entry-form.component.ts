import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-entry-form',
  templateUrl: './user-entry-form.component.html',
  styleUrls: ['./user-entry-form.component.css']
})
export class UserEntryFormComponent implements OnInit {

  userName: string='';
  age: number;
  address: string=''
  country: string

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(event: any){
    this.userName=event.target.value;
    console.log(event.target.value);
  }

  onFormSubmit1(){
      this.userName='Reset';
      console.log(this.userName);
    }

    doSubmit(form) {
      console.log(form.value);
     }

}
