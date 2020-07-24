import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs' ;
import { Addwork } from "./addwork.model"

@Injectable({
  providedIn: 'root'
})
export class WorkorderListService {
  private sericeUrl ="http://localhost:8080/api/workorderList"
  constructor(private http : HttpClient) { }
  getData(): Observable<Addwork[]>{
    return this.http.get<Addwork[]>(this.sericeUrl)
  }
}
