import { Component, OnInit, inject } from '@angular/core';
import { Posts } from '../../models/addpost.model';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
// import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from 'express';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  AddPostObj: AddPost

  constructor(private http: HttpClient) {
    this.AddPostObj = new AddPost();
  }

  onAddPost(){
    this.http.post('https://localhost:7259/swagger/index.html', this.AddPostObj).subscribe((res:any) => {
      if(res.result) {
        alert("Post added successfully")
      }else{
        alert(res.message)
      }
    })
  }
  ngOnInit(): void {
  }
  // addPost: Posts = {
  //   PostId: '',
  //   Name: '',
  //   Updated: new Date,
  //   Description: '',
  //   AdditionalDescription: '',
  //   Category: '',
  //   JobType: ''
  // };
}
export class AddPost{
  addPost: Posts = {
    PostId: '',
    Name: '',
    Updated: new Date,
    Description: '',
    AdditionalDescription: '',
    Category: '',
    JobType: ''
  };
}
