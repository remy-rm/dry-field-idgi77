import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'CodeSandbox';


  
  constructor(private router:Router , private fb : FormBuilder){
    this.users =[]
  }

  userForm = this.fb.group({
    username: ['', Validators.required],

    credentials: this.fb.group({
      mail: ['', Validators.required],
      password: ['',  Validators.required],
    }),

    address :this.fb.group ({
      street :['' , Validators.required],
      zipcode  :['', Validators.required],
      city : ['' , Validators.required]
    })
  })




  users! : User[]

  onSubmit() {
    
    this.users.push(new User(
      this.userForm.value.username!,
      this.userForm.value.credentials!.mail!,
      this.userForm.value.address!.street!,
      parseInt(this.userForm.value.address!.zipcode!),
      this.userForm.value.address!.city!
    ));
    alert(this.userForm.value)

    this.userForm.reset();

  }
}

