import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Country } from "src/app/Model/Country";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
  })
export class RestCountriesService {

    private baseURL = "https://restcountries.eu/rest/v2";

    /**
     * @param httpClient HttpClient
     */
    constructor(private httpClient: HttpClient) { }

    private selectedMode: BehaviorSubject<string> = new BehaviorSubject<string>("dark");

    public toggleMode(): void {
        if (this.selectedMode.value === "light") {
            this.selectedMode.next("dark");
            document.getElementById("mode").innerText = "Dark mode";
          } else {
            this.selectedMode.next("light");
            document.getElementById("mode").innerText = "Light mode";
          }
    }

    get mode(): Observable<string> {
        return this.selectedMode.asObservable();
      }

    getAllCountries() {
        return this.httpClient.get<Country[]>(`${this.baseURL}/all`);
    }

    getCountryByName(name: string) {
        return this.httpClient
            .get<Country[]>(`${this.baseURL}/name/${name}`)
            .pipe(map(([res]) => res));
    }

    getCountriesByCodes(codes: string[]) {
        return this.httpClient.get<Country[]>(
            `${this.baseURL}/alpha?codes=${codes.join(';')}`
        );
    }
}