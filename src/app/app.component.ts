import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExpenseTabComponent } from './shared/components/expense-tab/expense-tab.component';
import { ExpensePieChartComponent } from './shared/components/expense-pie-chart/expense-pie-chart.component';
import { ExpenseTypeComponent } from './shared/components/expense-type/expense-type.component';
import { ChartData, ExpenseTypes } from './shared/data/chart-data';
import { ChartItem } from './shared/models/shared.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    ExpenseTabComponent,
    ExpensePieChartComponent,
    ExpenseTypeComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'expense-chart';
  expenseTypes = ExpenseTypes;
  chartData = ChartData;
  periodTabs: string[] = [];
  selectedTabData: ChartItem = ChartData[0];
  ngOnInit() {
    this.periodTabs = this.chartData.map((item) => {
      return item.period;
    });
  }
  onSelectedTabChange(tabName: string) {
    this.selectedTabData =
      this.chartData.find((item) => item.period === tabName) ??
      this.selectedTabData;
  }
}
