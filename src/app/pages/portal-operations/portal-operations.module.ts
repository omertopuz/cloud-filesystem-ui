import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalOperationsRoutingModule } from './portal-operations-routing.module';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
import { CloudFilesComponent } from './cloud-files/cloud-files.component';
import { CFilesComponent } from './cloud-files/c-files/c-files.component';
import { CFoldersComponent } from './cloud-files/c-folders/c-folders.component';
import { PortalOperationsComponent } from './portal-operations.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbInputModule, NbButtonModule, NbAccordionModule, NbAlertModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [PortalOperationsComponent,
    ViewApplicationsComponent,
    CloudFilesComponent,
    CFoldersComponent,
    CFilesComponent,
    
],
  imports: [
    ThemeModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbAccordionModule,
    PortalOperationsRoutingModule,
    NbCardModule,
    NbAccordionModule,
    NbAlertModule,
    NbIconModule,NbSpinnerModule,Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortalOperationsModule { }
