import { Injectable } from '@angular/core';

import {Addwork} from './addwork.model'
import {HttpClient,HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AddworkService {
  selectedAddwork : Addwork = {
    nameOfTheIntervention : "",
    numberOrder : "",
    date : "",
    typeOfIntervention :"",
    state : "",
    machine : "",
    manager: "",
    agent :  "",
    depertment : "",
    duration : "",
    equipmentUsed : "",

  }

  constructor(private http : HttpClient) { 
    

  }
  postWork( addwork : Addwork){
   return this.http.post( "http://localhost:8080/api/workOrder",addwork)
  }
}
