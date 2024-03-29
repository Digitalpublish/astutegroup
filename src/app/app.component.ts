import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Astute Global Digital Wings';
  
  constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

  
  onActivate(event) {
    window.scroll(0,0);
  }


  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
  event.preventDefault();
}


}
