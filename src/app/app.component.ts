import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Astute Global Digital Wings';
  
  
  onActivate(event) {
    window.scroll(0,0);
  }


  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
  event.preventDefault();
}

}
