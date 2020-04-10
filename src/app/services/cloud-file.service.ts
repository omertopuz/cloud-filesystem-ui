import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CloudFileService extends BaseService {


  constructor(private httpClient: HttpClient) { super();}

  getAllFilesInFolder(folderId:number) : Observable<any>
  {
      let url = this.baseUrl + "folderfiles/" + folderId;

      return this.httpClient.get(url);
  }

  getRootFolders() : Observable<any>
  {
      let url = this.baseUrl + "subfolder/-1/";

      return this.httpClient.get(url);
  }

  getSubFolders(folderId:number) : Observable<any>
  {
      let url = this.baseUrl + "subfolder/"+folderId;

      return this.httpClient.get(url);
  }
}
