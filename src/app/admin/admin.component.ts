import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Contact } from '../contact';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})
export class AdminComponent implements OnInit {
  posts: Contact[];
  

  constructor(private products: ProductService) { }

  ngOnInit() {
    //this.getdata();
  }

//   getdata(){
//   this.products.getdata().subscribe(
//     res => {
//       this.posts = res;
//       var a, b;
//       for(a = 0; a<=this.posts; a++){
//         for(b = 0; b<a; b++){
//           console.log(a[b]);
//         }
//       }
//       console.log(this.posts);
//     }
//   );
// }

}
