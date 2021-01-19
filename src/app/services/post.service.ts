import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { error } from 'protractor';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found';
import { BadInput } from '../common/bad-input';

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
    return this.http.post(this.url, JSON.stringify(post)).pipe( // Catching error and throwing back error response using "pipe" method
      catchError(this.handleError)  //  Moved the error handling code to "handleError" method and passing it as a reference
    );
  }

  updatePosts(post) {
    return this.http.put(this.url + "/" + post.id, JSON.stringify(post));
  }

  deletePosts(id) {
    return this.http.delete(this.url + "/" + id).pipe(  // Catching error and throwing back error response using "pipe" method
      catchError(this.handleError)  //  Moved the error handling code to "handleError" method and passing it as a reference
    );
  }

  private handleError(error: Response) {  // Creating a private error handler method and passing the error object of type "Response"
    if (error.status === 400) { // Checking if error status is "400"
        return throwError(new BadInput(error));
    }
    if (error.status === 404) { // Checking if error status is "404"
      return throwError(new NotFoundError());
    } else {
      return throwError(new AppError(error));
    }
  }
}
