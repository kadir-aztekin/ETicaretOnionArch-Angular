import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductsModule } from '../../components/products/products.module';
import { HomeModule } from 'src/app/ui/components/home/home.module';
import { BasketsModule } from 'src/app/ui/components/baskets/baskets.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    BasketsModule,
    RouterModule,
    MatListModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ]

})
export class ComponentsModule { }
