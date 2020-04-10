import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalOperationsComponent } from './portal-operations.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
import { CloudFilesComponent } from './cloud-files/cloud-files.component';


const routes: Routes = [{
  path: '',
  component: PortalOperationsComponent,
  children: [
    {
      path: 'view-applications',
      component: ViewApplicationsComponent,
    },
    {
      path: 'cloud-files',
      component: CloudFilesComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalOperationsRoutingModule { }
