import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';  // Created a private variable to use it for URL to JSON. Moving it from component class
  constructor(private http: HttpClient) { } // Creating a constructor to inject http client service

  // Moving all the http calls from each methods in the posts component class to the service class and returning it whenever called
  getPosts() {
    return this.http.get(this.url);
  }

  createPosts(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePosts(post) {
    return this.http.put(this.url + "/" + post.id, JSON.stringify(post));
  }

  deletePosts(id) {
    return this.http.delete(this.url + "/" + id);
  }
}
