import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ResponseEco} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient,) {
  }

  apiUrlL: string = "https://app.ecostandard.ru/board/test.json";

  getAllData(): Observable<ResponseEco> {
    return this.http.get<ResponseEco>("assets/test.json")
  }

}
