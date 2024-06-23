import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css',
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue because it is.',
    },
    {
      title: 'What does an orange taste like?',
      content: 'An orange tastes like an orange.',
    },
    {
      title: 'What is the meaning of life?',
      content: 'The meaning of life is to be.',
    },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
