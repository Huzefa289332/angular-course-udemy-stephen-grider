import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() items: { title: string; content: string }[] = [];
  openedItemIndex: number = 0;

  onClick(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
