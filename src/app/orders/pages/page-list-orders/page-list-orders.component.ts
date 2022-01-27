import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public title: string;
  public collection$!: Observable<Order[]>;
  public headers: string[];
  public order = new Order();

  constructor(private ordersService: OrdersService) {
    this.title = 'orders list';
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
    ];

    this.collection$ = this.ordersService.collection$;
  }

  public changeTitle(): void {
    this.title = 'le titre a changé';
  }

  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('total called');
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
}
