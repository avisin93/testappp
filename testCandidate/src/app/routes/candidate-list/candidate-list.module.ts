import { NgModule } from '@angular/core';
import { CandidateListComponent } from './candidate-list.component';
import { Routes, RouterModule } from '@angular/router';
import { TriggerService } from 'src/app/common/trigger.service';

const route: Routes = [

    {
        path: '',
        component: CandidateListComponent
    }
];

@NgModule({
    declarations: [
        CandidateListComponent,
    ],
    imports: [
        RouterModule.forChild(route)
    ],
    providers: []
})
export class CandidateModule { }
