import { Component, Input } from "@angular/core";
import { Country } from "src/app/Model/Country";

@Component({
    selector: "country",
    templateUrl: "./country.component.html",
    styleUrls: ["./country.component.scss"],
})

export class CountryComponent {
    @Input()
    country: Country;
}