import { ChartData } from './../../data/chart-data';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartItem, PieChartPercent } from '../../models/shared.model';
import { LocaleStringPipe } from "../../pipes/to-locale-string.pipe";

@Component({
    selector: 'app-expense-pie-chart',
    standalone: true,
    templateUrl: './expense-pie-chart.component.html',
    styleUrl: './expense-pie-chart.component.scss',
    imports: [CommonModule, LocaleStringPipe]
})
export class ExpensePieChartComponent implements OnInit, OnChanges {
  @Input() tabData: ChartItem = ChartData[0];
  totalAmountInt: string = '0';
  totalAmountDes: string = '0';
  toalPieAmount: number = 360;
  conicGradient: any;
  shares: PieChartPercent = {
    Personal: 0,
    Shopping: 0,
    Phone: 0,
    Other: 0,
  };
  ngOnInit(): void {
    this.updateChartData();
  }
  ngOnChanges(): void {
    this.updateChartData();
  }
  updateChartData(): void {
    [this.totalAmountInt, this.totalAmountDes] = (
      this.tabData.personal +
      this.tabData.other +
      this.tabData.phone +
      this.tabData.shopping
    )
      .toFixed(2)
      .split('.');
    this.toalPieAmount = parseInt(this.totalAmountInt);
    this.shares.Personal = this.calculatePercentage(this.tabData.personal);
    this.shares.Phone = this.calculatePercentage(this.tabData.phone);
    this.shares.Shopping = this.calculatePercentage(this.tabData.shopping);
    this.shares.Other = this.calculatePercentage(this.tabData.other);
    this.updateConicGradientColor();
  }
  calculatePercentage(share: number): number {
    return parseInt(((share / this.toalPieAmount) * 360).toFixed(0));
  }
  updateConicGradientColor(): void {
    this.conicGradient = `conic-gradient( 
      #4C49ED 0 ${this.shares.Personal}deg, 
      #4FD18B 0 ${this.shares.Personal + this.shares.Phone}deg, 
      #141197 0 ${
        this.shares.Personal + this.shares.Phone + this.shares.Other
      }deg, 
      #9D9BF4 0 360deg
      )`;
  }
}
