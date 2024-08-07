import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID 9TFABo9XMmUqTdFh6xXlUi5k7rjsgjWarMp39Fqd1x8',
        },
      }
    );
  }
}
