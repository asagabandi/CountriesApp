import { Component, ViewEncapsulation } from "@angular/core";
import { RestCountriesService } from "src/app/Services/RestCountriesService";

@Component({
  selector: 'globalnav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GlobalNavComponent {
  constructor(private restCountriesService: RestCountriesService) {}

  toggleMode() {
    this.restCountriesService.toggleMode();
  }
}