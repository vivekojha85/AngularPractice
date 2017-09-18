import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm =  new FormGroup({
        'email' : new FormControl(null, Validators.required),
        'password' : new FormControl(null, Validators.required)
      });

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
  }


  onSave(){
    console.log(this.signupForm);
  }




}

