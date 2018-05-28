import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachSanPhamComponent } from './danh-sach-san-pham/danh-sach-san-pham.component';
import { SanPhamComponent } from './san-pham/san-pham.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[DanhSachSanPhamComponent, SanPhamComponent],
  declarations: [DanhSachSanPhamComponent, SanPhamComponent]
})
export class SharedModuleModule { }
