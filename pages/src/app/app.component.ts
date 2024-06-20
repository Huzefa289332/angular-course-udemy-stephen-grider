import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ClassDirective, TimesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1682449558370-f3ef8450b1fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the snow',
      url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNub3d8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1682449558370-f3ef8450b1fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the snow',
      url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNub3d8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1682449558370-f3ef8450b1fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the snow',
      url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNub3d8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww',
    },
    {
      title: 'At the city',
      url: 'https://plus.unsplash.com/premium_photo-1682449558370-f3ef8450b1fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the snow',
      url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNub3d8ZW58MHx8MHx8fDA%3D',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
