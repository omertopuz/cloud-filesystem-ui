import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbServicesService } from '../../../services/db-services.service';
import { RequestDbGetApplicants } from '../../../models/request-services';
import { ResponseApplicants } from '../../../models/response-services';

@Component({
  selector: 'ngx-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.scss']
})
export class ViewApplicationsComponent implements OnInit {

    searchForm
    responseApplicants : ResponseApplicants[];
  constructor(private dbService:DbServicesService, private formBuilder: FormBuilder) { 
    this.searchForm = this.formBuilder.group({
      projectId: ['', Validators.required],
      taxNumber: ''
    });
  }

  ngOnInit(): void {
  }

  doSearch(formVal)
  {
      console.log(formVal.projectId);
      var dbRequest : RequestDbGetApplicants={
        projectId:formVal.projectId,taxNumber:formVal.taxNumber
      };
      this.dbService.getApplicants(dbRequest).subscribe(
        response => {
          this.responseApplicants = response;
        },
        error => {
            console.log("error while getting data from db-service");
        }
    );
  }
}
