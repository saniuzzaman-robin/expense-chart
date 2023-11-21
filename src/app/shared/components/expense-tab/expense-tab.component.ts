import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-tab.component.html',
  styleUrl: './expense-tab.component.scss',
})
export class ExpenseTabComponent implements OnInit {
  @Input() filterPeriodTabs: any[] = [];
  @Output() selectedTabChange = new EventEmitter<string>();
  activeTabName: string = '';
  ngOnInit() {
    this.activeTabName = this.filterPeriodTabs[0];
  }
  changeFilter(tabName: string): void {
    this.activeTabName = tabName;
    this.selectedTabChange.emit(tabName);
  }
}
