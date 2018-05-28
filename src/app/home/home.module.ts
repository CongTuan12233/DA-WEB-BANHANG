import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangChiTietSanPhamComponent } from './trang-chi-tiet-san-pham/trang-chi-tiet-san-pham.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';





const HomeRoute: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children:[
      { path: 'giohang', component: GioHangComponent },
      // thay component bằng loadchil thì là trỏ đến 1 module khác
      { path: 'chitietsanpham', component: TrangChiTietSanPhamComponent }, 
      { path: 'trangchu', component:TrangChuComponent},
      { path: '**',redirectTo:''}
    
    ]
  }
];





@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(HomeRoute)
  ],
 
  declarations: [TrangChuComponent, TrangChiTietSanPhamComponent, GioHangComponent, HomeLayoutComponent]
})
export class HomeModule { }
