import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../models/addpost.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseApiUrl: string = 'https://localhost:7259/swagger/index.html';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>(this.baseApiUrl + '/api/Admin')
  }

  addNewPost(addPost: Posts) : Observable<Posts>{
     addPost.PostId = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Posts>(this.baseApiUrl + '/api/Admin', addPost);
  }

  editPost(postId: string): Observable<Posts> {
    return this.http.get<Posts>(this.baseApiUrl + '/api/Admin/' + postId)
  }

  updatePosts(postId: string, updatePosts: Posts): Observable<Posts> {
    return this.http.put<Posts>(this.baseApiUrl + '/api/Admin/' 
    + postId, updatePosts);
  }

  deletePost(postId: string): Observable<Posts> {
    return this.http.delete<Posts>(this.baseApiUrl + '/api/Admin/' + postId)
  }
}
