import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';


const adminR: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children:[
      // { path: 'giohang', component: GioHangComponent },
      // // thay component bằng loadchil thì là trỏ đến 1 module khác
      // { path: 'chitietsanpham', component: TrangChiTietSanPhamComponent }, 
      // { path: 'trangchu', component:TrangChuComponent},
    
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(adminR)
  ],
  declarations: [LayoutAdminComponent]
})
export class AdminModule { }
