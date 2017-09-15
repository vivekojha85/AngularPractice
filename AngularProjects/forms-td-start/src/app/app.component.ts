import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  defaultUserName = 'Vivekojha85';
  answer='';
  genders = ['male','female'];

  //onSubmit(form: NgForm){
    //console.log(form);
  //}

  onSubmit(){
    console.log(this.signupForm);
  }
}
