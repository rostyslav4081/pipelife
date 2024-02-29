import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showBtn1 = {
    start: true,
    firstDiv: false,
    naladka: false
  };
  showBtn2 = {
    start: true,
    form: false,
    document: false,
    signature: false,
    last: false
  }

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    console.log(this.route.config[1].children);


  }
}
