import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';
  date = '';
  amount = 0;
  height = 0;
  miles = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }

  onHeightChange(event: Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }

  onMilesChange(event: Event) {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }
}
