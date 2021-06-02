import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { RestCountriesService } from './Services/RestCountriesService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  theme: Observable<string>;

  constructor(
    private restCountriesService: RestCountriesService) { }

  ngOnInit() {
    this.theme = this.restCountriesService.mode;
  }
}