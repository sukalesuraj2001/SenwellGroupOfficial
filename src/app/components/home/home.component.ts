import { Component } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(): void {
    setTimeout(() => {
      Aos.init();
    }, 1000); // Adjust the delay as needed
  }
  

}
