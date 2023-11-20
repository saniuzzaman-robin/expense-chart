import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-type.component.html',
  styleUrl: './expense-type.component.scss',
})
export class ExpenseTypeComponent {
  @Input() colorCode: any = '';
  @Input() name: any = '';
}
