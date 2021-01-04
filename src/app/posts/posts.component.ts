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

  constructor(http: HttpClient) { // Using a constructor to inject Http client data
    http.get('http://jsonplaceholder.typicode.com/posts').subscribe(resolve => {  // Getting data from a link to use "subscribe" 
      // and setting data to "resolve" interface which is a data provider
      for (let key in resolve) {  //  For every property in the data interface "resolve"
        if (resolve.hasOwnProperty(key)) {  //  If "resolve" interface has a property,
          this.posts.push(resolve[key]);  //  Then push each property to the "posts" array which is initialized in the start
        }        
      }
    });
   }  

}
