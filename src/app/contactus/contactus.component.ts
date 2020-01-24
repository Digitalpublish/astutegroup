import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { EventEmitter } from 'events';
import { Contact } from '../contact';
import { Route } from '@angular/compiler/src/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [ProductService]
})
export class ContactusComponent implements OnInit {
  data: any;

  constructor(private products:ProductService, private router: Router) { }
  title = "Hellow";
  posts: any;
  @Output() refresh = new EventEmitter();

  ngOnInit() {
    this.getdata();
  }

  login = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('', [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
    ]),
    subject : new FormControl('', Validators.required),
    message : new FormControl('', Validators.required)
 
  }
 );


getdata(){
  this.products.getdata().subscribe(
    res => {
      this.posts = res;
      console.log(this.posts);
    }
  );
}

onSubmit(){
  this.products.adddata(this.login.value)
  .subscribe(data => {
    console.log(this.data);
    
  })
  alert("Data submitted successfuly");
    this.login.reset();
}

  
}
