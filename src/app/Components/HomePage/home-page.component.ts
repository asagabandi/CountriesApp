import { Component, OnInit } from "@angular/core";
import { RestCountriesService } from "src/app/Services/RestCountriesService";
import { Country } from "src/app/Model/Country";

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
    selector: 'homepage',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {
    private source: Country[];
    searchFilter?: string;
    regionFilter?: string;
    regionOptions = REGION_OPTIONS;

    constructor(private restCountriesService: RestCountriesService) { }

    ngOnInit(): void {
        this.restCountriesService.getAllCountries().subscribe((countries) => {
            this.source = countries;
        });
    }

    get countries() {
        return this.source ? this.source.filter((country) => this.searchFilter ? country.name.toLowerCase().includes(this.searchFilter.toLowerCase())
                        : country).filter((country) => this.regionFilter ? country.region.includes(this.regionFilter)
                        : country) : this.source;
    }
}