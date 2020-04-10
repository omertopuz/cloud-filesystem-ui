import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseUrl:string = "http://localhost:8094/rest/cloudfilesystem/";
  microServicesUrl:string = "http://localhost:8095/api/";
  
  constructor() { }
}
