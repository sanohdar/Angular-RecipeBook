import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const authRoute :Routes = [{path:'',component:AuthComponent}]
@NgModule({
    declarations:[AuthComponent],
    imports:[
        SharedModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(  authRoute)
    ]
})
export class AuthModule {}