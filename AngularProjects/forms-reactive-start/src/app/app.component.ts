import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {reject} from 'q';
import {setTimeout} from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];

  signupForm : FormGroup;
  ngOnInit(){

    this.signupForm = new FormGroup({
      'userData': new FormGroup({

        'username' : new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails)

      }),

      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    this.signupForm.statusChanges.subscribe(
       (status) => console.log(status)
     );

    this.signupForm.setValue({
      'userData':{
        'username': 'Vivek',
        'email': 'abv@test.com'
      },
      'gender':'male',
      'hobbies':[]
    });


    this.signupForm.patchValue({
      'userData':{
        'username': 'Ojha'

      }
    });


  }


  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    console.log('Before adding hobby');
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.signupForm.get('hobbies')).push(control);

  }

  forbiddenEmails(control: FormControl): Promise <any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout( ()=>{
      if(control.value ==='test@test.com'){
        resolve({'emailIsForbidden':true});
      } else{
        resolve(null);
      }
      },1500);

    });
    return promise;
  }



}
