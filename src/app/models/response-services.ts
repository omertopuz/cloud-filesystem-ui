export class FilesInFolder {
    folderId : number;
    fileInfoList : FileInfo[];
}

export class FileInfo {
    fileName : string;
    fileMetaDataId : string;
    folderId : number;
    category : string;
    keyField : string;
}

export class FolderInfo {
    folderId : number;
    folderName : string;
    parentFolderId : number;
    toggled : boolean
    constructor(){this.toggled=false;}
}

export class SubFolderModel {
    folderList : FolderInfo[];
}

export class ResponseApplicants {
    projectId:number
}