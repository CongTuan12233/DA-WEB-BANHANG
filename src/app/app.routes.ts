import {Routes,RouterModule} from '@angular/router'
import { HomeModule } from '../app/home/home.module';
import { AdminModule } from '../app/admin/admin.module';

const routing: Routes = [
    // {path: '', loadChildren:() => HomeModule},
    {path: 'home', loadChildren:() => HomeModule},
    {path: 'admin', loadChildren:() => AdminModule},


]

export const appRoutes = RouterModule.forRoot(routing);