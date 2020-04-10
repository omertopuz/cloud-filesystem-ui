import { Component, OnInit, Input } from '@angular/core';
import { SubFolderModel, FolderInfo } from '../../../../models/response-services';
import { CloudFileService } from '../../../../services/cloud-file.service';

@Component({
  selector: 'c-folders',
  templateUrl: './c-folders.component.html',
  styleUrls: ['./c-folders.component.scss']
})
export class CFoldersComponent implements OnInit {

  subFolderInfo : SubFolderModel;
  foldersLoaded:boolean=false;
  @Input() folderID : number;
  constructor(private cloudService:CloudFileService) {
    
  }

  ngOnInit() {
    this.cloudService.getSubFolders(this.folderID).subscribe(
      response => {
          this.subFolderInfo = response;   
          this.foldersLoaded = true; 
          setTimeout(() => this.foldersLoaded = false, 1000);    
      },
      error => {
          console.log("error while getting folder info");
      }
  );
  }

  itemtoggle(fInfo:FolderInfo){
    fInfo.toggled = !fInfo.toggled;
  }
}
