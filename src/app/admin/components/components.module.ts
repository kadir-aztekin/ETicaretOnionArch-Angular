import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { CustomerModule } from './customer/customer.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsModule } from 'src/app/ui/components/products/products.module';
import { OrderModule } from './order/order.module';
import { DashboardModule } from './dashboard/dashboard.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CustomerModule,
    ProductsModule,
    OrderModule,
    DashboardModule,
    CustomerModule,
  
  ]
})
export class ComponentsModule { }
