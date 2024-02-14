import { Component, HostListener } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aos';
 

  ngOnInit(): void {
    Aos.init();
   
  }
  
  isNavbarOpen = false;
 

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 0;
  }

}
