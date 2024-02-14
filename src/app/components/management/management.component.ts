import { Component } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {
  isDropdownOpen: boolean[] = [false, false, false];
  ngOnInit(): void {
    setTimeout(() => {
      Aos.init();
    }, 1000); // Adjust the delay as needed
  }

  show(index: number) {
    // Toggle the state of the selected dropdown
    this.isDropdownOpen[index] = !this.isDropdownOpen[index];

    // Close all other dropdowns
    this.isDropdownOpen.forEach((value, i) => {
      if (i !== index) {
        this.isDropdownOpen[i] = false;
      }
    });
  }

}
