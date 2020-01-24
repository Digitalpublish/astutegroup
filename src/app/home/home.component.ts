import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() {
  //   console.log("Constructor is woring");
  //  }

  // ngOnChanges(change:SimpleChanges){
  //    console.log("ngOnChanges is woring");
  //   console.log("ngOnChanges is woring" + change);
  // }
  // text:string = "Siya var Ram chandra ki jai";
  // num:number = 10000000;
  // date:any = new Date;
  ngOnInit() {
    
    // console.log("ngOnInit is woring");
  }

  // ngDoCheck(){
  //   console.log("ngDoCheck is woring");
  // }

  // ngAfterContentChecked(){
  //   console.log("ngAfterContentChecked is woring");
  // }

  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit is woring");
  // }

  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit is woring");
  // }

  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked is woring");
  // }

  // ngOnDestroy(){
  //   console.log("ngOnDestroy is woring");
  // }

  // @Input() value:string;

  // myfunction(val){
  //   this.value = val.value;
  //   console.log(this.value);
  // }

  // box:any;

  // deletedata(){
  //   var a = document.getElementById("main");
  //   this.box = a.nodeValue;
  //   delete(this.box);
  // }

}
