import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExpenseTabComponent } from "./shared/components/expense-tab/expense-tab.component";
import { ExpensePieChartComponent } from "./shared/components/expense-pie-chart/expense-pie-chart.component";
import { ExpenseTypeComponent } from "./shared/components/expense-type/expense-type.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ExpenseTabComponent, ExpensePieChartComponent, ExpenseTypeComponent]
})
export class AppComponent {
  title = 'expense-chart';
}
