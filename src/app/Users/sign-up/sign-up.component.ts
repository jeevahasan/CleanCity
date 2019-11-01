import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service:UsersService
    ,private firestore:AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if( form!=null)
      form.resetForm();
    this.service.formData ={
      id:null,
      fullName:'',
      phone:'',
      address:'',
      email:'',
      password:''

    }
  }

  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('users').add(data);
    this.resetForm(form);
  }

}
