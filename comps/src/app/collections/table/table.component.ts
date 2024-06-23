import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input('class') classNames = '';

  @Input() data: Array<{
    name: string;
    age: number;
    job: string;
    [key: string]: any;
  }> = [];

  @Input() headers: Array<{ key: string; label: string }> = [];
}
