import { Component, OnInit, Input } from '@angular/core';
import { FilesInFolder } from '../../../../models/response-services';
import { CloudFileService } from '../../../../services/cloud-file.service';

@Component({
  selector: 'c-files',
  templateUrl: './c-files.component.html',
  styleUrls: ['./c-files.component.scss']
})
export class CFilesComponent implements OnInit {

  @Input() folderID : number;
  filesLoaded : boolean = false;

  constructor(private cloudService:CloudFileService) { }
  folderFiles : FilesInFolder;
  settings = { actions: false,
    columns: {
      fileName: {
        title: 'File Name',
        type: 'string',
      },
      fileMetaDataId: {
        title: 'File Meta Data Id',
        type: 'string',
      },
      folderId: {
        title: 'Folder Id',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'string',
      },
      keyField: {
        title: 'Key Field',
        type: 'string',
      }
    },
  };


  ngOnInit() {
    this.getFiles(this.folderID);
  }

  getFiles(folderid:number)
  {
      this.cloudService.getAllFilesInFolder(folderid).subscribe(
          response => {
              this.folderFiles = response;
              this.filesLoaded = true; 
              setTimeout(() => this.filesLoaded = false, 1000);  
          },
          error => {
              console.log("error while getting folde files");
          }
      );
  }

}
