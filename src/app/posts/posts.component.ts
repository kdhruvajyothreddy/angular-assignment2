import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts = []; // Creating a variable as an array
  private url = 'http://jsonplaceholder.typicode.com/posts';  // Created a private variable to use it for URL to JSON

  constructor(private http: HttpClient) { // Using a constructor to inject Http client data
    http.get(this.url).subscribe(resolve => {  // Getting data from a link to use "subscribe" 
      // and setting data to "resolve" interface which is a data provider
      for (let key in resolve) {  //  For every property in the data interface "resolve"
        if (resolve.hasOwnProperty(key)) {  //  If "resolve" interface has a property,
          this.posts.push(resolve[key]);  //  Then push each property to the "posts" array which is initialized in the start
        }        
      }
    });
   }
   
   createPost(input: HTMLInputElement) {  // Expecting a HTML Input element
    let post: any = {title: input.value}; // Creating a "post" object which has a "title" and the value of "title" will be the passed value
    input.value = '';

    this.http.post(this.url, JSON.stringify(post)).subscribe(resolve => { // Creating a post method to post data and convert to JSON
      post['id'] = resolve; // Getting the id from the server and storing it in the post object
      this.posts.splice(0, 0, post);  // Splice or pushing the object to a specific object and 
        // setting parameters accordingly: (starting postion, number of objects to be deleted, object to be added at the starting position)
      console.log(resolve);      
    });
   }

   updatePost(post) { // Passing the post object to the method to update data
     this.http.put(this.url + "/" + post.id, JSON.stringify(post)).subscribe(resolve => { // Updating data using put method with the updated url and
        // updating url with post's id. The post object is also converted to a JSON string
       console.log(resolve);
       
     })
   }

}
