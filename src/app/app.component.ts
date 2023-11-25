import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('appcomponent: OnInit implemented');
  }

  title = 'angular-project';

  onClickEvent(event: any) {
    console.log(event);
  }
}
