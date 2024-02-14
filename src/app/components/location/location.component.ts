import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  ngOnInit(): void {
    setTimeout(() => {
      Aos.init();
    }, 1000); // Adjust the delay as needed
  }
}
