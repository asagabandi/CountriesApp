import { Component, OnInit } from "@angular/core";
import { RestCountriesService } from "src/app/Services/RestCountriesService";
import { Observable, of } from "rxjs";
import { Country } from "src/app/Model/Country";
import { Currency } from "src/app/Model/Currency";
import { Language } from "src/app/Model/Language";
import { ActivatedRoute } from "@angular/router";
import { tap, mergeMap } from "rxjs/operators";

@Component({
    selector: "detailpage",
    templateUrl: "./detail-page.component.html",
    styleUrls: ["./detail-page.component.scss"],
})

export class DetailPageComponent implements OnInit {
    country$: Observable<Country>;
    borderCountries$: Observable<Country[]>;

    constructor(private restCountriesService: RestCountriesService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.country$ = this.restCountriesService.getCountryByName(params.country).pipe(
                tap((res) => console.log(res)),
                mergeMap((res) => {
                    this.borderCountries$ = this.restCountriesService.getCountriesByCodes(res.borders);

                    return of(res);
                })
            );
        });
    }

    displayCurrencies(currencies: Currency[]) {
        return currencies.map((currency) => currency.name).join(', ');
    }

    displayLanguages(languages: Language[]) {
        return languages.map((language) => language.name).join(', ');
    }
}