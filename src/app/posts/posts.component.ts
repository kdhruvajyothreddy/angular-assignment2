import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = []; // Creating a variable as an array
  

  ngOnInit() {  // Using ngOnInit() interface instead of constructor, as it is a good coding practice to use it to load while initialization
    this.service.getPosts().subscribe(resolve => {  // Getting data from a link to use "subscribe" 
      // and setting data to "resolve" interface which is a data provider
      for (let key in resolve) {  //  For every property in the data interface "resolve"
        if (resolve.hasOwnProperty(key)) {  //  If "resolve" interface has a property,
          this.posts.push(resolve[key]);  //  Then push each property to the "posts" array which is initialized in the start
        }        
      }
    });
  }

  constructor(private service: PostService) { // Passing PostService class variable into the constructor
    
   }
   
   createPost(input: HTMLInputElement) {  // Expecting a HTML Input element
    let post: any = {title: input.value}; // Creating a "post" object which has a "title" and the value of "title" will be the passed value
    input.value = '';

   this.service.createPosts(post).subscribe(resolve => { // Creating a post method to post data and convert to JSON
      post['id'] = resolve; // Getting the id from the server and storing it in the post object
      this.posts.splice(0, 0, post);  // Splice or pushing the object to a specific object and 
        // setting parameters accordingly: (starting postion, number of objects to be deleted, object to be added at the starting position)
      console.log(resolve);      
    });
   }

   updatePost(post) { // Passing the post object to the method to update data
     this.service.updatePosts(post).subscribe(resolve => { // Updating data using put method with the updated url and
        // updating url with post's id. The post object is also converted to a JSON string
       console.log(resolve);       
     });
   }

   deletePost(post) { // Passing the post object to the method to delete data
     this.service.deletePosts(post.id).subscribe(resolve => {  // Deleting data using delete method with the updated url
       let index = this.posts.indexOf(post);  // Creating a variable "index" to store the index value of the selected "post" that was passed
       this.posts.splice(index, 1); // Removing the selected post and indicating it using the index variable and the number of "post"s to be removed
     });
   }

}
