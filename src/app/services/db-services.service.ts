import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { RequestDbGetApplicants } from '../models/request-services';

@Injectable({
  providedIn: 'root'
})
export class DbServicesService extends BaseService {

  constructor(private httpClient: HttpClient) { super();}

  getApplicants(request:RequestDbGetApplicants) : Observable<any>
  {
      let url = this.baseUrl + "/rest/db-service/getApplicaitons?1=1";
      if(request.projectId>0)
      url += "&projectId="+request.projectId;
      if(request.taxNumber.length>0)
      url += "&taxNumber="+request.taxNumber;
      return this.httpClient.get(url);
  }
}
